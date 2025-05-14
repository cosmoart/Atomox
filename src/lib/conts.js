export const Atoms = [
	{
		name: 'Buttons',
		description: 'A button is a clickable element that performs an action when clicked.',
		html: '<button class="btn">Click me</button>',
		css: `.btn {
	background-color: blue;
	color: white;
	padding: 10px 20px;
	border-radius: 5px;
	transition: scale 0.2s ease-in-out;
	border: none;
}

.btn:hover {
	scale: 1.1;
}

.btn:active{
	scale: 0.9;
}`,
		id: 'buttons',
	},
	{
		name: 'Inputs',
		description: 'An input field is a form element that allows users to enter data.',
		html: '<input type="text" className="input" />',
		id: 'inputs',
	},
	{
		name: 'Backgrounds',
		description: 'A background is an image or color that appears behind other elements.',
		id: 'backgrounds',
	},
	{
		name: 'Loaders',
		description: 'A loader is a visual indicator that something is loading or processing.',
		html: '<div className="loader"></div>',
		id: 'loaders',
	},
	{
		name: 'Checkboxes',
		description: 'A checkbox is a form element that allows users to select one or more options.',
		id: 'checkboxes',
	},
	{
		name: 'Radio buttons',
		description: 'A radio button is a form element that allows users to select one option from a group.',
		id: 'radio-buttons',
	},
	{
		name: 'Switches',
		description: 'A switch is a toggle button that allows users to turn something on or off.',
		id: 'switches',
	},
	{
		name: 'Tooltips',
		description: 'A tooltip is a small popup that provides additional information about an element.',
		id: 'tooltips',
	},
	{
		name: 'Progress bars',
		description: 'A progress bar is a visual indicator that shows the progress of a task.',
		id: 'progress-bars',
	},
	{
		name: 'Selects',
		description: 'A select is a form element that allows users to select an option from a list.',
		id: 'selects',
	}
]

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
		pageSize: 32
	},
	'Molecules': {
		title: 'Molecules',
		id: 'molecules',
		gridSize: 'repeat(auto-fill,minmax(380px,1fr))',
		description: 'Molecules are the smallest components that can be used to create more complex components.',
		pageSize: 30
	},
}