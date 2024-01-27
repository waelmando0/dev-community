import React from 'react';
import Navbar from './navbar/navbar';

const SiteHeader = () => {
	return (
		<header className='fixed w-full z-50 p-6 sm:px-20 dark:bg-zinc-900 bg-white shadow-sm dark:shadow-none '>
			<Navbar />
		</header>
	);
};

export default SiteHeader;
