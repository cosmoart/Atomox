"use client"
import { useState, useEffect } from 'react';
import sampleIcons from '@/assets/icons/FloatingIcons';
const icons = sampleIcons;
const AnimatedIconsBackground = ({ density = 10 }) => {
	const [particles, setParticles] = useState([]);

	const animationDuration = 9000;

	useEffect(() => {
		if (icons.length === 0) return;

		const generateParticles = () => {
			const newParticles = [];
			for (let i = 0; i < density; i++) {
				newParticles.push({
					id: i,
					icon: icons[Math.floor(Math.random() * icons.length)],
					left: Math.random() * 100,
					delay: -(Math.random() * animationDuration),
					size: 20 + Math.random() * 70,
				});
			}
			setParticles(newParticles);
		};

		generateParticles();
	}, [icons, density, animationDuration]);

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{particles.map((particle) => (
				<div
					key={particle.id}
					className="absolute animate-float-up"
					style={{
						left: `${particle.left}%`,
						animationDelay: `${particle.delay}ms`,
						animationDuration: `${animationDuration}ms`,
						'--start-size': `${particle.size}px`,
						'--end-size': `${particle.size * 0.3}px`,
					}}
				>
					<div
						className="text-blue-200 opacity-40"
						style={{
							fontSize: `${particle.size}px`,
							filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
						}}
					>
						{particle.icon}
					</div>
				</div>
			))}

			<style jsx>{`
        @keyframes float-up {
          0% {
            bottom: -10%;
            opacity: 0;
          }
          50% {
           	scale: 1;
            opacity: 0.8;
          }
					90%{
						scale: 1;
					}
          100% {
            scale: 0.7;
						bottom: 50%;
            opacity: 0;
          }
        }

        .animate-float-up {
          animation: float-up linear infinite;
        }
      `}</style>
		</div>
	);
};

export default AnimatedIconsBackground;