'use client';

import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '..//ui/button';
import { HomePageFilters } from '../../constants/filter';
import { useRouter, useSearchParams } from 'next/navigation';

const HomeFilters = () => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [active, setActive] = useState('');

	return (
		<div className='mt-10 hidden flex-wrap gap-3 md:flex'>
			{HomePageFilters.map((item) => (
				<Button key={item.value} className={cn(active === item.value)}>
					{item.name}
				</Button>
			))}
		</div>
	);
};

export default HomeFilters;
