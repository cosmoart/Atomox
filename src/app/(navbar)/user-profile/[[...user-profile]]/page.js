'use client'

import { UserProfile } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

const UserProfilePage = () => {
	const { resolvedTheme } = useTheme()

	return <UserProfile className='w-full' path='/user-profile' routing='path' appearance={{ baseTheme: resolvedTheme === 'dark' ? dark : undefined }}>
		{/* <UserProfile.Page label='Terms' labelIcon={<DotIcon />} url='terms'>
			<div>
				<h1>Custom Terms Page</h1>
				<p>This is the content of the custom terms page.</p>
			</div>
		</UserProfile.Page> */}
	</UserProfile>
}

export default UserProfilePage