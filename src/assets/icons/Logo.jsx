export default function Logo ({ width = 30, height = 30 }) {
	return (
		<svg
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			viewBox='0 0 100 100'
			width={width}
			height={height}
			className="stroke-current stroke-[9.778] rounded group w-fit"
		>
			<g
				clipPath="url(#a)"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="
			[&>path:nth-of-type(2)]:transition-transform
			[&>path:nth-of-type(2)]:origin-center
			[&>path:nth-of-type(3)]:transition-transform
			[&>path:nth-of-type(3)]:origin-center

			group-hover:[&>path:nth-of-type(2)]:rotate-180
			group-hover:[&>path:nth-of-type(3)]:rotate-180
		"
			>
				<path d="M45.111 50a4.889 4.889 0 1 0 9.778 0 4.889 4.889 0 0 0-9.778 0Z" />
				<path d="M74.073 45.756a24.444 24.444 0 1 0-19.83 28.317" />
				<path d="M6 50A44 44 0 1 0 50 6" />
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h100v100H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}
