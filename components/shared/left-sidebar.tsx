'use client';
import {
	Home,
	Star,
	Tag,
	User2Icon,
	Briefcase,
	MessageCircleQuestion,
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
		<section className='flex flex-col h-screen sticky top-0 left-0 justify-between overflow-y-auto border-r p-6 pt-36 shadow-sm shadow-zinc-300 dark:shadow-none max-sm:hidden lg:w-[266px] dark:bg-zinc-900 custom-scroll'>
			<div className='flex flex-1 flex-col gap-6'>
				{sidebarLinks.map((item) => (
					<div key={item.route}>
						<Link
							href={item.route}
							className={cn(
								'text-sm font-medium transition-colors hover:text-black flex items-center space-x-6 p-2',
								item.active
									? 'text-black dark:text-white'
									: 'text-neutral-500 dark:hover:text-white'
							)}
						>
							<span>{item.icon}</span>
							<span>{item.label}</span>
						</Link>
					</div>
				))}
			</div>

			<div className='flex flex-col gap-3'>
				<Link href='/sign-in'>
					<Button className='w-full'>
						<span>Log In</span>
					</Button>
				</Link>
				<Link href='/sign-up'>
					<Button className='w-full bg-zinc-700'>
						<span>Sign Up</span>
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default LeftSidebar;
