'use client';

import React from 'react';

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterProps {
	filters: {
		name: string;
		value: string;
	}[];
	containerClasses?: string;
}

const Filter = ({ filters, containerClasses }: FilterProps) => {
	return (
		<div className={cn('relative', containerClasses)}>
			<Select>
				<SelectTrigger className='inline-flex items-center justify-between whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-5 min-h-[56px] bg-slate-200/70 dark:bg-zinc-900 w-full border'>
					<SelectValue placeholder='Select a Filter' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{filters.map((item) => (
							<SelectItem
								key={item.value}
								value={item.value}
								className='cursor-pointer'
							>
								{item.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Filter;
