"use client"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";
import Link from 'next/link';
import { NavBar } from './NavBar';
import Logo from '@/assets/icons/Logo';
import { CircleUserRound, MoonIcon, SunIcon } from 'lucide-react';

export default function Header () {
	const { user } = useUser()
	const { resolvedTheme, setTheme } = useTheme()

	return (<header className="header-scroll-effect mx-1! sticky top-1 z-50 rounded-t-xl ">
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
					<Link href="/sign-in" className="px-7 py-1.5 rounded-lg shining-button btn-primary text-[15px] tracking-wide">
						Sign in
					</Link>
					<ThemeToggle />
				</SignedOut>
				<SignedIn>
					<Link href="/create" className='px-7 py-1.5 rounded-lg shining-button btn-primary text-[15px] tracking-wide'>
						Create
					</Link>

					<UserButton userProfileMode='navigation' userProfileUrl='/user-profile'
						appearance={{
							baseTheme: resolvedTheme === "dark" ? dark : undefined,
							layout: {
								unsafe_disableDevelopmentModeWarnings: true,
							},
						}}>
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

