"use client"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";
import Link from 'next/link';
import { NavBar } from './NavBar';
import Logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import { useState } from 'react';
import { DotIcon, Menu, MoonIcon, SunIcon } from 'lucide-react';

export default function Header () {
	const [isOpen, setIsOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme()

	return (<header className="section mx-1! lg:mx-auto sticky top-1 z-50 rounded-t-xl border-b border-zinc-100 bg-white/60 py-3 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60 md:flex md:items-center md:justify-between ">
		{/* Mobile header: logo + toggle */}
		<div className="flex items-center justify-between md:hidden font-medium">
			<Link href="/" className="text-lg text-zinc-900 dark:text-white">
				<Image src={Logo} alt="Logo" width={30} height={30} className="inline-block dark:invert" />
				<span >Atomox</span>
			</Link>
			<button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900 dark:text-white">
				<Menu size={24} />
			</button>
		</div>

		{/* Desktop header */}
		<div className="hidden md:flex items-center gap-3 font-medium">
			<Link href="/" className="text-lg text-zinc-900 dark:text-white flex items-center gap-2  pr-3 ">
				<Image src={Logo} alt="Logo" width={30} height={30} className="dark:invert" />
				<span className="hidden md:inline">Atomox</span>
			</Link>
			<NavBar />
		</div>

		<nav className="hidden md:flex items-center gap-2">
			<SignedOut>
				<a href="/sign-in" className="text-sm px-4 py-1.5 ring-1 rounded-md bg-blue-500 text-white ring-blue-500 card-border">
					Sign in
				</a>
			</SignedOut>
			<SignedIn>
				{/* <UserButton appearance={{ baseTheme: theme === "dark" ? dark : undefined }} /> */}
				<UserButton userProfileMode='navigation' userProfileUrl='/user-profile' appearance={{ baseTheme: resolvedTheme === "dark" ? dark : undefined }}>
					<UserButton.UserProfilePage label="Terms" labelIcon={<DotIcon />} url="terms">
						<div>
							<h1>Custom Terms Page</h1>
							<p>This is the content of the custom terms page.</p>
						</div>
					</UserButton.UserProfilePage>

					<UserButton.MenuItems>
						<UserButton.Action
							label={resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
							labelIcon={resolvedTheme === "dark" ? <MoonIcon className='size-4' /> : <SunIcon className='size-4' />}
							onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
						/>
					</UserButton.MenuItems>
				</UserButton>
			</SignedIn>
			<ThemeToggle />
		</nav>

		{/* Mobile menu dropdown */}
		{isOpen && (
			<div className="mt-4 flex gap-4 md:hidden flex-col md:flex-row">
				<NavBar />
				<div className='flex gap-2 items-center'>
					<SignedOut>
						<a href="/sign-in" className="text-sm px-4 py-1.5 ring-1 rounded-md w-full text-center bg-blue-500 text-white ring-blue-500 card-border">
							Sign in
						</a>
					</SignedOut>
					<SignedIn>
						{/* <UserButton appearance={{ baseTheme: theme === "dark" ? dark : undefined }} /> */}
						<UserButton>
							<UserButton.UserProfileLink label="Homepage" url="/" labelIcon={<DotIcon />} />
							<UserButton.UserProfilePage label="Terms" labelIcon={<DotIcon />} url="terms">
								<div>
									<h1>Custom Terms Page</h1>
									<p>This is the content of the custom terms page.</p>
								</div>
							</UserButton.UserProfilePage>
						</UserButton>
					</SignedIn>
					<ThemeToggle />
				</div>
			</div>
		)}
	</header>
	)
}

