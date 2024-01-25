import React from 'react';
import Navbar from './navbar/navbar';

const SiteHeader = () => {
	return (
		<header className='fixed w-full z-50 p-6 sm:px-12 dark:bg-zinc-900 bg-white shadow-sm  shadow-zinc-300 dark:shadow-none '>
			<div className='px-6 sm:px-14'>
				<Navbar />
			</div>
		</header>
	);
};

export default SiteHeader;
