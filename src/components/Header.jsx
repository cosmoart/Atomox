"use client"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";
import Link from 'next/link';
import { NavBar } from './NavBar';
import Logo from '@/assets/icons/Logo';
import { useState } from 'react';
import { CircleUserRound, DotIcon, MoonIcon, SunIcon } from 'lucide-react';

export default function Header () {
	const { user } = useUser()
	const [isOpen, setIsOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme()

	return (<header className="mx-1! sticky top-1 z-50 rounded-t-xl border-b border-zinc-100 bg-white/60 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 ">
		<div className='md:flex md:items-center md:justify-between section py-3 lg:mx-auto!'>
			<div className="hidden md:flex items-center gap-3">
				<Link href="/" className="text-lg text-zinc-900 dark:text-white flex items-center gap-2  pr-3 group active:scale-95 transition-all font-semibold">
					<Logo />
					<span>Atomox</span>
				</Link>
				<NavBar />
			</div>

			<nav className="hidden md:flex items-center gap-2">
				<SignedOut>
					<Link href="/sign-in" className="text-sm px-5 py-1.5 rounded-md bg-gradient-to-l  from-blue-500 to-indigo-500 text-white font-medium transition-all ">
						Sign in
					</Link>
					<ThemeToggle />
				</SignedOut>
				<SignedIn>
					<Link href="/create" className='px-7 py-1.5 rounded-lg bg-gradient-to-l  from-blue-500 to-indigo-500 via-blue-600 text-[15px] tracking-wide font-medium text-white  via-20% transition-all active:scale-95 '>
						Create
					</Link>

					<UserButton userProfileMode='navigation' userProfileUrl='/user-profile'
						appearance={{
							baseTheme: resolvedTheme === "dark" ? dark : undefined,
							layout: {
								unsafe_disableDevelopmentModeWarnings: true,
							},
						}}>
						<UserButton.UserProfilePage label="Terms" labelIcon={<DotIcon />} url="terms">
							<div>
								<h1>Custom Terms Page</h1>
								<p>This is the content of the custom terms page.</p>
							</div>
						</UserButton.UserProfilePage>

						<UserButton.MenuItems>
							<UserButton.Link label='View profile' href={`/u/${user?.username}`} labelIcon={<CircleUserRound className='size-4' />} />

							<UserButton.Action
								label={resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
								labelIcon={resolvedTheme === "dark" ? <MoonIcon className='size-4' /> : <SunIcon className='size-4' />}
								onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
							/>
						</UserButton.MenuItems>
					</UserButton>
				</SignedIn>
			</nav>
		</div>
	</header>
	)
}

