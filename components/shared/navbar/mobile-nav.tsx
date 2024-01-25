import React from 'react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '../../ui/button';
import NavContent from './nav-content';

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button aria-expanded='true'>
					<MenuIcon
						className='w-6 h-6 cursor-pointer '
						aria-hidden='true'
						focusable='false'
					/>
				</button>
			</SheetTrigger>
			<SheetContent side='left' className='dark:bg-accent bg-secondary'>
				<Link href='/' className='text-bold text-2xl'>
					Logo
				</Link>
				<div>
					<SheetClose asChild>
						<NavContent />
					</SheetClose>

					<SignedOut>
						<div className='flex flex-col gap-3'>
							<SheetClose asChild>
								<Link href='/sign-in'>
									<Button className='w-full'>
										<span>Log In</span>
									</Button>
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href='/sign-up'>
									<Button className='w-full bg-zinc-700'>
										<span>Sign Up</span>
									</Button>
								</Link>
							</SheetClose>
						</div>
					</SignedOut>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
