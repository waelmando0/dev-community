import Filter from '@/components/shared/filter';
import LocalSearchBar from '@/components/shared/search/local-searchbar';
import { Button } from '@/components/ui/button';
import { HomePageFilters } from '@/constants/filter';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<>
			<div className='flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4'>
				<h1 className='text-3xl font-bold'>All Questions</h1>
				<Link href='/ask-question' className='flex justify-end max-sm:w-full'>
					<Button size='lg'>Ask a Question</Button>
				</Link>
			</div>
			<div className='mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
				<LocalSearchBar route='/' placeholder='Search for questions' />
				<Filter
					filters={HomePageFilters}
					containerClasses='hidden max-md:flex'
				/>
			</div>
		</>
	);
};

export default Home;
