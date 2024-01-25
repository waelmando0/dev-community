'use client';
import React from 'react';

import Link from 'next/link';
import { SheetClose } from '../../ui/sheet';
import { Home, User2Icon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SidebarLink {
	route: string;
	label: string;
	icon: React.ReactNode;
	active: React.ReactNode;
}

const NavContent = () => {
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
	];

	return (
		<section className='flex flex-col gap-6 pt-16 h-full'>
			{sidebarLinks.map((item) => (
				<SheetClose asChild key={item.route}>
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
						<span>{item.label} </span>
					</Link>
				</SheetClose>
			))}
		</section>
	);
};

export default NavContent;
