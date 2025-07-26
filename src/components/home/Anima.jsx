"use client"
import { useEffect, useState } from 'react'

const ICONS = ['🎈', '⭐', '🎉', '💬', '🌟', '🔥', '💖']

export default function BubbleIconsBackground () {
	const [bubbles, setBubbles] = useState([])

	useEffect(() => {
		const interval = setInterval(() => {
			const id = Date.now()
			const left = Math.random() * 100
			const icon = ICONS[Math.floor(Math.random() * ICONS.length)]
			const size = 24 + Math.random() * 24

			setBubbles((prev) => [
				...prev,
				{ id, left, icon, size }
			])

			// Cleanup old bubbles after 6s
			setTimeout(() => {
				setBubbles((prev) => prev.filter((b) => b.id !== id))
			}, 5000)
		}, 700)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
			{bubbles.map((bubble) => (
				<span
					key={bubble.id}
					className="absolute animate-bubble"
					style={{
						left: `${bubble.left}%`,
						fontSize: `${bubble.size}px`,
						bottom: '-40px',
					}}
				>
					{bubble.icon}
				</span>
			))}

			<style jsx>{`
        .animate-bubble {
          animation: floatUp 10s ease-in forwards;
          position: absolute;
          opacity: 0.9;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(2rem) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) scale(0.4);
            opacity: 0;
          }
        }
      `}</style>
		</div>
	)
}
