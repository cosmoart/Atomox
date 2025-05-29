import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton ({ textToCopy, className = '' }) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(textToCopy);
			setIsCopied(true);

			setTimeout(() => {
				setIsCopied(false);
			}, 1.5 * 1000);
		} catch (err) {
			console.error('Error al copiar:', err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className={`
        inline-flex bg-zinc-100 hover:bg-zinc-200 dark:text-white dark:bg-zinc-700 dark:hover:bg-zinc-800 cursor-pointer items-center gap-2 px-2 py-0.5 rounded-lg
        transition-all active:scale-90
        ${className}
      `}
			disabled={isCopied}
		>
			<div className="transition-transform">
				{isCopied ? (
					<Check size={15} />
				) : (
					<Copy size={15} />
				)}
			</div>

			<span className="transition-all text-[15px]">
				{isCopied ? 'Copied!' : 'Copy'}
			</span>
		</button>
	);
};
