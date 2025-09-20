

"use client"
import { useEffect } from "react";
import gsap from "gsap";
import sampleIcons from "@/assets/icons/FloatingIcons";

const icons = sampleIcons;

const AnimatedIconsBackground = ({ density = 6 }) => {
	useEffect(() => {
		const particles = document.querySelectorAll(".floating-icon");

		particles.forEach((el) => {
			const size = 20 + Math.random() * 70;
			el.style.fontSize = `${size}px`;

			gsap.fromTo(
				el,
				{
					x: `${Math.random() * 100}vw`,
					bottom: "-10%",
					opacity: 1,
				},
				{
					x: `${Math.random() * 100}vw`,
					bottom: "50%",
					opacity: 0,
					duration: 8 + Math.random() * 8,
					delay: -(Math.random() * 5),
					repeat: -1,
					ease: "linear",
				}
			);
		});
	}, [density]);

	return (
		<div className="absolute inset-0  pointer-events-none">
			{Array.from({ length: density }).map((_, i) => (
				<div
					key={i}
					className="floating-icon text-blue-200 opacity-40"
					style={{
						position: "absolute",
						filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))",
					}}
				>
					{icons[Math.floor(Math.random() * icons.length)]}
				</div>
			))}
		</div>
	);
};

export default AnimatedIconsBackground;


// "use client"
// import { useState, useEffect } from 'react';
// import sampleIcons from '@/assets/icons/FloatingIcons';
// const icons = sampleIcons;
// const AnimatedIconsBackground = ({ density = 10 }) => {
// 	const [particles, setParticles] = useState([]);

// 	const animationDuration = 9000;

// 	useEffect(() => {
// 		if (icons.length === 0) return;

// 		const generateParticles = () => {
// 			const newParticles = [];
// 			for (let i = 0; i < density; i++) {
// 				newParticles.push({
// 					id: i,
// 					icon: icons[Math.floor(Math.random() * icons.length)],
// 					left: Math.random() * 100,
// 					delay: -(Math.random() * animationDuration),
// 					size: 20 + Math.random() * 70,
// 				});
// 			}
// 			setParticles(newParticles);
// 		};

// 		generateParticles();
// 	}, [icons, density, animationDuration]);

// 	return (
// 		<div className="absolute inset-0 overflow-hidden pointer-events-none">
// 			{particles.map((particle) => (
// 				<div
// 					key={particle.id}
// 					className="absolute animate-float-up"
// 					style={{
// 						left: `${particle.left}%`,
// 						animationDelay: `${particle.delay}ms`,
// 						animationDuration: `${animationDuration}ms`,
// 						'--start-size': `${particle.size}px`,
// 						'--end-size': `${particle.size * 0.3}px`,
// 					}}
// 				>
// 					<div
// 						className="text-blue-200 opacity-40"
// 						style={{
// 							fontSize: `${particle.size}px`,
// 							filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
// 						}}
// 					>
// 						{particle.icon}
// 					</div>
// 				</div>
// 			))}

// 			<style jsx>{`
//         @keyframes float-up {
//           0% {
//             bottom: -10%;
//             opacity: 0;
//           }
//           50% {
//            	scale: 1;
//             opacity: 0.8;
//           }
// 					90%{
// 						scale: 1;
// 					}
//           100% {
//             scale: 0.7;
// 						bottom: 50%;
//             opacity: 0;
//           }
//         }

//         .animate-float-up {
//           animation: float-up linear infinite;
//         }
//       `}</style>
// 		</div>
// 	);
// };

// export default AnimatedIconsBackground;