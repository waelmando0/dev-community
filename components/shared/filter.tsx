'use client';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectGroup,
	SelectItem,
} from '@radix-ui/react-select';
import { ChevronsUpDown } from 'lucide-react';
import React from 'react';

interface FilterProps {
	filters: {
		name: string;
		value: string;
	}[];
	otherClasses?: string;
	containerClasses?: string;
}

const Filter = ({ filters, otherClasses, containerClasses }: FilterProps) => {
	return (
		<Select>
			<SelectTrigger className='w-[180px] bg-slate-200/70 dark:bg-zinc-900 min-h-[56px] rounded-lg flex items-center justify-between px-6'>
				<SelectValue placeholder='Select a Filter' />
				<ChevronsUpDown className='w-4 h-4 text-slate-600' />
			</SelectTrigger>
			<SelectContent className=' cursor-pointer border-none bg-slate-900 dark:bg-slate-300'>
				<SelectGroup>
					{filters.map((item) => (
						<SelectItem
							key={item.value}
							value={item.value}
							className='cursor-pointer focus:bg-slate-800 dark:focus:bg-slate-400'
						>
							{item.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default Filter;
