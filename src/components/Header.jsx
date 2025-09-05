"use client"
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes";
import Link from 'next/link';
import { NavBar } from './NavBar';
import Logo from '@/assets/icons/Logo';
import { CircleUserRound, Menu, MoonIcon, SunIcon, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Atoms, Molecules } from '@/lib/conts';

export default function Header () {
	const { user } = useUser()
	const [open, setOpen] = useState(false);
	const { resolvedTheme, setTheme } = useTheme()
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY < 150) {
				setIsVisible(true);
			} else {
				setIsVisible(currentScrollY < lastScrollY);
			}

			setLastScrollY(currentScrollY);
		};

		let ticking = false;
		const throttledHandleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', throttledHandleScroll, { passive: true });

		return () => window.removeEventListener('scroll', throttledHandleScroll);
	}, [lastScrollY]);


	return (<header className='mx-1! sticky top-1 z-50 rounded-t-xl transition-transform ease-in-out' style={{ transform: `translateY(${isVisible ? 0 : -100}%)` }}>
		<div className='header-scroll-effect absolute top-0 left-0 w-full h-full bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/70 rounded-t-xl border-b border-zinc-100 backdrop-blur-sm'></div>

		<div className='flex items-center justify-between section py-2.5 lg:mx-auto!'>
			<div className="flex items-center gap-3">
				<Link href="/" className="text-lg text-zinc-900 dark:text-white flex items-center gap-2  pr-3 group active:scale-95 transition-all font-semibold relative">
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

				{
					open && <div onClick={() => setOpen(false)} className='bg-zinc-800/20 backdrop-blur-xs absolute top-0 left-0 w-full h-screen transition-all'></div>
				}

				<div className={`absolute max-w-sm top-0 overflow-auto ${open ? "right-0" : "-right-full"} bg-white/80 dark:bg-zinc-800/80 w-3/4 rounded-xl py-3 px-5 h-screen backdrop-blur transition-all`}>
					<SignedOut>
						<div className='flex gap-2 items-center'>
							<Link href="/sign-in" className="px-8 py-1.5 rounded-lg shining btn-primary bg-gradient-to-bl text-[15px] hover:bg-size-[160%_160%] bg-size-[120%_120%] transition-all tracking-wide ">
								Sign in
							</Link>
							<ThemeToggle />
						</div>
					</SignedOut>
					<SignedIn>
						<div className='flex gap-2 items-center'>
							<Link href="/create" className='px-7 py-1.5 rounded-lg shining btn-primary text-[15px] tracking-wide inline-block'>
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
							<Link href='/atoms' className='text-xl mb-2 font-medium inline-block'>Atoms</Link>
						</h3>
						<ul className='flex flex-col gap-1'>
							{
								Atoms.slice(0, 4).map(atom => (
									<li key={atom.id}>
										<Link
											href={`/atoms/${atom.id}`}
											className='block px-4 py-2.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/90 text-sm hover:bg-zinc-200/80 dark:hover:bg-zinc-900/90 transition-colors shadow'
										>
											{atom.name}
										</Link>
									</li>
								))
							}
							<li>
								<Link
									href='/atoms'
									className='block px-4 py-2.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/90 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 transition-colors shadow'
								>
									View all atoms →
								</Link>
							</li>
						</ul>
					</section>

					<section className='mt-5'>
						<h3>
							<Link href='/molecules' className='text-xl mb-2 inline-block font-medium'>Molecules</Link>
						</h3>
						<ul className='flex flex-col gap-1'>
							{
								Molecules.slice(0, 4).map(mol => (
									<li key={mol.id}>
										<Link
											href={`/atoms/${mol.id}`}
											className='block px-4 py-2.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/90 text-sm hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 transition-colors shadow'
										>
											{mol.name}
										</Link>
									</li>
								))
							}
							<li>
								<Link
									href='/molecules'
									className='block px-4 py-2.5 rounded-lg bg-zinc-100/80 dark:bg-zinc-800/90 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/80 transition-colors shadow'
								>
									View all molecules →
								</Link>
							</li>
						</ul>
					</section>
				</div>
			</nav>

			<nav className="hidden md:flex items-center gap-2">
				<SignedOut>
					<Link href="/sign-in" className="px-8 py-1.5 rounded-lg shining btn-primary bg-gradient-to-bl text-[15px] hover:bg-size-[160%_160%] bg-size-[120%_120%] transition-all tracking-wide ">
						Sign in
					</Link>

					<ThemeToggle />
				</SignedOut>
				<SignedIn>
					<Link href="/create" className='px-7 py-1.5 rounded-lg shining btn-primary text-[15px] tracking-wide bg-gradient-to-br'>
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

