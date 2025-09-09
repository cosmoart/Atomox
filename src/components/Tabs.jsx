'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Tabs ({ tabs = [], styled = false }) {
	const [activeTab, setActiveTab] = useState(tabs[0]?.value)

	return (
		<div className="w-full h-full flex flex-col">
			<div className={`relative flex  ${styled ? "p-1 mb-1 bg-zinc-100 dark:bg-zinc-800/70 rounded-xl gap-2" : "gap-4"}`}>
				{tabs.map((tab) => (
					<button
						key={tab.value}
						onClick={() => setActiveTab(tab.value)}
						className={cn(
							`relative px-4 flex gap-2 justify-center items-center font-medium text-muted-foreground transition-colors`,
							activeTab === tab.value && 'text-primary',
							styled ? `grow hover:border-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-700/60 hover:bg-zinc-200 cursor-pointer rounded-lg border py-0.5 text-[15px] border-transparent` : "py-2"
						)}
					>
						{activeTab === tab.value && (
							<motion.div
								layoutId="tab-underline"
								className={`absolute left-0 right-0 rounded-lg ${styled ? "h-full card-border bg-zinc-300/50 dark:bg-zinc-700/80 " : "-bottom-[1px] h-[2px] bg-primary"}`}
								transition={{ type: 'spring', stiffness: 500, damping: 30 }}
							/>
						)}
						<span className='relative z-10'>{tab.label}</span>
					</button>
				))}
			</div>

			<div className="min-h-[100px] relative grow ">
				{tabs.map(tab => (
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
		</div >
	)
}
