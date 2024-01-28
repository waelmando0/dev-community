'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React from 'react';

interface LocalSearchBarProps {
	route: string;
	iconPosition: string;
	placeholder: string;
	otherClasses?: string;
}

const LocalSearchBar = ({
	route,
	iconPosition,
	placeholder,
	otherClasses,
}: LocalSearchBarProps) => {
	return (
		<div
			className={cn(
				'bg-slate-200/70 dark:bg-zinc-900 flex min-h-[56px] grow items-center gap-4 rounded-lg px-4',
				otherClasses
			)}
		>
			{iconPosition === 'left' && (
				<Search className='text-slate-600 cursor-pointer' />
			)}
			<Input
				type='text'
				placeholder={placeholder}
				onChange={() => {}}
				className='flex h-9 w-full text-sm border-none bg-transparent shadow-none outline-none paragraph-regular no-focus placeholder'
			/>
			{iconPosition === 'right' && (
				<Search className='text-slate-600 cursor-pointer' />
			)}
		</div>
	);
};

export default LocalSearchBar;
