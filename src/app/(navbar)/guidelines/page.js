import { Shield, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { rules, recommendations, faqs } from '@/lib/conts';

export const metadata = {
	title: 'Guidelines | Atomox',
	description: 'Help us maintain a high-quality, safe, and inspiring community by following these guidelines when sharing your components.',
}

export default function Guidelines () {
	return (
		<>
			<div className='bg-white dark:bg-zinc-900 shadow-sm border-b dark:border-zinc-800'>
				<div className='max-w-4xl mx-auto px-4 py-8'>
					<div className='text-center'>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3'>
							Component Submission Guidelines
						</h1>
						<p className='text-xl text-gray-600 dark:text-zinc-300 max-w-2xl mx-auto'>
							Help us maintain a high-quality, safe, and inspiring community by following these guidelines when sharing your components.
						</p>
					</div>
				</div>
			</div>

			<div className='max-w-5xl mx-auto px-4 py-10 space-y-16'>
				{/* Rules Section */}
				<section>
					<div className='text-center mb-10'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4'>
							<Shield className='w-8 h-8 text-red-600 dark:text-red-400' />
						</div>
						<h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3'>Community Rules</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-300'>
							These rules are mandatory and violations will result in content removal or account suspension.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-6'>
						{rules.map((rule, index) => (
							<div key={index} className='bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm card-border hover:shadow-md transition-shadow'>
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
						<h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>Quality Recommendations</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-300'>
							Follow these best practices to create outstanding components that the community will love.
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-6'>
						{recommendations.map((rec, index) => (
							<div key={index} className='bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm card-border hover:shadow-md transition-shadow'>
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
						<h2 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4'>Frequently Asked Questions</h2>
						<p className='text-lg text-gray-600 dark:text-zinc-300'>
							Common questions about component submission and our community guidelines.
						</p>
					</div>

					<Accordion type='single' collapsible className='bg-white dark:bg-zinc-900 rounded-lg shadow-sm card-border'>
						{faqs.map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`} className='border-b border-gray-200 dark:border-zinc-700 last:border-b-0'>
								<AccordionTrigger className='px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors [&[data-state=open]>svg]:rotate-180'>
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
				<section className='text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl px-5 py-7 md:px-12 md:py-9 text-white'>
					<h2 className='text-3xl font-bold mb-4'>Ready to Share Your Component?</h2>
					<p className='text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-8 text-balance mx-auto'>
						By following these guidelines, you&apos;re helping us build an amazing community of developers sharing high-quality, accessible web components.
					</p>
					<Link href='/create' className='bg-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2 text-zinc-900 group'>
						<span>Submit Your Component</span>
						<ArrowRight className='size-5 group-hover:translate-x-1 transition-all' />
					</Link>
				</section>
			</div>
		</>
	);
}