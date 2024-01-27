'use client';
import React from 'react';

import Link from 'next/link';
import { SheetClose } from '../../ui/sheet';
import {
	Home,
	Star,
	Tag,
	User2Icon,
	Briefcase,
	MessageCircleQuestion,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const NavContent = () => {
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
		<section className='flex flex-col gap-6 pt-16 h-full'>
			{sidebarLinks.map((item) => (
				<SheetClose asChild key={item.route}>
					<Link
						href={item.route}
						className={cn(
							'text-base font-medium transition-colors hover:text-black flex items-center space-x-6 p-2',
							item.active
								? 'text-black dark:text-white'
								: 'text-neutral-500 dark:hover:text-white'
						)}
					>
						<span>{item.icon}</span>
						<span>{item.label} </span>
					</Link>
				</SheetClose>
			))}
		</section>
	);
};

export default NavContent;
