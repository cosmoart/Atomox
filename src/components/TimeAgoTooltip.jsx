import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
// import { format, formatDistanceToNow } from "date-fns";
// import { enUS } from "date-fns/locale";
import { Clock } from 'lucide-react';

export default function TimeAgoTooltip ({ dateString }) {
	const date = new Date(dateString);

	const DATE_UNITS = {
		day: 86400,
		hour: 3600,
		minute: 60,
		second: 1,
	}

	const getSecondsDiff = (timestamp) => (Date.now() - timestamp) / 1000
	const getUnitAndValueDate = (secondsElapsed) => {
		for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
			if (secondsElapsed >= secondsInUnit || unit === 'second') {
				const value = Math.floor(secondsElapsed / secondsInUnit) * -1
				return { value, unit }
			}
		}
	}

	const getTimeAgo = (timestamp) => {
		const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

		const secondsElapsed = getSecondsDiff(timestamp)
		const { value, unit } = getUnitAndValueDate(secondsElapsed)
		return rtf.format(value, unit)
	}

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<span className="cursor-default text-sm opacity-90 flex gap-2 items-center">
						<Clock size={15} />
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
