"use client"

import * as React from "react"
import Link from 'next/link';

import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import { Atoms, Molecules } from '@/lib/conts';
import { ArrowRight } from 'lucide-react';
import { SignedOut } from '@clerk/nextjs';

export function NavBar () {
	return (
		<NavigationMenu className="max-w-none *:w-full md:*:w-auto">
			<NavigationMenuList className="w-full *:grow">
				<NavigationMenuItem>
					<NavigationMenuTrigger className="hover:dark:bg-zinc-700/30! bg-transparent hover:bg-white/40!">
						<Link href="/atoms" >
							Atoms
						</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent className="bg-transparent!">
						<ul className="grid gap-2 p-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							{
								Atoms.slice(0, 9).map((component) => (
									<ListItem
										key={component.id}
										title={component.name}
										href={`/atoms/${component.id}`}
									>
										<span title={component.description}>{component.description}</span>
									</ListItem>
								))
							}
							<li className='p-3'>
								<Link href="/atoms" className='select-none h-full shining bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-500 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all focus:bg-accent focus:text-accent-foreground  flex gap-1 items-center justify-center group'>
									<span className="font-medium text-[15px] mt-1 inline-block text-white">
										View all
									</span>
									<ArrowRight size={18} className='transition-all group-hover:ml-1 text-white' />
								</Link>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="hover:dark:bg-zinc-700/30! bg-transparent hover:bg-white/50!">
						<Link href="/molecules" >
							Molecules
						</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[650px] ">
							{Molecules.slice(0, 14).map((component) => (
								<ListItem
									key={component.id}
									title={component.name}
									href={`/molecules/${component.id}`}
								>
									<span title={component.description}>{component.description}</span>
								</ListItem>
							))}
							<li className='py-3'>
								<Link href="/molecules" className='select-none shining bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-500 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all focus:bg-accent focus:text-accent-foreground h-full flex gap-1 items-center justify-center group hover:bg-size-[140%_140%] bg-size-[100%_100%]'>
									<span className="font-medium text-[15px] mt-1 inline-block text-white">
										View all
									</span>
									<ArrowRight size={18} className='transition-all group-hover:ml-1 text-white' />
								</Link>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<SignedOut>
					<NavigationMenuItem>
						<Link href="/create" className='block select-none space-y-1 rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium'>
							Create
						</Link>
					</NavigationMenuItem>
				</SignedOut>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
