// import { useTheme } from 'next-themes';
// import { editorOptions } from '@/lib/conts';
// import { useRef } from 'react';

// export default function Editor ({ language, value, onChange }) {
// 	const { resolvedTheme } = useTheme()
// 	const disposeEmmetHTMLRef = useRef();

// 	const handleEditorHTML = (monaco) => disposeEmmetHTMLRef.current = emmetHTML(monaco)
// 	const handleEditorCSS = (monaco) => disposeEmmetHTMLRef.current = emmetCSS(monaco)

// 	return (
// 		<Editor
// 			height="100%"
// 			defaultLanguage={language}
// 			language={language}
// 			theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
// 			value={value}
// 			beforeMount={language === 'html' ? handleEditorHTML : (language === 'css' ? handleEditorCSS : undefined)}
// 			onChange={onChange}
// 			options={editorOptions}
// 		/>
// 	)
// }