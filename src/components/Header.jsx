"use client"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";
import Link from 'next/link';
import { NavBar } from './NavBar';
import Logo from '@/assets/icons/Logo';
import { ArrowRight, CircleUserRound, Menu, MoonIcon, SunIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Atoms, Molecules } from '@/lib/conts';

export default function Header () {
	const { user } = useUser()
	const [open, setOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme()

	return (<header className="header-scroll-effect mx-1! sticky top-1 z-50 rounded-t-xl ">
		<div className='flex items-center justify-between section py-3 lg:mx-auto!'>
			<div className="flex items-center gap-3">
				<Link href="/" className="text-lg text-zinc-900 dark:text-white flex items-center gap-2  pr-3 group active:scale-95 transition-all font-semibold">
					<Logo />
					<span>Atomox</span>
				</Link>
				<div className='hidden md:block'>
					<NavBar />
				</div>
			</div>

			<nav className='md:hidden'>
				<button onClick={() => setOpen(!open)} className='p-3 relative z-20'>
					<Menu className={`block absolute top-0 left-0 md:hidden transition-all ${open ? "opacity-0 scale-50" : "opacity-100 scale-100"}`} />
					<X className={`block absolute top-0 left-0 md:hidden transition-all ${open ? "opacity-100 scale-100" : "opacity-0 scale-50"}`} />
				</button>

				<div className={`absolute max-w-sm top-0 ${open ? "right-0" : "-right-full"} bg-white/80 dark:bg-zinc-800/80 w-3/4 rounded-xl py-3 px-5 h-screen backdrop-blur transition-all`}>
					<SignedOut>
						<div className='flex gap-2 items-center'>
							<Link href="/sign-in" className="px-7 py-1.5 rounded-lg shining-button btn-primary text-[15px] tracking-wide inline-block">
								Sign in
							</Link>
							<ThemeToggle />
						</div>
					</SignedOut>
					<SignedIn>
						<div className='flex gap-2 items-center'>
							<Link href="/create" className='px-7 py-1.5 rounded-lg shining-button btn-primary text-[15px] tracking-wide inline-block'>
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
						</div>
					</SignedIn>

					<section className='mt-5'>
						<h3>
							<Link href='/atoms' className='text-xl mb-2 inline-block'>Atoms</Link>
						</h3>
						<ul className='flex flex-col gap-1'>
							{
								Atoms.slice(0, 5).map(atom => (
									<li key={atom.id} className='flex gap-2 items-center rounded-md px-3 py-1.5 bg-zinc-100/50 dark:bg-zinc-800 text-[15px]'>
										<Link href={`/atoms/${atom.id}`} className='text-sm'>{atom.name}</Link>
									</li>
								))
							}
							<li className='flex gap-2 items-center rounded-md px-3 py-1 bg-zinc-100/50 dark:bg-zinc-800 text-[15px]'>
								<Link href='/atoms' className='text-sm'>View all</Link>
							</li>
						</ul>
					</section>

					<section className='mt-5'>
						<h3>
							<Link href='/molecules' className='text-xl mb-2 inline-block'>Molecules</Link>
						</h3>
						<ul className='flex flex-col gap-1'>
							{
								Molecules.slice(0, 5).map(mol => (
									<li key={mol.id} className='flex gap-2 items-center rounded-md px-3 py-1.5 bg-zinc-100/50 dark:bg-zinc-800 text-[15px]'>
										<span className='text-sm'>{mol.name}</span>
									</li>
								))
							}
							<li className='flex gap-2 items-center rounded-md px-3 py-1 bg-zinc-100/50 dark:bg-zinc-800 text-[15px]'>
								<Link href='/molecules' className='text-sm'>View all</Link>
							</li>
						</ul>
					</section>
				</div>
			</nav>

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

