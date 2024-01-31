import Question from '@/components/forms/Question';
import React from 'react';

const Page = () => {
	return (
		<div>
			<h1 className='text-3xl font-bold'>Ask a question</h1>

			<div className='mt-11'>
				<Question />
			</div>
		</div>
	);
};

export default Page;
