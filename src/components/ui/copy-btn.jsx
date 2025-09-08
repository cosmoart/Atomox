import React, { useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { MagicMotion } from 'react-magic-motion';

export default function CopyButton ({ textToCopy }) {
	const [isCopied, setIsCopied] = useState(false);
	const buttonRef = useRef(null);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setIsCopied(true);

			const rect = buttonRef.current.getBoundingClientRect();
			const x = (rect.left + rect.width / 2) / window.innerWidth;
			const y = (rect.top + rect.height / 2) / window.innerHeight;

			confetti({
				particleCount: 60,
				spread: 70,
				startVelocity: 25,
				scalar: 0.6,
				origin: { x, y },
			});

			setTimeout(() => {
				setIsCopied(false);
			}, 1100);
		} catch (err) {
			console.error('Error:', err)
		}
	};

	return (
		<MagicMotion>
			<button
				ref={buttonRef}
				onClick={handleCopy}
				className='absolute! bottom-2 right-2 inline-flex btn-primary gradient1 shining items-center gap-1 px-3 py-0.5 rounded-full not-disabled:cursor-pointer transition-all not-disabled:active:scale-90 text-[15px]'
				disabled={isCopied}
			>
				{isCopied
					? (<svg key="exclude" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 48 48"><defs><mask id="ipSCheckOne0"><g fill="none" strokeLinejoin="round" strokeWidth={4}><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"></path><path stroke="#000" strokeLinecap="round" d="m16 24l6 6l12-12"></path></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)"></path></svg>)
					: (<svg key="exclude" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M7 3v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3h1a2 2 0 0 1 2 2v11a6 6 0 0 1-6 6H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm5 11H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m3-4H9a1 1 0 0 0-.117 1.993L9 12h6a1 1 0 1 0 0-2m-1-8a1 1 0 0 1 .117 1.993L14 4h-4a1 1 0 0 1-.117-1.993L10 2z" /></g></svg>
					)}

				{isCopied ? 'Copied!' : 'Copy'}
			</button>
		</MagicMotion>
	);
}