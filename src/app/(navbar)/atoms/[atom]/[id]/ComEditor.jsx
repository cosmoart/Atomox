"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Editor } from '@monaco-editor/react'
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useRef } from 'react';

export default function ComEditor () {
	const disposeEmmetHTMLRef = useRef();
	const useTailwind = true

	const handleEditorHTML = (monaco) => {
		disposeEmmetHTMLRef.current = emmetHTML(monaco);
	};
	const handleEditorCSS = (monaco) => {
		disposeEmmetHTMLRef.current = emmetCSS(monaco)
	};

	const combinedCode = `
    <html>
      <head>
        ${useTailwind ? `<script src="https://cdn.tailwindcss.com"></script>` : `<style>div { color: red; }</style>`}
      </head>
      <body><div class="text-3xl p-4 font-bold text-blue-500">Hola!</div></body>
    </html>
  `

	return (
		< div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3" >
			<div className="flex flex-col">
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
							value='<div class="text-3xl p-4 font-bold text-blue-500">Hola!</div>'
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
							value="div { color: red; }"
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
					srcDoc={combinedCode}
					title="preview"
					className="w-full h-full"
					sandbox="allow-same-origin allow-scripts"
				/>
			</div>
		</div>
	)
}