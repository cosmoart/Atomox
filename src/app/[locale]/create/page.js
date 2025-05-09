"use client"

import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Link, useRouter } from '@/i18n/navigation'
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import confetti from 'canvas-confetti'
import html2canvas from "html2canvas-pro";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Atoms, Molecules } from '@/lib/conts'


export default function CodeEditorPreview () {
	// const [html, setHtml] = useState('<div class="text-3xl p-4 font-bold text-blue-500">Hola!</div><script>alert("asd")</script>')
	const [html, setHtml] = useState('<div class="text-3xl p-4 font-bold text-blue-500">Hola!</div>')
	const [css, setCss] = useState('div { color: red; }')
	const [useTailwind, setUseTailwind] = useState(true)
	const disposeEmmetHTMLRef = useRef();
	const iframeViewer = useRef();
	const router = useRouter()

	const handleEditorHTML = (monaco) => {
		disposeEmmetHTMLRef.current = emmetHTML(monaco);
	};
	const handleEditorCSS = (monaco) => {
		disposeEmmetHTMLRef.current = emmetCSS(monaco)
	};

	const combinedCode = `
    <html>
      <head>
        ${useTailwind ? `<script src="https://cdn.tailwindcss.com"></script>` : `<style>${css}</style>`}
      </head>
      <body style="width:1280px;height:720px;">${html}</body>
    </html>
  `
	function handleSubmit (e) {
		e.preventDefault()
		// console.log('HTML:', html)
		// console.log('CSS:', css)
		// console.log('Combined Code:', combinedCode)
		// generate image of iframeviewr

		handleCapture()
		handleClick()
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
		const dataUrl = canvas.toDataURL("image/png");

		// Descargar la imagen
		const link = document.createElement("a");
		link.href = dataUrl;
		link.download = "captura.png";
		link.click();
	};

	const handleClick = () => {
		var count = 200;
		var defaults = {
			origin: { y: 0.7 }
		};

		function fire (particleRatio, opts) {
			confetti({
				...defaults,
				...opts,
				particleCount: Math.floor(count * particleRatio)
			});
		}

		fire(0.25, {
			spread: 26,
			startVelocity: 55,
		});
		fire(0.2, {
			spread: 60,
		});
		fire(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2
		});
		fire(0.1, {
			spread: 120,
			startVelocity: 45,
		});
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100svh-35px)] m-4 " id="capture-area">
			<div className="flex flex-col">
				<section className='flex gap-8 items-center mb-2'>
					<button onClick={() => router.back()} className="text-lg text-zinc-900 dark:text-white">
						Volver
					</button>

					<div className="flex items-center gap-2 ">
						<label htmlFor="mode">Tailwind</label>
						<Switch
							id="mode"
							checked={useTailwind}
							onCheckedChange={setUseTailwind}
						/>
					</div>

					<Dialog>
						<DialogTrigger>Send</DialogTrigger>
						<DialogContent>
							<DialogTitle>Are you absolutely sure?</DialogTitle>
							<div className='max-w-sm mx-auto w-full py-6'>
								<h3 className='font-medium text-lg mb-4'>Atoms - Loaders</h3>
								<form className='flex flex-col gap-2' onSubmit={handleSubmit}>
									<input type="text" placeholder='Titulo' className='px-3 py-2 rounded-lg card-border w-full' />
									<input type="text" placeholder='Creditos' className='px-3 py-2 rounded-lg card-border w-full' />
									<button className='px-10 py-2 rounded-lg bg-blue-600 mt-5'>Send</button>
								</form>
							</div>
						</DialogContent>
					</Dialog>

					<Dialog defaultOpen={true}>
						<DialogContent>
							<DialogTitle>What do you want to do?</DialogTitle>
							<Tabs defaultValue="atom" className="flex-1 flex flex-col">
								<TabsList className="w-full justify-start">
									<TabsTrigger value="atom">Atom</TabsTrigger>
									<TabsTrigger value="molecule" >Molecule</TabsTrigger>
								</TabsList>

								<TabsContent value="atom" className="flex-1 rounded overflow-hidden flex flex-wrap gap-2">
									{
										Atoms.map((atom, index) => (
											<button key={index} className='rounded bg-zinc-800 px-4 py-2 cursor-pointer'>
												{atom.name}
											</button>
										))
									}
								</TabsContent>

								<TabsContent value="molecule" className="flex-1 rounded overflow-hidden flex flex-wrap gap-2">
									{
										Molecules.map((molecule, index) => (
											<button key={index} className='rounded bg-zinc-800 px-4 py-2 cursor-pointer'>
												{molecule.name}
											</button>
										))
									}
								</TabsContent>
							</Tabs>

							<DialogClose asChild>
								<button type="button" variant="secondary">
									Close
								</button>
							</DialogClose>
						</DialogContent>
					</Dialog>


				</section>

				<Tabs defaultValue="html" className="flex-1 flex flex-col">
					<TabsList className="w-full justify-start">
						<TabsTrigger value="html">HTML</TabsTrigger>
						<TabsTrigger value="css" disabled={useTailwind}>CSS</TabsTrigger>
						<TabsTrigger value="js" >JS</TabsTrigger>
					</TabsList>

					<TabsContent value="html" className="flex-1 rounded overflow-hidden">
						<Editor
							height="100%"
							defaultLanguage="html"
							language={"html"}
							theme="vs-dark"
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

					<TabsContent value="css" className="flex-1 rounded overflow-hidden">
						<Editor
							height="100%"
							defaultLanguage="css"
							theme="vs-dark"
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

					<TabsContent value="js" className="flex-1 rounded overflow-hidden">
						<Editor
							height="100%"
							defaultLanguage="javascript"
							defaultValue={`export default function App() {
  return <div>Hello React!</div>;
}`}
							theme="vs-dark"
							options={{
								automaticLayout: true,
							}}
						/>
					</TabsContent>
				</Tabs>
			</div>

			{/* Preview section */}
			<div className="bg-white border rounded shadow h-full overflow-auto">
				<iframe
					ref={iframeViewer}
					srcDoc={combinedCode}
					title="preview"
					className="w-full h-full"
					sandbox="allow-same-origin allow-scripts"
				/>
			</div>
		</div>
	)
}
