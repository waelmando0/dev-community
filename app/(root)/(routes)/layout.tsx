import SiteHeader from '@/components/shared/header';
import LeftSidebar from '@/components/shared/left-sidebar';
import RightSidebar from '@/components/shared/right-sidebar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<SiteHeader />
			<main className='relative'>
				<div className='flex'>
					<LeftSidebar />
					<section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 lg:px-32'>
						{children}
					</section>
					<RightSidebar />
				</div>
			</main>
		</>
	);
};

export default Layout;
