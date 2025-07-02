import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Clock } from 'lucide-react';
import { getTimeAgo } from '@/lib/getTimeAgo';

export default function TimeAgoTooltip ({ dateString }) {
	const date = new Date(dateString);

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<span className="cursor-default text-[15px] opacity-95 flex gap-2 items-center">
						<Clock size={18} />
						{getTimeAgo(date)}
					</span>
				</TooltipTrigger>
				<TooltipContent >
					<p>Published {date.toLocaleString("en", { dateStyle: "medium" })}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
