'use client'

import { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import { useRouter } from 'next/navigation'
import { emmetHTML, emmetCSS } from 'emmet-monaco-es';
import { ChevronLeft } from 'lucide-react'
import Confetti from '@/lib/confetti'
import DialogSubmit from './DialogSubmit'
import DialogStart from './DialogStart'
import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs'
import { addElement } from '@/lib/actions'
import { useTheme } from 'next-themes'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Tabs from '@/components/Tabs';
import { Atoms, editorOptions, iframeHTML } from '@/lib/conts'
import { dark } from '@clerk/themes'
import '@/app/theme-toggle.css'

export default function CreateComponent () {
	const [html, setHtml] = useState(Atoms[0].htmlTailwind ?? '')
	const [css, setCss] = useState('')
	const [js, setJs] = useState(Atoms[0].js ?? '')
	const [elementType, setElementType] = useState('Atoms')
	const [elementId, setElementId] = useState('buttons')
	const [useTailwind, setUseTailwind] = useState(true)
	const { resolvedTheme } = useTheme()
	const [darkMode, setDarkMode] = useState(resolvedTheme === 'dark')
	const [status, setStatus] = useState(undefined) // undefined | 'loading' | 'success' | 'error'

	const disposeEmmetHTMLRef = useRef();
	const iframeViewer = useRef();
	const router = useRouter()

	const handleEditorHTML = (monaco) => disposeEmmetHTMLRef.current = emmetHTML(monaco)
	const handleEditorCSS = (monaco) => disposeEmmetHTMLRef.current = emmetCSS(monaco)

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

		try {
			const response = await addElement(data)
			if (response?.error) throw new Error(response.error)
			setStatus('success')
			Confetti()
		} catch (error) {
			setStatus('error')
		}
	}

	const handleBack = () => {
		const referrer = document.referrer;
		const currentDomain = window.location.origin;

		if (referrer && referrer.startsWith(currentDomain)) router.back();
		else router.push('/')
	};

	return <ResizablePanelGroup className='h-[calc(100svh-25px)]! w-auto! m-3' direction='horizontal'>
		<ResizablePanel >
			<div className='flex flex-col h-full mr-1.5'>
				<DialogStart useTailwind={useTailwind} setUseTailwind={setUseTailwind} setHtml={setHtml} setCss={setCss} setElementType={setElementType} setElementId={setElementId} elementType={elementType} />

				<nav className='flex gap-8 items-center justify-between mb-1.5'>
					<button onClick={handleBack} className='text-zinc-900 flex gap-1 dark:text-white font-medium cursor-pointer group active:scale-95 transition-transform'>
						<ChevronLeft width={23} className='group-hover:-translate-x-1 transition-transform' />
						<span>Back</span>
					</button>

					<div className='flex items-center gap-2'>
						<label className='theme-toggle p-1 rounded-lg dark:bg-white! bg-zinc-900!' title={darkMode ? 'Remove \'dark\' class from body' : 'Add \'dark\' class to body'} >
							<input type='checkbox' defaultChecked={darkMode} />
							<svg
								onClick={() => setDarkMode(!darkMode)}
								xmlns='http://www.w3.org/2000/svg'
								aria-hidden='true'
								className='theme-toggle__within invert'
								height='26px'
								width='26px'
								viewBox='0 0 32 32'
								fill='currentColor'
							>
								<clipPath id='theme-toggle__within__clip'>
									<path d='M0 0h32v32h-32ZM6 16A1 1 0 0026 16 1 1 0 006 16' />
								</clipPath>
								<g clipPath='url(#theme-toggle__within__clip)'>
									<path d='M30.7 21.3 27.1 16l3.7-5.3c.4-.5.1-1.3-.6-1.4l-6.3-1.1-1.1-6.3c-.1-.6-.8-.9-1.4-.6L16 5l-5.4-3.7c-.5-.4-1.3-.1-1.4.6l-1 6.3-6.4 1.1c-.6.1-.9.9-.6 1.3L4.9 16l-3.7 5.3c-.4.5-.1 1.3.6 1.4l6.3 1.1 1.1 6.3c.1.6.8.9 1.4.6l5.3-3.7 5.3 3.7c.5.4 1.3.1 1.4-.6l1.1-6.3 6.3-1.1c.8-.1 1.1-.8.7-1.4zM16 25.1c-5.1 0-9.1-4.1-9.1-9.1 0-5.1 4.1-9.1 9.1-9.1s9.1 4.1 9.1 9.1c0 5.1-4 9.1-9.1 9.1z' />
								</g>
								<path
									className='theme-toggle__within__circle'
									d='M16 7.7c-4.6 0-8.2 3.7-8.2 8.2s3.6 8.4 8.2 8.4 8.2-3.7 8.2-8.2-3.6-8.4-8.2-8.4zm0 14.4c-3.4 0-6.1-2.9-6.1-6.2s2.7-6.1 6.1-6.1c3.4 0 6.1 2.9 6.1 6.2s-2.7 6.1-6.1 6.1z'
								/>
								<path
									className='theme-toggle__within__inner'
									d='M16 9.5c-3.6 0-6.4 2.9-6.4 6.4s2.8 6.5 6.4 6.5 6.4-2.9 6.4-6.4-2.8-6.5-6.4-6.5z'
								/>
							</svg>
						</label>

						<button
							onClick={() => setUseTailwind(!useTailwind)}
							title={useTailwind ? 'Disable Tailwind CSS' : 'Enable Tailwind CSS'}
							className={`rounded-lg p-1 shadow transition group cursor-pointer active:scale-95 ${useTailwind
								? 'bg-sky-500 text-white'
								: 'bg-gray-200 dark:bg-gray-800 dark:text-white'
								}`}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 54 33'
								className='size-[26px] group-hover:scale-110 transition-transform'
								fill='currentColor'
							>
								<path d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-5 9.45-4.2 2.05.5 3.5 2 5.1 3.65C30.57 12.65 33.07 15 38.4 15c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 5-9.45 4.2-2.05-.5-3.5-2-5.1-3.65C34.83 2.35 32.33 0 27 0zM13.5 18c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-5 9.45-4.2 2.05.5 3.5 2 5.1 3.65C17.07 30.65 19.57 33 24.9 33c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 5-9.45 4.2-2.05-.5-3.5-2-5.1-3.65C21.33 20.35 18.83 18 13.5 18z' />
							</svg>
						</button>

						<SignedIn>
							<DialogSubmit onSubmit={handleSubmit} status={status} elementId={elementId} elementType={elementType} />
						</SignedIn>
						<SignedOut>
							<SignUpButton mode='modal'
								appearance={{
									baseTheme: resolvedTheme === 'dark' ? dark : undefined,
									elements: {
										logoBox: 'hidden!',
										modalContent: 'w-full m-auto!',
										buttonArrowIcon: 'hidden!',
										formButtonPrimary: 'btn-primary gradient1 shining text-white! font-medium! shadow-none! text-[15px]! rounded-lg!',
										footerAction: 'py-3.5!',
										headerSubtitle: 'hidden',
										card: 'gap-7! bg-transparent! pt-5!',
										cardBox: 'w-auto!',
										rootBox: 'card-border w-full! dark:bg-zinc-900 mx-auto max-w-[26rem] rounded-lg',
										socialButtonsBlockButton: 'card-border',
										footer: 'clerk-footer mt-0! pt-0!',
										headerTitle: 'text-xl!',
										formFieldInput: 'card-border dark:bg-zinc-800/40! p-1.5',
									},
									layout: {
										unsafe_disableDevelopmentModeWarnings: true,
									},
								}}
							>
								<button className='px-9 py-1.5 rounded-lg shining gradient1 text-[15px] tracking-wide font-medium text-white transition-all active:scale-95 cursor-pointer'>Create</button>
							</SignUpButton>
						</SignedOut>
					</div>
				</nav>

				<Tabs
					styled
					tabs={[
						{
							label: 'HTML',
							value: 'html',
							content: (
								<div className='h-full rounded overflow-hidden'>
									<Editor
										height='100%'
										defaultLanguage='html'
										theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
										value={html}
										beforeMount={handleEditorHTML}
										onChange={(value) => setHtml(value || '')}
										options={editorOptions}
									/>
								</div>
							)
						},
						{
							label: 'CSS',
							value: 'css',
							content: (
								<div className='h-full rounded overflow-hidden'>
									<Editor
										height='100%'
										defaultLanguage='css'
										theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
										value={css}
										beforeMount={handleEditorCSS}
										onChange={(value) => setCss(value || '')}
										options={editorOptions}
									/>
								</div>
							)
						},
						{
							label: 'JS',
							value: 'js',
							content: (
								<div className='h-full rounded overflow-hidden'>
									<Editor
										height='100%'
										defaultLanguage='javascript'
										theme={resolvedTheme === 'dark' ? 'vs-dark' : 'vs'}
										value={js}
										onChange={(value) => setJs(value || '')}
										options={editorOptions}
									/>
								</div>
							)
						}
					]}
				/>
			</div>
		</ResizablePanel>
		<ResizableHandle withHandle />
		<ResizablePanel>
			<div className='bg-white rounded shadow h-full overflow-auto ml-1.5'>
				<iframe
					ref={iframeViewer}
					srcDoc={iframeHTML({ html, css, js, useTailwind, elementType, darkMode })}
					title='preview'
					className='w-full h-full'
					sandbox='allow-same-origin allow-scripts'
				/>
			</div>
		</ResizablePanel>
	</ResizablePanelGroup>
}
