import {
	Shield,
	Code,
	Eye,
	Users,
	CheckCircle,
	AlertTriangle,
	HelpCircle,
	ChevronDown,
	Star,
	Zap,
	FileText,
	Globe,
	Accessibility,
	Smartphone
} from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export default function ComponentGuidelines () {

	const rules = [
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

	const recommendations = [
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

	const faqs = [
		{
			question: 'What happens if my component violates the guidelines?',
			answer: 'Components that violate our rules will be removed immediately. Repeated violations may result in account suspension. We\'ll notify you via email with specific reasons for removal.'
		},
		{
			question: 'Can I update my component after submission?',
			answer: 'Yes! You can update your components at any time. Updates go through the same review process to ensure they still meet our guidelines.'
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
			question: 'What file formats are accepted?',
			answer: 'We accept HTML, CSS, JavaScript, and popular framework files (React, Vue, Angular). Include a README file with installation and usage instructions.'
		},
		{
			question: 'How do I report a component that violates guidelines?',
			answer: 'Use the \'Report\' button on any component page. Provide specific details about the violation. All reports are reviewed by our moderation team.'
		},
		{
			question: 'Can I monetize my components?',
			answer: 'Components shared on our platform are free for the community. If you want to monetize, consider creating premium versions on your own platform and linking appropriately.'
		},
		{
			question: 'What makes a component likely to be featured?',
			answer: 'Featured components are innovative, well-documented, accessible, responsive, and demonstrate exceptional code quality. They solve real problems and inspire other developers.'
		}
	];

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-zinc-900'>
			{/* Header */}
			<div className='bg-white dark:bg-zinc-900 shadow-sm border-b dark:border-zinc-800'>
				<div className='max-w-4xl mx-auto px-4 py-8'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
							Component Submission Guidelines
						</h1>
						<p className='text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto'>
							Help us maintain a high-quality, safe, and inspiring community by following these guidelines when sharing your components.
						</p>
					</div>
				</div>
			</div>

			<div className='max-w-4xl mx-auto px-4 py-12 space-y-16'>
				{/* Rules Section */}
				<section>
					<div className='text-center mb-12'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4'>
							<Shield className='w-8 h-8 text-red-600 dark:text-red-400' />
						</div>
						<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Community Rules</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-300'>
							These rules are mandatory and violations will result in content removal or account suspension.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-6'>
						{rules.map((rule, index) => (
							<div key={index} className='bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-700 hover:shadow-md transition-shadow'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0'>
										{rule.icon}
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
											{rule.title}
										</h3>
										<p className='text-gray-600 dark:text-zinc-300'>
											{rule.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Recommendations Section */}
				<section>
					<div className='text-center mb-12'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4'>
							<CheckCircle className='w-8 h-8 text-blue-600 dark:text-blue-400' />
						</div>
						<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Quality Recommendations</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-300'>
							Follow these best practices to create outstanding components that the community will love.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-6'>
						{recommendations.map((rec, index) => (
							<div key={index} className='bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-zinc-700 hover:shadow-md transition-shadow'>
								<div className='flex items-start space-x-4'>
									<div className='flex-shrink-0'>
										{rec.icon}
									</div>
									<div>
										<h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
											{rec.title}
										</h3>
										<p className='text-gray-600 dark:text-zinc-300'>
											{rec.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* FAQ Section */}
				<section>
					<div className='text-center mb-12'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full mb-4'>
							<HelpCircle className='w-8 h-8 text-green-600 dark:text-green-400' />
						</div>
						<h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Frequently Asked Questions</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-300'>
							Common questions about component submission and our community guidelines.
						</p>
					</div>

					<Accordion type='single' collapsible className='bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-200 dark:border-zinc-700'>
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`} className='border-b border-gray-200 dark:border-zinc-700 last:border-b-0'>
								<AccordionTrigger className='px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-zinc-700/50 transition-colors [&[data-state=open]>svg]:rotate-180'>
									<span className='text-lg font-medium text-gray-900 dark:text-white'>
										{faq.question}
									</span>
								</AccordionTrigger>
								<AccordionContent className='px-6 pb-4'>
									<p className='text-gray-600 text-base dark:text-zinc-300 leading-relaxed'>
										{faq.answer}
									</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</section>

				{/* Call to Action */}
				<section className='text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 text-white'>
					<h2 className='text-3xl font-bold mb-4'>Ready to Share Your Component?</h2>
					<p className='text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto'>
						By following these guidelines, you're helping us build an amazing community of developers sharing high-quality, accessible web components.
					</p>
					<button className='bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors inline-flex items-center space-x-2'>
						<span>Submit Your Component</span>
						<Eye className='w-5 h-5' />
					</button>
				</section>
			</div>

			{/* Footer */}
			<footer className='bg-gray-900 dark:bg-zinc-950 text-white py-12 mt-16'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<p className='text-gray-400 dark:text-zinc-400 mb-4'>
						Questions about these guidelines? Contact our support team.
					</p>
					<div className='flex justify-center space-x-6'>
						<a href='#' className='text-gray-400 dark:text-zinc-400 hover:text-white transition-colors'>Support</a>
						<a href='#' className='text-gray-400 dark:text-zinc-400 hover:text-white transition-colors'>Community</a>
						<a href='#' className='text-gray-400 dark:text-zinc-400 hover:text-white transition-colors'>Terms of Service</a>
					</div>
				</div>
			</footer>
		</div>
	);
}