import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<>
			<div className='flex items-center justify-between'>
				<h1 className='text-3xl font-bold'>All Questions</h1>
				<Link href='/ask-question'>
					<Button size='lg'>Ask a Question</Button>
				</Link>
			</div>
		</>
	);
};

export default Home;
