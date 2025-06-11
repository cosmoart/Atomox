'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Tabs ({ tabs = [] }) {
	const validTabs = tabs.filter(tab => tab.content)
	const [activeTab, setActiveTab] = useState(validTabs[0]?.value)

	return (
		<div className="w-full h-full flex flex-col">
			<div className="relative flex space-x-4 border-b">
				{validTabs.map((tab) => (
					<button
						key={tab.value}
						onClick={() => setActiveTab(tab.value)}
						className={cn(
							'relative px-4 py-2 font-medium text-muted-foreground transition-colors',
							activeTab === tab.value && 'text-primary'
						)}
					>
						{tab.label}
						{activeTab === tab.value && (
							<motion.div
								layoutId="tab-underline"
								className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-primary"
								transition={{ type: 'spring', stiffness: 500, damping: 30 }}
							/>
						)}
					</button>
				))}
			</div>

			<div className="min-h-[100px] relative grow">
				{validTabs.map(tab => (
					<div
						key={tab.value}
						className={cn(
							'w-full transition-opacity top-0 left-0 h-full',
							activeTab === tab.value ? 'opacity-100' : 'opacity-0 absolute  pointer-events-none h-0 overflow-hidden'
						)}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	)
}
