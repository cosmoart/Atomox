'use client'

import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { useRouter } from 'next/navigation'
import { emmetHTML, emmetCSS } from 'emmet-monaco-es';
import html2canvas from 'html2canvas-pro';
import { ChevronLeft } from 'lucide-react'
import Confetti from '@/lib/confetti'
import DialogSubmit from './DialogSubmit'
import DialogStart from './DialogStart'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { addElement } from '@/lib/actions'
import { useTheme } from 'next-themes'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Atoms } from '@/lib/conts'

export default function CodeEditorPreview () {
	const [html, setHtml] = useState(Atoms[0].html ?? '')
	const [css, setCss] = useState(Atoms[0].css ?? '')
	const [js, setJs] = useState(Atoms[0].js ?? '')
	const [elementType, setElementType] = useState('Atom')
	const [elementId, setElementId] = useState('buttons')
	const [useTailwind, setUseTailwind] = useState(true)
	const { resolvedTheme } = useTheme()
	const [loading, setLoading] = useState(false)

	const disposeEmmetHTMLRef = useRef();
	const iframeViewer = useRef();
	const router = useRouter()

	const handleEditorHTML = (monaco) => disposeEmmetHTMLRef.current = emmetHTML(monaco)
	const handleEditorCSS = (monaco) => disposeEmmetHTMLRef.current = emmetCSS(monaco)

	const combinedCode = `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
				<style>${css}</style>
      </head>
      <body style="height:100svh;display:grid;place-items:center;">${html}</body>
    </html>
  `

	async function handleSubmit (e) {
		const data = {
			...e,
			html: html,
			css: css,
			js: js,
			use_tailwind: useTailwind,
			element_id: elementId,
			tags: e.tags.filter(tag => tag.length > 1).join(','),
			img_url: js || html.includes('script') ? 'https://picsum.photos/1280/720' : undefined
		}

		setLoading(true)
		console.log(data);

		try {
			const response = await addElement(data)

			console.log(response)
			Confetti()
		} catch (error) {
			console.log(error)
		}
		setLoading(false)

		// handleCapture()
	}

	const handleCapture = async () => {
		// const element = document.getElementById("capture-area");
		const element = iframeViewer.current;
		if (!element) return;

		const canvas = await html2canvas(element.contentWindow.document.documentElement, {
			useCORS: true,
			allowTaint: true,
			width: 1280,
			height: 720,
		});
		const dataUrl = canvas.toDataURL('image/png');

		// Descargar la imagen
		const link = document.createElement('a');
		link.href = dataUrl;
		link.download = 'captura.png';
		link.click();
	};

	return <ResizablePanelGroup className='h-[calc(100svh-35px)]! w-auto! m-4' direction='horizontal'>
		<ResizablePanel >
			<div className='flex flex-col h-full mr-1.5'>
				<nav className='flex gap-8 items-center justify-between mb-2'>
					<button onClick={() => router.back()} className='text-zinc-900 flex gap-1 dark:text-white font-medium cursor-pointer group active:scale-95 transition-transform'>
						<ChevronLeft width={23} className='group-hover:-translate-x-1 transition-transform' />
						<span>Volver</span>
					</button>

					<div className='flex items-center gap-2 '>
						<label htmlFor='mode'>Tailwind</label>
						<Switch
							id='mode'
							checked={useTailwind}
							onCheckedChange={setUseTailwind}
						/>
					</div>

					<SignedIn>
						<DialogSubmit onSubmit={handleSubmit} elementId={elementId} elementType={elementType} />
					</SignedIn>
					<SignedOut>
						<button type='submit' className='px-10 py-2 rounded-lg bg-red-600'>Send</button>
					</SignedOut>

					<DialogStart useTailwind={useTailwind} setUseTailwind={setUseTailwind} setHtml={setHtml} setCss={setCss} setElementType={setElementType} setElementId={setElementId} />
				</nav>

				<Tabs defaultValue='html' className='flex-1 flex flex-col'>
					<TabsList className='w-full justify-start'>
						<TabsTrigger value='html'>HTML</TabsTrigger>
						<TabsTrigger value='css'>CSS</TabsTrigger>
						<TabsTrigger value='js' >JS</TabsTrigger>
					</TabsList>

					<TabsContent value='html' className='flex-1 rounded overflow-hidden'>
						<Editor
							height='100%'
							defaultLanguage='html'
							language={'html'}
							theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
							value={html}
							beforeMount={handleEditorHTML}
							onChange={(value) => setHtml(value || '')}
							options={{
								minimap: {
									enabled: false
								}
							}}
						/>
					</TabsContent>

					<TabsContent value='css' className='flex-1 rounded overflow-hidden'>
						<Editor
							height='100%'
							defaultLanguage='css'
							theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
							value={css}
							beforeMount={handleEditorCSS}
							onChange={(value) => setCss(value || '')}
							options={{
								minimap: {
									enabled: false
								}
							}}
						/>
					</TabsContent>

					<TabsContent value='js' className='flex-1 rounded overflow-hidden'>
						<Editor
							height='100%'
							defaultLanguage='javascript'
							defaultValue={js}
							theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
							onChange={(value) => setJs(value || '')}
							options={{
								automaticLayout: true,
								minimap: {
									enabled: false
								}
							}}
						/>
					</TabsContent>
				</Tabs>
			</div>
		</ResizablePanel>
		<ResizableHandle withHandle />
		<ResizablePanel>
			<div className='bg-white border rounded shadow h-full overflow-auto ml-1.5'>
				<iframe
					ref={iframeViewer}
					srcDoc={combinedCode}
					title='preview'
					className='w-full h-full'
					sandbox='allow-same-origin allow-scripts'
				/>
			</div>
		</ResizablePanel>
	</ResizablePanelGroup>
}
