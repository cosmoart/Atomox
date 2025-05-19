"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Editor } from '@monaco-editor/react'
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useRef, useState } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/components/ui/resizable"

export default function ComEditor ({ htmlD, cssD, jsD, useTailwind }) {
	const [html, setHtml] = useState(htmlD);
	const [css, setCss] = useState(cssD);
	const [js, setJs] = useState(jsD);
	const [darkMode, setDarkMode] = useState(false);
	const disposeEmmetHTMLRef = useRef();

	const handleEditorHTML = (monaco) => {
		disposeEmmetHTMLRef.current = emmetHTML(monaco);
	};
	const handleEditorCSS = (monaco) => {
		disposeEmmetHTMLRef.current = emmetCSS(monaco)
	};

	const combinedCode = `
    <html class="${darkMode ? 'dark' : ''}">
      <head>
        ${useTailwind ? `<script src="https://cdn.tailwindcss.com"></script>` : ``}
				<style>
				${useTailwind ? `@custom-variant dark (&:where(.dark, .dark *));` : ``}
					${css}
				</style>
      </head>
      <body style="min-height:100svh;display:grid;place-items:center;">
				${html}
				<script>${js}</script>
			</body>
    </html>
  `

	function copyCode (code) {
		navigator.clipboard.writeText(code)
	}

	return <ResizablePanelGroup className="h-full grow" direction="horizontal">
		<ResizablePanel>
			<div className="flex flex-col h-full mr-1.5">
				<Tabs defaultValue="html" className="flex-1 flex flex-col">
					<TabsList className="w-full justify-start">
						<TabsTrigger value="html">HTML</TabsTrigger>
						<TabsTrigger value="css">CSS</TabsTrigger>
						{jsD?.trim().length > 0 && <TabsTrigger value="js">JS</TabsTrigger>}
					</TabsList>

					<TabsContent value="html" className="flex-1 rounded-lg overflow-hidden relative">
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
						<button className='absolute bottom-2.5 left-2.5 text-sm text-white font-medium bg-zinc-900/80 rounded-md px-3 py-1' onClick={() => copyCode(html)}>Copy</button>
					</TabsContent>

					<TabsContent value="css" className="flex-1 rounded-lg overflow-hidden">
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
					{jsD?.trim().length > 0 && <TabsContent value="js" className="flex-1 rounded-lg overflow-hidden relative">
						<Editor
							height="100%"
							defaultLanguage="javascript"
							theme="vs-dark"
							value={js}
							onChange={(value) => setJs(value || '')}
							options={{
								automaticLayout: true,
							}}
						/>
					</TabsContent>}
				</Tabs>
			</div>
		</ResizablePanel>
		<ResizableHandle withHandle />
		<ResizablePanel>
			<div className="bg-white border rounded shadow h-full overflow-auto relative ml-1.5">
				<iframe
					srcDoc={combinedCode}
					title="preview"
					className="w-full h-full"
					sandbox="allow-same-origin allow-scripts"
				/>
				<button className='absolute top-2 right-2 text-sm text-white bg-zinc-900 rounded-md px-3 py-1' onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
			</div>
		</ResizablePanel>
	</ResizablePanelGroup>

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 h-full grow" >
			<div className="flex flex-col">
				<Tabs defaultValue="html" className="flex-1 flex flex-col">
					<TabsList className="w-full justify-start">
						<TabsTrigger value="html">HTML</TabsTrigger>
						<TabsTrigger value="css">CSS</TabsTrigger>
						{jsD?.trim().length > 0 && <TabsTrigger value="js">JS</TabsTrigger>}
					</TabsList>

					<TabsContent value="html" className="flex-1 rounded-lg overflow-hidden relative">
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
						<button className='absolute bottom-2.5 left-2.5 text-sm text-white font-medium bg-zinc-900/80 rounded-md px-3 py-1' onClick={() => copyCode(html)}>Copy</button>
					</TabsContent>

					<TabsContent value="css" className="flex-1 rounded-lg overflow-hidden">
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
					{jsD?.trim().length > 0 && <TabsContent value="js" className="flex-1 rounded-lg overflow-hidden relative">
						<Editor
							height="100%"
							defaultLanguage="javascript"
							theme="vs-dark"
							value={js}
							onChange={(value) => setJs(value || '')}
							options={{
								automaticLayout: true,
							}}
						/>
					</TabsContent>}
				</Tabs>
			</div>

			{/* Preview section */}
			<div className="bg-white border rounded shadow h-full overflow-auto relative">
				<iframe
					srcDoc={combinedCode}
					title="preview"
					className="w-full h-full"
					sandbox="allow-same-origin allow-scripts"
				/>
				<button className='absolute top-2 right-2 text-sm text-white bg-zinc-900 rounded-md px-3 py-1' onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
			</div>
		</div>
	)
}