"use client"

import * as React from "react"
import { Link } from '@/i18n/navigation';

import { cn } from "@/lib/utils"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useTranslations } from 'next-intl'
import { Atoms, Molecules } from '@/lib/conts';

const components = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
]

export function NavBar () {
	const t = useTranslations("Header.NavBar")
	return (
		<NavigationMenu className="max-w-none *:w-full md:*:w-auto">
			<NavigationMenuList className="w-full *:grow">
				<NavigationMenuItem>
					<NavigationMenuTrigger className="dark:bg-zinc-900/80!">
						<Link href="/atoms" >
							Atoms
						</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							{
								Atoms.map((component) => (
									<ListItem
										key={component.id}
										title={component.name}
										href={`/atoms/${component.id}`}
									>
										{component.description}
									</ListItem>
									// <li
									// 	key={component.id}
									// 	className="row-span-3"
									// >
									// 	<Link href={`/atoms/${component.id}`}>
									// 		{component.name}
									// 	</Link>
									// </li>
								))
							}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Link href="/molecules" >
							Molecules
						</Link>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{Molecules.map((component) => (
								<ListItem
									key={component.id}
									title={component.name}
									href={`/molecules/${component.id}`}
								>
									{component.description}
								</ListItem>
								// <li
								// 	key={component.id}
								// 	className="row-span-3"
								// >
								// 	<Link href={`/molecules/${component.id}`}>
								// 		{component.name}
								// 	</Link>
								// </li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/create" className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm'>
						Create
					</Link>
				</NavigationMenuItem>
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
