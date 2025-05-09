"use client"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'

export default function LanguageToggle () {
	const pathname = usePathname()
	const locale = useLocale();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="border-0 card-border">
					{locale === "es" ? "ES" : "EN"}
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem asChild>
					<Link href={pathname} locale="es">
						Español
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem asChild>
					<Link href={pathname} locale="en">
						English
					</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
