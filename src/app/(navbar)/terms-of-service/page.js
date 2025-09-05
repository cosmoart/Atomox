export const metadata = {
	title: 'Terms of Service | Atomox',
	description: 'Terms of Service',
}

export default function TermsOfService () {
	return (
		<div className='section max-w-3xl mx-auto py-12 text-gray-800 dark:text-gray-200'>
			<h1 className='text-4xl font-bold mb-8'>Terms of Service</h1>

			<p className='mb-6'><strong>Last updated:</strong> September 5, 2025</p>

			<p className='mb-6'>
				Welcome to Atomox.dev (“we”, “our”, or “us”). By using our website, you agree to comply with and be bound by
				these Terms of Service. If you do not agree, please do not use Atomox.dev.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>1. User Accounts</h2>
			<p className='mb-6'>
				You must create an account to submit components, comment, or like. You are responsible for maintaining the
				security of your account and for all activity under it.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>2. Component Submissions</h2>
			<ul className='list-disc list-inside space-y-2 mb-6'>
				<li>Submitted components will not be published until manually reviewed and approved.</li>
				<li>If a submission violates our <a href='/guidelines' className='text-blue-600 dark:text-blue-400'>Guidelines</a>, we may reject or remove it.</li>
				<li>We reserve the right to delete submitted content or terminate user accounts if violations are severe.</li>
				<li>If a submission does not follow recommendations but is not a violation, we may edit the component before publication.</li>
				<li>By submitting a component, you confirm that it is your own work or that you have permission to share it.</li>
				<li>All published components are released under the MIT License.</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>3. User Conduct</h2>
			<ul className='list-disc list-inside space-y-2 mb-6'>
				<li>Users may comment components respectfully.</li>
				<li>Spam, harassment, or disrespectful behavior is not tolerated and may result in account deletion.</li>
				<li>You must not use Atomox.dev for illegal activities or to infringe on others’ rights.</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>4. Platform Changes</h2>
			<p className='mb-6'>
				Atomox.dev is still in development. Features, rules, and functionality may change at any time without prior
				notice.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>5. Intellectual Property</h2>
			<p className='mb-6'>
				Atomox.dev itself is open source and licensed under the MIT License. All components submitted by users are
				also published under the MIT License once approved. By contributing, you grant us the right to host, modify,
				and distribute your content under this license.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>6. Account Termination</h2>
			<p className='mb-6'>
				We reserve the right to suspend or delete accounts that violate these Terms, our Guidelines, or applicable
				law.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>7. Disclaimer</h2>
			<p className='mb-6'>
				Atomox.dev is provided “as is” without warranties of any kind. We are not responsible for any damages arising
				from your use of the platform.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>8. Changes to Terms</h2>
			<p className='mb-6'>
				We may update these Terms of Service from time to time. Continued use of Atomox.dev after changes constitutes
				acceptance of the updated terms.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>9. Contact Us</h2>
			<p>
				If you have any questions about these Terms of Service, please contact us at: <br />
				<a href='mailto:cosmohydra17@gmail.com' className='text-blue-600 dark:text-blue-400'>
					cosmohydra17@gmail.com
				</a>
			</p>
		</div>
	)
}
