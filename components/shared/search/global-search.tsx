import { Search } from 'lucide-react';
import React from 'react';

const GlobalSearch = () => {
	return (
		<div className='relative w-full max-w-[600px] max-lg:hidden'>
			<div className='bg-slate-200/70 dark:bg-accent relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'>
				<Search className='w-6 h-6 text-slate-600' />
			</div>
		</div>
	);
};

export default GlobalSearch;
