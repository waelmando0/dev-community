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
			icon: <Home />,
			active: pathname === `/`,
		},
		{
			route: `/community`,
			label: 'Community',
			icon: <User2Icon />,
			active: pathname === `/community`,
		},
		{
			route: `/collections`,
			label: 'Collections',
			icon: <Star />,
			active: pathname === `/collections`,
		},
		{
			route: `/job`,
			label: 'Find Job',
			icon: <Briefcase />,
			active: pathname === `/job`,
		},
		{
			route: `/tags`,
			label: 'Tags',
			icon: <Tag />,
			active: pathname === `/tags`,
		},
		{
			route: `/support`,
			label: 'Ask a question',
			icon: <MessageCircleQuestion />,
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
							'text-sm font-medium transition-colors hover:text-black flex items-center space-x-4 p-4',
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

			<div className='flex flex-col gap-6'>
				<Link href='/sign-in'>
					<button className='w-full p-4 inline-flex items-center justify-center rounded-xl bg-secondary hover:bg-secondary/90 dark:bg-accent dark:text-white text-sm font-semibold border-b'>
						<span className='max-lg:hidden'>Log In</span>
						<UserCircle className='lg:hidden' />
					</button>
				</Link>
				<Link href='/sign-up'>
					<button className='w-full p-4 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-zinc-600 dark:text-white text-sm font-semibold border-b'>
						<span className='max-lg:hidden'>Sign Up</span>
						<UserPlus className='lg:hidden' />
					</button>
				</Link>
			</div>
		</section>
	);
};

export default LeftSidebar;
