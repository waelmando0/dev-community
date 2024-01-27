'use client';
import {
	Home,
	Star,
	Tag,
	User2Icon,
	Briefcase,
	MessageCircleQuestion,
	UserCircle,
	UserPlus,
} from 'lucide-react';

import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '../ui/button';

const LeftSidebar = () => {
	const pathname = usePathname();

	const sidebarLinks: SidebarLink[] = [
		{
			route: `/`,
			label: 'Home',
			icon: <Home className='w-5 h-5' />,
			active: pathname === `/`,
		},
		{
			route: `/community`,
			label: 'Community',
			icon: <User2Icon className='w-5 h-5' />,
			active: pathname === `/community`,
		},
		{
			route: `/collections`,
			label: 'Collections',
			icon: <Star className='w-5 h-5' />,
			active: pathname === `/collections`,
		},
		{
			route: `/job`,
			label: 'Find Job',
			icon: <Briefcase className='w-5 h-5' />,
			active: pathname === `/job`,
		},
		{
			route: `/tags`,
			label: 'Tags',
			icon: <Tag className='w-5 h-5' />,
			active: pathname === `/tags`,
		},
		{
			route: `/support`,
			label: 'Ask a question',
			icon: <MessageCircleQuestion className='w-5 h-5' />,
			active: pathname === `/support`,
		},
	];

	return (
		<section className='flex flex-col h-screen sticky top-0 left-0 justify-between overflow-y-auto border-r p-6 pt-36 shadow-sm  dark:shadow-none max-sm:hidden lg:w-[266px] bg-white dark:bg-zinc-900 custom-scrollbar space-y-8'>
			<div className='flex flex-1 flex-col gap-6'>
				{sidebarLinks.map((item) => (
					<Link
						key={item.route}
						href={item.route}
						className={cn(
							'text-base font-medium transition-colors hover:text-black flex items-center space-x-4 p-4',
							item.active
								? 'text-black dark:text-white'
								: 'text-neutral-500 dark:hover:text-white'
						)}
					>
						<span>{item.icon}</span>
						<span className='max-lg:hidden font-semibold'>{item.label}</span>
					</Link>
				))}
			</div>

			<div className='flex flex-col gap-4'>
				<Link href='/sign-in'>
					<Button className='w-full text-black bg-slate-200 hover:bg-slate-200/80 dark:bg-secondary dark:hover:bg-secondary/80 dark:text-white'>
						<span className='max-lg:hidden'>Log In</span>
						<UserCircle className='lg:hidden' />
					</Button>
				</Link>
				<Link href='/sign-up'>
					<Button className='w-full'>
						<span className='max-lg:hidden'>Sign Up</span>
						<UserPlus className='lg:hidden' />
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default LeftSidebar;
