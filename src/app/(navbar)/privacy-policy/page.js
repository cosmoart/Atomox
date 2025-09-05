export const metadata = {
	title: 'Privacy Policy | Atomox',
	description: 'Privacy Policy',
}

export default function PrivacyPolicy () {
	return (
		<div className='section max-w-3xl mx-auto py-12 text-gray-800 dark:text-gray-200'>
			<h1 className='text-4xl font-bold mb-8'>Privacy Policy</h1>

			<p className='mb-6'><strong>Last updated:</strong> September 5, 2025</p>

			<p className='mb-6'>
				Atomox.dev (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we
				collect, use, and protect your personal information when you use our website.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>1. Information We Collect</h2>
			<ul className='list-disc list-inside space-y-2'>
				<li><strong>Account Information:</strong> When you register using Clerk, we collect your name, email address, and profile information.</li>
				<li><strong>User Content:</strong> Components or other content you upload and share on Atomox.dev.</li>
				<li><strong>Analytics Data:</strong> We use Google Analytics to understand site usage (e.g., page views, device type, and general location).</li>
				<li><strong>Technical Data:</strong> Vercel and Cloudflare may automatically log IP addresses and other technical details for security and performance.</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>2. How We Use Your Information</h2>
			<ul className='list-disc list-inside space-y-2'>
				<li>To provide and improve our services.</li>
				<li>To allow you to register, log in, and share components.</li>
				<li>To personalize your user experience.</li>
				<li>To analyze website traffic and performance.</li>
				<li>To ensure security and prevent abuse.</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>3. Third-Party Services</h2>
			<p className='mb-6'>We rely on trusted third-party providers:</p>
			<ul className='list-disc list-inside space-y-2'>
				<li><strong>Clerk:</strong> Authentication and user account management.</li>
				<li><strong>Supabase:</strong> Database and storage of user content.</li>
				<li><strong>Vercel:</strong> Hosting and deployment of the website.</li>
				<li><strong>Cloudflare:</strong> Content delivery and security.</li>
				<li><strong>Google Analytics:</strong> Website analytics and usage tracking.</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>4. Cookies and Tracking</h2>
			<p className='mb-6'>
				We use cookies and similar technologies to maintain sessions, secure your account, and analyze site usage.
				You can disable cookies in your browser settings, but some features may not work properly.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>5. Data Retention and Deletion</h2>
			<p className='mb-6'>
				We retain your data as long as your account is active. You may request account deletion at any time, which
				will also delete your stored content. Some technical logs may be retained for security purposes.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>6. Data Security</h2>
			<p className='mb-6'>
				We take reasonable measures to protect your information. However, no method of transmission or storage is
				completely secure, and we cannot guarantee absolute security.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>7. Children&apos;s Privacy</h2>
			<p className='mb-6'>
				Atomox.dev is not intended for children under 13. We do not knowingly collect personal data from children.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>8. Changes to This Policy</h2>
			<p className='mb-6'>
				We may update this Privacy Policy from time to time. The latest version will always be available on this page.
			</p>

			<h2 className='text-2xl font-semibold mt-10 mb-4'>9. Contact Us</h2>
			<p>
				If you have any questions about this Privacy Policy, please contact us at: <br />
				<a href='mailto:cosmohydra17@gmail.com' className='text-blue-600 dark:text-blue-400'>
					cosmohydra17@gmail.com
				</a>
			</p>
		</div>
	)
}
