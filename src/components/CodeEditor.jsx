"use client"
import { Editor } from '@monaco-editor/react'
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useRef, useState } from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/components/ui/resizable"
import { useTheme } from 'next-themes';
import Tabs from '@/components/Tabs';
import CopyButton from './ui/copy-btn';

export default function CodeEditor ({ htmlD, cssD, jsD, useTailwind, className = '', elementType }) {
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
      <body>
				${html}
				<script>${js}</script>
			</body>
    </html>
  `

	return <ResizablePanelGroup className={`h-full grow ${elementType === 'atoms' ? "max-h-[800px]" : "max-h-[900px]"}  ${className}`} direction="horizontal">
		<ResizablePanel defaultSize={elementType === 'atoms' ? 45 : 40}>
			<div className="flex flex-col h-full mr-1.5">
				<Tabs
					tabs={[
						{
							label: 'HTML',
							value: 'html',
							content: (
								<div className='relative h-full rounded overflow-hidden'>
									<Editor
										height="100%"
										defaultLanguage="html"
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
									<CopyButton textToCopy={html} />
								</div>
							)
						},
						{
							label: 'CSS',
							value: 'css',
							content: (
								cssD?.trim().length > 0 && <div className='relative h-full rounded overflow-hidden'>
									<Editor
										height="100%"
										defaultLanguage="css"
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
									<CopyButton textToCopy={css} />
								</div>
							)
						},
						{
							label: 'JS',
							value: 'js',
							content: (
								jsD?.trim().length > 0 && <div className='relative h-full rounded overflow-hidden'>
									<Editor
										height="100%"
										defaultLanguage="javascript"
										theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
										value={js}
										onChange={(value) => setJs(value || '')}
										options={{
											automaticLayout: true,
											minimap: {
												enabled: false
											}
										}}
									/>
									<CopyButton textToCopy={js} />
								</div>
							)
						}
					]}
				/>
			</div>
		</ResizablePanel>
		<ResizableHandle withHandle />
		<ResizablePanel defaultSize={elementType === 'atoms' ? 55 : 60}>
			<div className="bg-white rounded shadow h-full overflow-auto relative ml-1.5">
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