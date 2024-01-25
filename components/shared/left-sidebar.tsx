'use client';
import { Home, User2Icon } from 'lucide-react';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SidebarLink {
	route: string;
	label: string;
	icon: React.ReactNode;
	active: React.ReactNode;
}

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
	];
	return (
		<section className='flex flex-col h-screen sticky top-0 left-0 justify-between overflow-y-auto border-r p-6 pt-14 shadow-sm shadow-zinc-300 dark:shadow-none max-sm:hidden lg:w-[266px] dark:bg-zinc-900'>
			<section className='flex flex-col gap-6'>
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
			</section>
		</section>
	);
};

export default LeftSidebar;
