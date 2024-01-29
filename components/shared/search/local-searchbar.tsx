'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

interface LocalSearchBarProps {
	route: string;
	placeholder: string;
}

const LocalSearchBar = ({ placeholder }: LocalSearchBarProps) => {
	return (
		<div className='relative w-full'>
			<Search className='absolute left-5 top-4 h-6 w-6 text-slate-600 dark:text-neutral-500' />
			<Input
				type='text'
				placeholder={placeholder}
				onChange={() => {}}
				className='flex w-full bg-slate-200/70 dark:bg-zinc-900 dark:placeholder:text-white rounded-lg border  px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-14'
			/>
		</div>
	);
};

export default LocalSearchBar;
