"use client"
import { Editor } from '@monaco-editor/react'
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useRef, useState } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/components/ui/resizable"
import { useTheme } from 'next-themes';
import Tabs from '@/components/Tabs';

export default function ComEditor ({ htmlD, cssD, jsD, useTailwind }) {
	const [html, setHtml] = useState(htmlD);
	const [css, setCss] = useState(cssD);
	const [js, setJs] = useState(jsD);
	const [darkMode, setDarkMode] = useState(false);
	const { resolvedTheme } = useTheme()
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
				<Tabs
					tabs={[
						{
							label: 'HTML',
							value: 'html',
							content: (
								<div className='relative'>
									<Editor
										height="100%"
										defaultLanguage="html"
										className='h-[calc(100vh-180px)] rounded overflow-hidden'
										language={"html"}
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
									<button className='absolute top-2 right-2 text-sm text-white bg-zinc-900 rounded-md px-3 py-1' onClick={() => copyCode(html)}>Copy</button>
								</div>
							)
						},
						{
							label: 'CSS',
							value: 'css',
							content: (
								<Editor
									height="100%"
									defaultLanguage="css"
									className='h-[calc(100vh-180px)] rounded overflow-hidden'
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
							)
						},
						{
							label: 'JS',
							value: 'js',
							content: (
								jsD?.trim().length > 0 && <Editor
									height="100%"
									defaultLanguage="javascript"
									className='h-[calc(100vh-180px)] rounded overflow-hidden'
									theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
									value={js}
									onChange={(value) => setJs(value || '')}
									options={{
										automaticLayout: true,
									}}
								/>
							)
						}
					]}
				/>
			</div>
		</ResizablePanel>
		<ResizableHandle withHandle />
		<ResizablePanel>
			<div className="bg-white border rounded shadow h-full overflow-auto relative ml-1.5">
				<iframe
					srcDoc={combinedCode}
					title="preview"
					className='w-full h-full'
					// className='absolute origin-top-left'
					// style={{
					// 	width: `${100 * zoom}%`,
					// 	height: `${100 * zoom}%`,
					// 	transform: `scale(${1 / zoom})`,
					// }}
					sandbox="allow-same-origin allow-scripts"
				/>
				{/* <button className='absolute top-2 right-2 text-sm text-white bg-zinc-900 rounded-md px-3 py-1' onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button> */}
			</div>
		</ResizablePanel>
	</ResizablePanelGroup>
}