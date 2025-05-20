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
import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs'
import { addElement } from '@/lib/actions'
import { useTheme } from 'next-themes'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Atoms } from '@/lib/conts'
import Image from 'next/image'
import tailwindIcon from '@/assets/icons/tailwind.svg'
import { dark } from '@clerk/themes'

export default function CodeEditorPreview () {
	const [html, setHtml] = useState(Atoms[0].htmlTailwind ?? '')
	const [css, setCss] = useState('')
	const [js, setJs] = useState(Atoms[0].js ?? '')
	const [elementType, setElementType] = useState('Atom')
	const [elementId, setElementId] = useState('buttons')
	const [useTailwind, setUseTailwind] = useState(true)
	const { resolvedTheme } = useTheme()
	const [status, setStatus] = useState(undefined) // undefined | 'loading' | 'success' | 'error'

	const disposeEmmetHTMLRef = useRef();
	const iframeViewer = useRef();
	const router = useRouter()

	const handleEditorHTML = (monaco) => disposeEmmetHTMLRef.current = emmetHTML(monaco)
	const handleEditorCSS = (monaco) => disposeEmmetHTMLRef.current = emmetCSS(monaco)

	const combinedCode = `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
				<style>
				html {
					box-sizing: border-box;
					font-family: sans-serif;
				}
				*,
				*::before,
				*::after {
					box-sizing: inherit;
				}
				body{
					margin: 0;
					min-height:100svh;
					display:grid;
					place-items:center;
				}
				${css}
				</style>
      </head>
      <body>
				${html}
			<script>${js}</script>
			</body>
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
		}

		setStatus('loading')
		console.log(data);

		try {
			const response = await addElement(data)
			if (response?.error) throw new Error(response.error)
			setStatus('success')
			Confetti()
		} catch (error) {
			setStatus('error')
			console.log(error)
		}

		// handleCapture()
	}

	const handleCapture = async () => {
		const element = iframeViewer.current;
		if (!element) return;

		const canvas = await html2canvas(element.contentWindow.document.documentElement, {
			useCORS: true,
			allowTaint: true,
			width: 1280,
			height: 720,
		});
		const dataUrl = canvas.toDataURL('image/png');

		const link = document.createElement('a');
		link.href = dataUrl;
		link.download = 'captura.png';
		link.click();
	};

	return <ResizablePanelGroup className='h-[calc(100svh-35px)]! w-auto! m-4' direction='horizontal'>
		<ResizablePanel >
			<div className='flex flex-col h-full mr-1.5'>
				<DialogStart useTailwind={useTailwind} setUseTailwind={setUseTailwind} setHtml={setHtml} setCss={setCss} setElementType={setElementType} setElementId={setElementId} elementType={elementType} />

				<nav className='flex gap-8 items-center justify-between mb-2'>
					<button onClick={() => router.back()} className='text-zinc-900 flex gap-1 dark:text-white font-medium cursor-pointer group active:scale-95 transition-transform'>
						<ChevronLeft width={23} className='group-hover:-translate-x-1 transition-transform' />
						<span>Volver</span>
					</button>

					<div className='flex items-center gap-5'>
						<div className='flex items-center gap-2 my-2'>
							<label htmlFor='mode'>
								<Image src={tailwindIcon} alt='Tailwind logo' width={20} height={20} />
							</label>
							<Switch
								id='mode'
								checked={useTailwind}
								onCheckedChange={setUseTailwind}
							/>
						</div>

						<SignedIn>
							<DialogSubmit onSubmit={handleSubmit} status={status} elementId={elementId} elementType={elementType} />
						</SignedIn>
						<SignedOut>
							<SignUpButton mode='modal'
								appearance={{
									baseTheme: resolvedTheme === 'dark' ? dark : undefined,
									layout: {
										unsafe_disableDevelopmentModeWarnings: true,
									},
								}}
							>
								<button className='px-10 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all active:scale-95 card-border cursor-pointer'>Create</button>
							</SignUpButton>
						</SignedOut>
					</div>
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
