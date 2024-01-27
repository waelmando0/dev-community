import LocalSearchBar from '@/components/shared/search/local-searchbar';
import { Button } from '@/components/ui/button';
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
			<div className='mt-12 flex justify-between gap-5 max-sm:flex-col sm:items-center'>
				<LocalSearchBar
					route='/'
					iconPosition='left'
					placeholder='Search for questions'
					otherClasses='flex-1'
				/>
				Filters
			</div>
		</>
	);
};

export default Home;
