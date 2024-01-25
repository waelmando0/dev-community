import React from 'react';
import Navbar from './navbar/navbar';

const SiteHeader = () => {
	return (
		<header className='z-40 w-full dark:bg-zinc-900 bg-white border-b dark:border-none'>
			<div className='px-6 sm:px-14'>
				<Navbar />
			</div>
		</header>
	);
};

export default SiteHeader;
