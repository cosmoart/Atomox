import { Shield, Code, Users, AlertTriangle, Star, Zap, FileText, Globe, Accessibility, Smartphone } from 'lucide-react';

export const Atoms = [
	{
		name: 'Buttons',
		description: 'A button is a clickable element that performs an action when clicked.',
		tagsPlaceholder: 'Click me',
		id: 'buttons',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 377' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='200' y='136' width='449' height='105' rx='25' fill='#999999' className='dark:fill-zinc-400' />
			<rect x='262' y='173' width='326' height='32' rx='14' fill='white' />
		</svg>,
		html: `<button class="btn">
	Click me
</button>`,
		htmlTailwind: `<button class="px-10 bg-purple-500 hover:scale-105 active:scale-95 transition-transform text-white font-medium py-3 rounded-lg">
	Click me
</button>`,
		css: `.btn {
	background-color: oklch(62.7% 0.265 303.9);
	color: white;
	font-weight: 600;
	padding: 12px 40px;
	font-size: 16px;
	cursor: pointer;
	border-radius: 7px;
	transition: scale 0.2s ease-in-out;
	border: none;
}

.btn:hover {
	scale: 1.1;
}

.btn:active {
	scale: 0.9;
}`,
	},
	{
		name: 'Inputs',
		description: 'An input field is a form element that allows users to enter data.',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 377' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='157' y='136' width='536' height='105' rx='25' fill='#999999' />
			<rect x='184' y='162' width='408' height='53' rx='14' fill='white' />
			<rect x='617' y='162' width='53' height='53' rx='26.5' fill='white' />
		</svg>
		,
		html: '<input type="text" class="input" placeholder="Type here..." />',
		htmlTailwind: '<input type="text" class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Type here..." />',
		css: `.input {
	padding: 10px 15px;
	border: 2px solid #ccc;
	border-radius: 6px;
	font-size: 16px;
	outline: none;
	transition: border-color 0.3s ease;
}

.input:focus {
	border-color: oklch(62.7% 0.265 303.9);
}`,
		id: 'inputs',
	},
	{
		name: 'Backgrounds',
		description: 'A background is an image or color that appears behind other elements.',
		icon: <svg className='size-full group-hover:scale-105 transition-transform ' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_233_2)' className='*:dark:fill-zinc-400'>
				<rect x='-371.641' y='468.602' width='740.484' height='42.1893' transform='rotate(-45 -371.641 468.602)' fill='#999999' />
				<rect x='-208.325' y='465.602' width='740.484' height='42.1893' transform='rotate(-45 -208.325 465.602)' fill='#999999' />
				<rect x='-45.0089' y='462.602' width='740.484' height='42.1893' transform='rotate(-45 -45.0089 462.602)' fill='#999999' />
				<rect x='118.307' y='459.602' width='740.484' height='42.1893' transform='rotate(-45 118.307 459.602)' fill='#999999' />
				<rect x='281.623' y='456.602' width='740.484' height='42.1893' transform='rotate(-45 281.623 456.602)' fill='#999999' />
				<rect x='444.939' y='453.602' width='740.484' height='42.1893' transform='rotate(-45 444.939 453.602)' fill='#999999' />
				<rect x='608.255' y='450.602' width='740.484' height='42.1893' transform='rotate(-45 608.255 450.602)' fill='#999999' />
			</g>
			<defs>
				<clipPath id='clip0_233_2'>
					<rect width='850' height='425' fill='white' />
				</clipPath>
			</defs>
		</svg>
		,
		html: '<div class="background-grid"></div>',
		htmlTailwind: '<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>',
		css: `.background-grid {
  position: absolute;
  inset: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  background-color: white;
  background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
  background-size: 16px 16px;
}
`,
		id: 'backgrounds',
	},
	{
		name: 'Loaders',
		description: 'A loader is a visual indicator that something is loading or processing.',
		icon: <svg className='size-full group-hover:scale-105 transition-transform *:dark:fill-zinc-400' viewBox='0 0 850 377' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M425 149.5V129.75M452.979 161.021L467.133 146.867M464.5 189H484.25M452.979 216.979L467.133 231.133M425 228.5V248.25M397.021 216.979L382.867 231.133M385.5 189H365.75M397.021 161.021L382.867 146.867' stroke='#999999' stroke-width='14.55' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
		,
		id: 'loaders',
		html: '<div class="loader"></div>',
		htmlTailwind: '<div class="w-6 h-6 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>',
		css: `.loader {
	width: 24px;
	height: 24px;
	border: 4px solid oklch(62.7% 0.265 303.9);
	border-top-color: transparent;
	border-radius: 50%;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}`,
	},
	{
		name: 'Checkboxes',
		description: 'A checkbox is a form element that allows users to select one or more options.',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='234' y='87' width='62' height='62' rx='11' fill='#999999' />
			<rect x='234' y='182' width='62' height='62' rx='11' fill='#999999' />
			<rect x='234' y='277' width='62' height='62' rx='11' fill='#999999' />
			<rect x='317' y='87' width='298' height='31' rx='7' fill='#999999' />
			<rect x='317' y='182' width='298' height='31' rx='7' fill='#999999' />
			<rect x='317' y='277' width='298' height='31' rx='7' fill='#999999' />
			<rect x='317' y='129' width='162' height='20' rx='7' fill='#999999' />
			<rect x='317' y='224' width='162' height='20' rx='7' fill='#999999' />
			<rect x='317' y='319' width='162' height='20' rx='7' fill='#999999' />
			<path d='M285 198L260 227L247 212.5' stroke='white' className='dark:stroke-zinc-800' stroke-width='7' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M284 103L259 132L246 117.5' stroke='white' className='dark:stroke-zinc-800' stroke-width='7' stroke-linecap='round' stroke-linejoin='round' />
			<path d='M285 294L260 323L247 308.5' stroke='white' className='dark:stroke-zinc-800' stroke-width='7' stroke-linecap='round' stroke-linejoin='round' />
		</svg>
		,
		html: '<label><input type="checkbox" class="checkbox" /> Accept terms</label>',
		htmlTailwind: `<label class="inline-flex items-center space-x-2">
	<input type="checkbox" class="w-4 h-4 rounded text-purple-500" />
	<span>Accept terms</span>
</label>`,
		css: `.checkbox {
	width: 16px;
	height: 16px;
	accent-color: oklch(62.7% 0.265 303.9);
}`,
		id: 'checkboxes',
	},
	{
		name: 'Radio buttons',
		description: 'A radio button is a form element that allows users to select one option from a group.',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='241' y='94' width='48' height='48' rx='24' fill='white' stroke='#999999' stroke-width='14' />
			<rect x='241' y='189' width='48' height='48' rx='24' fill='#999999' stroke='#999999' stroke-width='14' />
			<rect x='241' y='284' width='48' height='48' rx='24' fill='#999999' stroke='#999999' stroke-width='14' />
			<rect x='317' y='189' width='298' height='24' rx='7' fill='#999999' />
			<rect x='317' y='284' width='298' height='24' rx='7' fill='#999999' />
			<rect x='317' y='94' width='298' height='24' rx='7' fill='#999999' />
			<rect x='317' y='224' width='162' height='13' rx='6.5' fill='#999999' />
			<rect x='317' y='319' width='162' height='13' rx='6.5' fill='#999999' />
			<rect x='317' y='129' width='162' height='13' rx='6.5' fill='#999999' />
		</svg>
		,
		html: '<label><input type="radio" name="option" class="radio" /> Option 1</label>',
		htmlTailwind: `<label class="inline-flex items-center space-x-2">
	<input type="radio" name="option" class="w-4 h-4 text-purple-500" />
	<span>Option 1</span>
</label>`,
		css: `.radio {
	width: 16px;
	height: 16px;
	accent-color: oklch(62.7% 0.265 303.9);
}`,
		id: 'radio-buttons',
	},
	{
		name: 'Switches',
		description: 'A switch is a toggle button that allows users to turn something on or off.',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='347' y='179' width='156' height='67' rx='33.5' fill='#999999' />
			<rect x='439' y='187' width='51' height='51' rx='25.5' fill='white' />
		</svg>
		,
		html: `<label class="switch">
	<input type="checkbox" />
	<span class="slider"></span>
</label>`,
		htmlTailwind: `<label class="relative inline-block w-12 h-6">
	<input type="checkbox" class="opacity-0 w-0 h-0 peer" />
	<span class="absolute inset-0 bg-gray-300 rounded-full transition peer-checked:bg-purple-500"></span>
	<span class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></span>
</label>`,
		css: `.switch {
	position: relative;
	display: inline-block;
	width: 40px;
	height: 20px;
}

.switch input {
	opacity: 0;
	width: 0;
	height: 0;
}

.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	border-radius: 20px;
	transition: 0.4s;
}

.slider:before {
	position: absolute;
	content: "";
	height: 16px;
	width: 16px;
	left: 2px;
	bottom: 2px;
	background-color: white;
	border-radius: 50%;
	transition: 0.4s;
}

input:checked + .slider {
	background-color: oklch(62.7% 0.265 303.9);
}

input:checked + .slider:before {
	transform: translateX(20px);
}`,
		id: 'switches',
	},
	{
		name: 'Tooltips',
		description: 'A tooltip is a small popup that provides additional information about an element.',
		html: `<div class="tooltip">Hover me
	<span class="tooltiptext">Tooltip text</span>
</div>`,
		htmlTailwind: `<div class="relative group">
	<span class="underline cursor-help">Hover me</span>
	<span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">Tooltip text</span>
</div>`,
		css: `.tooltip {
	position: relative;
	display: inline-block;
	cursor: pointer;
}

.tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px;
	position: absolute;
	z-index: 1;
	bottom: 125%;
	left: 50%;
	margin-left: -60px;
	opacity: 0;
	transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
	visibility: visible;
	opacity: 1;
}`,
		id: 'tooltips',
	},
	{
		name: 'Progress bars',
		description: 'A progress bar is a visual indicator that shows the progress of a task.',
		html: `<div class="progress-container">
	<div class="progress-bar" style="width: 70%;"></div>
</div>`,
		htmlTailwind: `<div class="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
	<div class="bg-purple-500 h-full" style="width: 70%;"></div>
</div>`,
		css: `.progress-container {
	width: 100%;
	background-color: #eee;
	border-radius: 10px;
	overflow: hidden;
	height: 16px;
}

.progress-bar {
	height: 100%;
	background-color: oklch(62.7% 0.265 303.9);
	width: 0;
	transition: width 0.5s ease;
}`,
		id: 'progress-bars',
	},
	{
		name: 'Selects',
		description: 'A select is a form element that allows users to select an option from a list.',
		html: `<select class="select">
	<option>Select option</option>
	<option>Option 1</option>
	<option>Option 2</option>
</select>`,
		htmlTailwind: `<select class="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
	<option>Select option</option>
	<option>Option 1</option>
	<option>Option 2</option>
</select>`,
		css: `.select {
	padding: 10px 15px;
	border: 2px solid #ccc;
	border-radius: 6px;
	font-size: 16px;
	background-color: white;
	transition: border-color 0.3s ease;
}

.select:focus {
	border-color: oklch(62.7% 0.265 303.9);
}`,
		id: 'selects',
	}
];

export const Molecules = [
	{
		name: 'Headers',
		description: 'A header is a section that appears at the top of a page.',
		id: 'headers',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect width='850' height='90' fill='#999999' />
			<rect x='28' y='19' width='51' height='51' rx='25.5' fill='white' />
			<rect x='106' y='31' width='123' height='28' rx='14' fill='white' />
			<rect x='256' y='31' width='96' height='28' rx='14' fill='white' />
			<rect x='370' y='31' width='138' height='28' rx='14' fill='white' />
		</svg>

	},
	{
		name: 'Hero sections',
		description: 'A hero section is a large banner that appears at the top of a page.',
		id: 'hero-sections',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g clip-path='url(#clip0_242_39)'>
				<rect x='481' width='441' height='425' rx='29' fill='#999999' />
				<rect x='69' y='135' width='286' height='54' rx='23' fill='#999999' />
				<rect x='69' y='281' width='106' height='22' rx='4' fill='#999999' />
				<rect x='186' y='281' width='102' height='22' rx='4' fill='#999999' />
				<rect x='69' y='209' width='263' height='14' rx='7' fill='#999999' />
				<rect x='69' y='233' width='219' height='14' rx='7' fill='#999999' />
				<path d='M712.375 244.292V180.708C712.375 175.712 708.287 171.625 703.292 171.625H639.708C634.712 171.625 630.625 175.712 630.625 180.708V244.292C630.625 249.287 634.712 253.375 639.708 253.375H703.292C708.287 253.375 712.375 249.287 712.375 244.292ZM657.421 221.492L666.958 232.983L681.037 214.862C681.946 213.681 683.762 213.681 684.671 214.907L700.612 236.162C700.865 236.499 701.019 236.901 701.057 237.321C701.095 237.741 701.015 238.163 700.827 238.54C700.638 238.917 700.348 239.235 699.989 239.456C699.631 239.678 699.217 239.795 698.795 239.795H644.341C642.433 239.795 641.389 237.615 642.57 236.117L653.878 221.583C654.741 220.402 656.467 220.357 657.421 221.492Z' fill='white' />
			</g>
			<defs>
				<clipPath id='clip0_242_39'>
					<rect width='850' height='425' fill='white' />
				</clipPath>
			</defs>
		</svg>

	},
	{
		name: 'Footers',
		description: 'A footer is a section that appears at the bottom of a page.',
		id: 'footers',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect y='248' width='850' height='177' fill='#999999' />
			<rect x='25' y='275' width='51' height='51' rx='25.5' fill='white' />
			<rect x='92' y='278' width='123' height='23' rx='11.5' fill='white' />
			<rect x='499' y='273' width='144' height='23' rx='11.5' fill='white' />
			<rect x='499' y='312' width='122' height='12' rx='6' fill='white' />
			<rect x='669' y='312' width='131' height='12' rx='6' fill='white' />
			<rect x='499' y='331' width='98' height='12' rx='6' fill='white' />
			<rect x='669' y='331' width='106' height='12' rx='6' fill='white' />
			<rect x='499' y='350' width='131' height='12' rx='6' fill='white' />
			<rect x='669' y='350' width='119' height='12' rx='6' fill='white' />
			<rect x='669' y='369' width='82' height='12' rx='6' fill='white' />
			<rect x='92' y='310' width='96' height='10' rx='5' fill='white' />
			<rect x='669' y='273' width='144' height='23' rx='11.5' fill='white' />
		</svg>

	},
	{
		name: 'Cards',
		description: 'A card is a container that displays content in a visually appealing way.',
		id: 'cards',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='274' y='40' width='301' height='346' rx='28' fill='#999999' />
			<rect x='293' y='276' width='126' height='26' rx='13' fill='white' />
			<rect x='293' y='330' width='206' height='14' rx='7' fill='white' />
			<rect x='293' y='310' width='180' height='14' rx='7' fill='white' />
			<rect x='293' y='350' width='158' height='14' rx='7' fill='white' />
			<path d='M457.125 168.875V118.125C457.125 114.137 453.862 110.875 449.875 110.875H399.125C395.137 110.875 391.875 114.137 391.875 118.125V168.875C391.875 172.862 395.137 176.125 399.125 176.125H449.875C453.862 176.125 457.125 172.862 457.125 168.875ZM413.262 150.677L420.875 159.849L432.112 145.385C432.837 144.443 434.287 144.442 435.012 145.421L447.736 162.386C447.938 162.656 448.061 162.976 448.091 163.311C448.122 163.646 448.058 163.983 447.907 164.284C447.757 164.585 447.525 164.839 447.239 165.016C446.953 165.193 446.623 165.286 446.286 165.286H402.822C401.3 165.286 400.466 163.546 401.409 162.35L410.435 150.75C411.124 149.807 412.501 149.771 413.262 150.677Z' fill='white' />
		</svg>

	},
	{
		name: 'Modals',
		description: 'A modal is a dialog box that appears on top of the current page.',
		id: 'modals',
	},
	{
		name: 'Forms',
		description: 'A form is a collection of input fields and buttons that allows users to submit data.',
		id: 'forms',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='245' y='85' width='312' height='7' rx='3.5' fill='#999999' />
			<rect x='238' y='73' width='31' height='31' rx='15.5' fill='#999999' />
			<rect x='400.75' y='80.75' width='15.5' height='15.5' rx='7.75' fill='white' stroke='#999999' stroke-width='15.5' />
			<rect x='548' y='73' width='31' height='31' rx='15.5' fill='#999999' />
			<rect x='565' y='327' width='102' height='25' rx='4' fill='#999999' />
			<rect x='183' y='170' width='212' height='25' rx='5' fill='#999999' />
			<rect x='455' y='170' width='212' height='25' rx='5' fill='#999999' />
			<rect x='183' y='261' width='212' height='25' rx='5' fill='#999999' />
			<rect x='455' y='261' width='212' height='25' rx='5' fill='#999999' />
			<rect x='183' y='145' width='106' height='14' rx='7' fill='#999999' />
			<rect x='455' y='145' width='116' height='14' rx='7' fill='#999999' />
			<rect x='183' y='236' width='138' height='14' rx='7' fill='#999999' />
			<rect x='455' y='236' width='72' height='14' rx='7' fill='#999999' />
		</svg>

	},
	{
		name: 'Error pages',
		description: 'An error page appears when something goes wrong.',
		id: 'error-pages',
		icon: <svg className='size-full group-hover:scale-105 transition-transform' viewBox='0 0 850 425' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<rect x='263' y='175' width='324' height='43' rx='21.5' fill='#999999' />
			<rect x='315' y='306' width='106' height='22' rx='4' fill='#999999' />
			<rect x='432' y='306' width='102' height='22' rx='4' fill='#999999' />
			<rect x='293' y='237' width='263' height='14' rx='7' fill='#999999' />
			<rect x='315' y='261' width='219' height='14' rx='7' fill='#999999' />
			<path d='M358.636 152.727V142.909L377.364 113.455H386.273V126.545H381.182L371.091 142.545V142.909H398.727V152.727H358.636ZM381.273 160V149.727L381.545 145.455V113.455H393.364V160H381.273ZM424.301 161.273C420.074 161.258 416.422 160.28 413.347 158.341C410.271 156.402 407.9 153.606 406.233 149.955C404.566 146.303 403.741 141.924 403.756 136.818C403.771 131.697 404.604 127.348 406.256 123.773C407.922 120.197 410.286 117.477 413.347 115.614C416.422 113.75 420.074 112.818 424.301 112.818C428.528 112.818 432.18 113.758 435.256 115.636C438.331 117.5 440.703 120.22 442.369 123.795C444.036 127.371 444.862 131.712 444.847 136.818C444.847 141.955 444.013 146.348 442.347 150C440.68 153.652 438.309 156.447 435.233 158.386C432.172 160.311 428.528 161.273 424.301 161.273ZM424.301 151C426.483 151 428.271 149.864 429.665 147.591C431.074 145.303 431.771 141.712 431.756 136.818C431.756 133.621 431.438 131.008 430.801 128.977C430.165 126.947 429.286 125.447 428.165 124.477C427.044 123.492 425.756 123 424.301 123C422.119 123 420.339 124.106 418.96 126.318C417.581 128.53 416.877 132.03 416.847 136.818C416.831 140.076 417.142 142.758 417.778 144.864C418.415 146.955 419.294 148.5 420.415 149.5C421.551 150.5 422.847 151 424.301 151ZM450.324 152.727V142.909L469.051 113.455H477.96V126.545H472.869L462.778 142.545V142.909H490.415V152.727H450.324ZM472.96 160V149.727L473.233 145.455V113.455H485.051V160H472.96Z' fill='#999999' />
		</svg>
		,
	},
	{
		name: 'Sidebars',
		description: 'A sidebar is a vertical menu that appears on the side of a page.',
		id: 'sidebars',
	},
	{
		name: 'Pricing tables',
		description: 'A pricing table is a table that displays different pricing options.',
		id: 'pricing',
	},
	{
		name: 'Features section',
		description: 'A feature section is a section that displays a list of features.',
		id: 'feature-sections',
	},
	{
		name: 'Testimonials',
		description: 'A testimonial is a quote from a customer that showcases their experience.',
		id: 'testimonials',
	},
	{
		name: 'FAQs',
		description: 'A FAQ (Frequently Asked Questions) is a list of questions and answers.',
		id: 'faqs',
	},
	{
		name: 'Authentication',
		description: 'Authentication is the process of verifying the identity of a user.',
		id: 'authentication',
	},
	{
		name: 'CTA',
		description: 'A CTA (Call to Action) is a button or link that encourages users to take a specific action.',
		id: 'cta',
	},
	{
		name: 'Dashboard',
		description: 'A dashboard is a page that displays a summary of the user\'s activity.',
		id: 'dashboard',
	},
	{
		name: 'Cookies',
		description: 'A cookie is a small piece of data that is stored on a user\'s computer.',
		id: 'cookies',
	}
]

export const PagesTypes = {
	'Atoms': {
		title: 'Atoms',
		id: 'atoms',
		gridSize: 'repeat(auto-fill,minmax(300px,1fr))',
		description: 'Atoms are the smallest components that can be used to create more complex components.',
		pageSize: 28
	},
	'Molecules': {
		title: 'Molecules',
		id: 'molecules',
		gridSize: 'repeat(auto-fill,minmax(380px,1fr))',
		description: 'Molecules are the smallest components that can be used to create more complex components.',
		pageSize: 27
	},
}

export const verifiedUsers = ['midudev', 'cosmoart']

export const rules = [
	{
		icon: <Shield className='w-6 h-6 text-red-500' />,
		title: 'No Inappropriate Content',
		description: 'Absolutely no sexual, erotic, violent, or illegal content. Components should be suitable for all audiences.'
	},
	{
		icon: <Users className='w-6 h-6 text-blue-500' />,
		title: 'Proper Attribution Required',
		description: 'Always credit the original author when submitting modified or inspired components. Plagiarism will result in immediate removal.'
	},
	{
		icon: <Globe className='w-6 h-6 text-green-500' />,
		title: 'No External Malicious Links',
		description: 'Don\'t include links to suspicious websites, spam, or unrelated external resources. Keep links relevant and safe.'
	},
	{
		icon: <Code className='w-6 h-6 text-purple-500' />,
		title: 'Original Work Only',
		description: 'Submit only components you\'ve created or have explicit permission to share. Respect intellectual property rights.'
	},
	{
		icon: <AlertTriangle className='w-6 h-6 text-orange-500' />,
		title: 'No Malicious Code',
		description: 'Components must not contain malware, tracking scripts, or any code that could harm users or their systems.'
	},
	{
		icon: <FileText className='w-6 h-6 text-indigo-500' />,
		title: 'Complete Components Only',
		description: 'Submit functional, complete components. Broken, incomplete, or placeholder components will be rejected.'
	}
];

export const recommendations = [
	{
		icon: <Code className='w-6 h-6 text-blue-500' />,
		title: 'Use Semantic HTML',
		description: 'Avoid unnecessary divs. Use proper HTML5 elements like <header>, <nav>, <main>, <section>, <article>, and <footer> for better structure and SEO.'
	},
	{
		icon: <Smartphone className='w-6 h-6 text-green-500' />,
		title: 'Make It Responsive',
		description: 'Ensure your component works on all screen sizes. Use flexible layouts, media queries, and relative units for optimal user experience.'
	},
	{
		icon: <Accessibility className='w-6 h-6 text-purple-500' />,
		title: 'Prioritize Accessibility',
		description: 'Include ARIA labels, proper contrast ratios, keyboard navigation support, and screen reader compatibility.'
	},
	{
		icon: <FileText className='w-6 h-6 text-orange-500' />,
		title: 'Clean & Documented Code',
		description: 'Format your code properly, use meaningful variable names, and add comments explaining complex logic or functionality.'
	},
	{
		icon: <Zap className='w-6 h-6 text-yellow-500' />,
		title: 'Optimize Performance',
		description: 'Minimize CSS and JavaScript, optimize images, avoid unnecessary animations, and consider loading performance.'
	},
	{
		icon: <Star className='w-6 h-6 text-pink-500' />,
		title: 'Follow Best Practices',
		description: 'Use CSS custom properties for theming, avoid inline styles, implement proper error handling, and follow modern web standards.'
	}
];

export const faqs = [
	{
		question: 'What happens if my component violates the guidelines?',
		answer: 'Components that violate our rules will be removed immediately. Repeated violations may result in account suspension. We\'ll notify you via email with specific reasons for removal.'
	},
	{
		question: 'Can I update my component after submission?',
		answer: 'No, components are reviewed by our moderation team before they are published. Updates go through the same review process to ensure they still meet our guidelines.'
	},
	{
		question: 'How long does the review process take?',
		answer: 'Most components are reviewed within 24-48 hours. Complex components or those requiring additional verification may take up to 5 business days.'
	},
	{
		question: 'Can I use third-party libraries in my components?',
		answer: 'Yes, but include clear documentation about dependencies. Ensure all libraries are properly licensed and safe to use. Avoid heavy dependencies when possible.'
	},
	{
		question: 'How do I report a component that violates guidelines?',
		answer: 'Use the \'Report\' button on any component page. Provide specific details about the violation. All reports are reviewed by our moderation team.'
	},
	{
		question: 'What makes a component likely to be featured?',
		answer: 'Featured components are innovative, well-documented, accessible, responsive, and demonstrate exceptional code quality. They solve real problems and inspire other developers.'
	}
];