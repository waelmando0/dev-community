import SiteHeader from '@/components/shared/header';
import LeftSidebar from '@/components/shared/left-sidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<SiteHeader />
			<main>
				<div className='flex justify-between space-x-4'>
					<LeftSidebar />
					<section className='flex flex-col flex-1 min-h-screen px-6 pb-6 pt-14 max-md:pb-14 sm:px-14 '>
						{children}
					</section>
					<div className='px-6 pb-6 pt-14 max-md:pb-14 sm:px-14 '>
						RightSidebar
					</div>
				</div>
			</main>
		</>
	);
};

export default Layout;
