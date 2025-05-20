export const Atoms = [
	{
		name: 'Buttons',
		description: 'A button is a clickable element that performs an action when clicked.',
		tagsPlaceholder: 'Click me',
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
		id: 'buttons',
	},
	{
		name: 'Inputs',
		description: 'An input field is a form element that allows users to enter data.',
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
		html: `<div class="background">
	Content here
</div>`,
		htmlTailwind: `<div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
	Content here
</div>`,
		css: `.background {
	background: linear-gradient(90deg, oklch(62.7% 0.265 303.9), oklch(70% 0.3 30));
	color: white;
	padding: 24px;
	border-radius: 10px;
}`,
		id: 'backgrounds',
	},
	{
		name: 'Loaders',
		description: 'A loader is a visual indicator that something is loading or processing.',
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
		id: 'loaders',
	},
	{
		name: 'Checkboxes',
		description: 'A checkbox is a form element that allows users to select one or more options.',
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
		name: 'Forms',
		description: 'A form is a collection of input fields and buttons that allows users to submit data.',
		id: 'forms',
	},
	{
		name: 'Headers',
		description: 'A header is a section that appears at the top of a page.',
		id: 'headers',
	},
	{
		name: 'Footers',
		description: 'A footer is a section that appears at the bottom of a page.',
		id: 'footers',
	},
	{
		name: 'Cards',
		description: 'A card is a container that displays content in a visually appealing way.',
		id: 'cards',
	},
	{
		name: 'Modals',
		description: 'A modal is a dialog box that appears on top of the current page.',
		id: 'modals',
	},
	{
		name: 'Hero sections',
		description: 'A hero section is a large banner that appears at the top of a page.',
		id: 'hero-sections',
	},
	{
		name: 'Error pages',
		description: 'An error page is a page that appears when something goes wrong.',
		id: 'error-pages',
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