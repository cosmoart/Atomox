import { Shield, Code, Users, AlertTriangle, Star, Zap, FileText, Globe, Accessibility, Smartphone } from 'lucide-react';
import { atomsIcons, moleculesIcons } from './icons'
import { atomsCode, moleculesCode } from './exampleCode'

export const verifiedUsers = ['midudev', 'cosmoart']

export const PagesTypes = {
	'Atoms': {
		title: 'Atoms',
		id: 'atoms',
		gridSize: 'repeat(auto-fill,minmax(300px,1fr))',
		description: 'Atoms are the smallest components that can be used to create more complex components.',
		pageSize: 27
	},
	'Molecules': {
		title: 'Molecules',
		id: 'molecules',
		gridSize: 'repeat(auto-fill,minmax(380px,1fr))',
		description: 'Molecules are the smallest components that can be used to create more complex components.',
		pageSize: 26
	},
}

export const Atoms = [
	{
		name: 'Buttons',
		id: 'buttons',
		description: 'A button is a clickable element that performs an action when clicked.',
		tagsPlaceholder: 'Click me',
		icon: atomsIcons.buttons,
		html: atomsCode.buttons.html,
		htmlTailwind: atomsCode.buttons.htmlTailwind,
		css: atomsCode.buttons.css,
		js: atomsCode.buttons.js,
	},
	{
		name: 'Inputs',
		id: 'inputs',
		description: 'An input field is a form element that allows users to enter data.',
		icon: atomsIcons.inputs,
		html: atomsCode.inputs.html,
		htmlTailwind: atomsCode.inputs.htmlTailwind,
		css: atomsCode.inputs.css,
		js: atomsCode.inputs.js,
	},
	{
		name: 'Backgrounds',
		id: 'backgrounds',
		description: 'A background is an image or color that appears behind other elements.',
		icon: atomsIcons.backgrounds,
		html: atomsCode.backgrounds.html,
		htmlTailwind: atomsCode.backgrounds.htmlTailwind,
		css: atomsCode.backgrounds.css,
		js: atomsCode.backgrounds.js,
	},
	{
		name: 'Loaders',
		id: 'loaders',
		description: 'A loader is a visual indicator that something is loading or processing.',
		icon: atomsIcons.loaders,
		html: atomsCode.loaders.html,
		htmlTailwind: atomsCode.loaders.htmlTailwind,
		css: atomsCode.loaders.css,
		js: atomsCode.loaders.js,
	},
	{
		name: 'Checkboxes',
		id: 'checkboxes',
		description: 'A checkbox is a form element that allows users to select one or more options.',
		icon: atomsIcons.checkboxes,
		html: atomsCode.checkboxes.html,
		htmlTailwind: atomsCode.checkboxes.htmlTailwind,
		css: atomsCode.checkboxes.css,
		js: atomsCode.checkboxes.js,
	},
	{
		name: 'Radio buttons',
		id: 'radio-buttons',
		description: 'A radio button is a form element that allows users to select one option from a group.',
		icon: atomsIcons.radioButtons,
		html: atomsCode.radioButtons.html,
		htmlTailwind: atomsCode.radioButtons.htmlTailwind,
		css: atomsCode.radioButtons.css,
		js: atomsCode.radioButtons.js,
	},
	{
		name: 'Selects',
		id: 'selects',
		description: 'A select is a form element that allows users to select an option from a list.',
		icon: atomsIcons.selects,
		html: atomsCode.selects.html,
		htmlTailwind: atomsCode.selects.htmlTailwind,
		css: atomsCode.selects.css,
		js: atomsCode.selects.js,
	},
	{
		name: 'Switches',
		id: 'switches',
		description: 'A switch is a toggle button that allows users to turn something on or off.',
		icon: atomsIcons.switches,
		html: atomsCode.switches.html,
		htmlTailwind: atomsCode.switches.htmlTailwind,
		css: atomsCode.switches.css,
		js: atomsCode.switches.js,
	},
	{
		name: 'Tooltips',
		id: 'tooltips',
		description: 'A tooltip is a small popup that provides additional information about an element.',
		icon: atomsIcons.tooltips,
		html: atomsCode.tooltips.html,
		htmlTailwind: atomsCode.tooltips.htmlTailwind,
		css: atomsCode.tooltips.css,
		js: atomsCode.tooltips.js,
	},
	{
		name: 'Progress bars',
		id: 'progress-bars',
		description: 'A progress bar is a visual indicator that shows the progress of a task.',
		icon: atomsIcons.progressBars,
		html: atomsCode.progressBars.html,
		htmlTailwind: atomsCode.progressBars.htmlTailwind,
		css: atomsCode.progressBars.css,
		js: atomsCode.progressBars.js,
	},

];

export const Molecules = [
	{
		name: 'Headers',
		id: 'headers',
		description: 'A header is a section that appears at the top of a page.',
		tagsPlaceholder: 'Tables,',
		icon: moleculesIcons.headers,
		html: moleculesCode.headers.html,
		htmlTailwind: moleculesCode.headers.htmlTailwind,
		css: moleculesCode.headers.css,
		js: moleculesCode.headers.js,
	},
	{
		name: 'Hero sections',
		id: 'hero-sections',
		description: 'A hero section is a large banner that appears at the top of a page.',
		tagsPlaceholder: 'Store, E-commerce, ',
		icon: moleculesIcons.heroSections,
		html: moleculesCode.heroSections.html,
		htmlTailwind: moleculesCode.heroSections.htmlTailwind,
		css: moleculesCode.heroSections.css,
		js: moleculesCode.heroSections.js,
	},
	{
		name: 'Footers',
		id: 'footers',
		description: 'A footer is a section that appears at the bottom of a page.',
		icon: moleculesIcons.footers,
		html: moleculesCode.footers.html,
		htmlTailwind: moleculesCode.footers.htmlTailwind,
		css: moleculesCode.footers.css,
		js: moleculesCode.footers.js,
	},
	{
		name: 'Content sections',
		id: 'content-sections',
		description: 'Content sections are used to organize and structure the content of a page.',
		tagsPlaceholder: 'About, Features, Testimonials, FAQs, Stats, CTAs, E-commerce, Cookies',
		icon: moleculesIcons.contentSections,
		html: moleculesCode.contentSections.html,
		htmlTailwind: moleculesCode.contentSections.htmlTailwind,
		css: moleculesCode.contentSections.css,
		js: moleculesCode.contentSections.js,
	},
	{
		name: 'Features section',
		id: 'feature-sections',
		description: 'A feature section is a section that displays a list of features.',
		tagsPlaceholder: 'Steps, grid,',
		icon: moleculesIcons.featureSections,
		html: moleculesCode.featureSections.html,
		htmlTailwind: moleculesCode.featureSections.htmlTailwind,
		css: moleculesCode.featureSections.css,
		js: moleculesCode.featureSections.js,
	},
	{
		name: 'Forms',
		id: 'forms',
		description: 'A form is a collection of input fields and buttons that allows users to submit data.',
		tagsPlaceholder: 'Auth, Contact us, Search, Filters...',
		icon: moleculesIcons.forms,
		html: moleculesCode.forms.html,
		htmlTailwind: moleculesCode.forms.htmlTailwind,
		css: moleculesCode.forms.css,
		js: moleculesCode.forms.js,
	},
	{
		name: 'E-commerce',
		id: 'e-commerce',
		description: 'An e-commerce is a website that sells products or services online.',
		tagsPlaceholder: 'Product cards, reviews, cart, checkout...',
		icon: moleculesIcons.eCommerce,
		html: moleculesCode.eCommerce.html,
		htmlTailwind: moleculesCode.eCommerce.htmlTailwind,
		css: moleculesCode.eCommerce.css,
		js: moleculesCode.eCommerce.js,
	},
	{
		name: 'Error pages',
		id: 'error-pages',
		description: 'An error page appears when something goes wrong.',
		icon: moleculesIcons.errorPages,
		html: moleculesCode.errorPages.html,
		htmlTailwind: moleculesCode.errorPages.htmlTailwind,
		css: moleculesCode.errorPages.css,
		js: moleculesCode.errorPages.js,
	},
	{
		name: 'Cards',
		id: 'cards',
		description: 'A card is a container that displays content in a visually appealing way.',
		icon: moleculesIcons.cards,
		html: moleculesCode.cards.html,
		htmlTailwind: moleculesCode.cards.htmlTailwind,
		css: moleculesCode.cards.css,
		js: moleculesCode.cards.js,
	},
	{
		name: 'CTAs',
		id: 'ctas',
		description: 'A CTA (Call to Action) is a button or link that encourages users to take a specific action.',
		tagsPlaceholder: 'Download, Register, Subscribe, Buy... ',
		icon: moleculesIcons.ctas,
		html: moleculesCode.ctas.html,
		htmlTailwind: moleculesCode.ctas.htmlTailwind,
		css: moleculesCode.ctas.css,
		js: moleculesCode.ctas.js,
	},
	{
		name: 'Pricing tables',
		id: 'pricing-tables',
		description: 'A pricing table is a table that displays different pricing options.',
		tagsPlaceholder: 'Subscription, ',
		icon: moleculesIcons.pricingTables,
		html: moleculesCode.pricingTables.html,
		htmlTailwind: moleculesCode.pricingTables.htmlTailwind,
		css: moleculesCode.pricingTables.css,
		js: moleculesCode.pricingTables.js,
	},
	{
		name: 'Modals',
		id: 'modals',
		description: 'A modal is a dialog box that appears on top of the current page.',
		tagsPlaceholder: 'Create, Alert, Delete, Error, Popup, Success... ',
		icon: moleculesIcons.modals,
		html: moleculesCode.modals.html,
		htmlTailwind: moleculesCode.modals.htmlTailwind,
		css: moleculesCode.modals.css,
		js: moleculesCode.modals.js,
	},
	{
		name: 'Testimonials',
		id: 'testimonials',
		description: 'A testimonial is a quote from a customer that showcases their experience.',
		icon: moleculesIcons.testimonials,
		html: moleculesCode.testimonials.html,
		htmlTailwind: moleculesCode.testimonials.htmlTailwind,
		css: moleculesCode.testimonials.css,
		js: moleculesCode.testimonials.js,
	},
	{
		name: 'FAQs',
		id: 'faqs',
		description: 'A FAQ (Frequently Asked Questions) is a list of questions and answers.',
		icon: moleculesIcons.faqs,
		html: moleculesCode.faqs.html,
		htmlTailwind: moleculesCode.faqs.htmlTailwind,
		css: moleculesCode.faqs.css,
		js: moleculesCode.faqs.js,
	},

	{
		name: 'Stats',
		id: 'stats',
		description: 'Stats are used to display numerical data.',
		icon: moleculesIcons.stats,
		html: moleculesCode.stats.html,
		htmlTailwind: moleculesCode.stats.htmlTailwind,
		css: moleculesCode.stats.css,
		js: moleculesCode.stats.js,
	},
	{
		name: 'Banners',
		id: 'banners',
		description: 'A cookie is a small piece of data that is stored on a user\'s computer.',
		icon: moleculesIcons.banners,
		html: moleculesCode.banners.html,
		htmlTailwind: moleculesCode.banners.htmlTailwind,
		css: moleculesCode.banners.css,
		js: moleculesCode.banners.js,
	}
]

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