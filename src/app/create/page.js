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

export default function CodeEditorPreview () {
	const [html, setHtml] = useState('<div class="text-3xl p-4 font-bold text-blue-500">Hello world!</div>')
	const [css, setCss] = useState('div { color: red; }')
	const [elementType, setElementType] = useState('Atom')
	const [elementId, setElementId] = useState('buttons')
	const [useTailwind, setUseTailwind] = useState(true)
	const [loading, setLoading] = useState(false)

	const disposeEmmetHTMLRef = useRef();
	const iframeViewer = useRef();
	const router = useRouter()

	const handleEditorHTML = (monaco) => disposeEmmetHTMLRef.current = emmetHTML(monaco)
	const handleEditorCSS = (monaco) => disposeEmmetHTMLRef.current = emmetCSS(monaco)

	const combinedCode = `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : `<style>${css}</style>`}
      </head>
      <body style="height:100svh;display:grid;place-items:center;">${html}</body>
    </html>
  `

	async function handleSubmit (e) {
		const data = {
			...e,
			html: html,
			css: css,
			use_tailwind: useTailwind,
			element_id: elementId,
			img_url: 'https://picsum.photos/1280/720'
		}

		setLoading(true)
		try {
			const response = await addElement(data)

			console.log(response)
			Confetti()
		} catch (error) {
			console.log(error)
		}
		setLoading(false)

		// console.log('HTML:', html)
		// console.log('CSS:', css)
		// console.log(useTailwind)
		// generate image of iframeviewr

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

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100svh-35px)] m-4 ' id='capture-area'>
			<div className='flex flex-col'>
				<section className='flex gap-8 items-center mb-2'>
					<button onClick={() => router.back()} className='text-zinc-900 flex gap-1 dark:text-white font-medium'>
						<ChevronLeft width={23} />
						Volver
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
				</section>

				<Tabs defaultValue='html' className='flex-1 flex flex-col'>
					<TabsList className='w-full justify-start'>
						<TabsTrigger value='html'>HTML</TabsTrigger>
						<TabsTrigger value='css' disabled={useTailwind}>CSS</TabsTrigger>
						<TabsTrigger value='js' >JS</TabsTrigger>
					</TabsList>

					<TabsContent value='html' className='flex-1 rounded overflow-hidden'>
						<Editor
							height='100%'
							defaultLanguage='html'
							language={'html'}
							theme='vs-dark'
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
							theme='vs-dark'
							value={css}
							beforeMount={handleEditorCSS}
							onChange={(value) => setCss(value || '')}
							options={{
								readOnly: useTailwind, minimap: {
									enabled: false
								}
							}}
						/>
					</TabsContent>

					<TabsContent value='js' className='flex-1 rounded overflow-hidden'>
						<Editor
							height='100%'
							defaultLanguage='javascript'
							defaultValue={`export default function App() {
  return <div>Hello React!</div>;
}`}
							theme='vs-dark'
							options={{
								automaticLayout: true,
							}}
						/>
					</TabsContent>
				</Tabs>
			</div>

			<div className='bg-white border rounded shadow h-full overflow-auto'>
				<iframe
					ref={iframeViewer}
					srcDoc={combinedCode}
					title='preview'
					className='w-full h-full'
					sandbox='allow-same-origin allow-scripts'
				/>
			</div>
		</div>
	)
}
