import React from 'react';
import { ThemeToggle } from '../../theme-toggle';
import { SignedIn, UserButton } from '@clerk/nextjs';
import MobileNav from './mobile-nav';
import GlobalSearch from '../search/global-search';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between'>
			<Link href='/'>
				<h1>Next Master</h1>
			</Link>
			<GlobalSearch />
			<div className='flex items-center space-x-4'>
				<ThemeToggle />
				<SignedIn>
					<UserButton
						appearance={{
							elements: {
								avatarBox: 'h-10 w-10',
							},
							variables: {
								colorPrimary: '#ff7000',
							},
						}}
					/>
				</SignedIn>
				<div className='flex items-center sm:hidden'>
					<MobileNav />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
