import Link from 'next/link';
import React from 'react';
import { Badge } from '../ui/badge';

interface RenderTagProps {
	id: number;
	name: string;
	totalQuestions?: number;
	showCount?: boolean;
}

const RenderTag = ({ id, name, totalQuestions, showCount }: RenderTagProps) => {
	return (
		<Link href={`/tags/${id}`} className='flex justify-between gap-2'>
			<Badge variant='secondary' className='rounded-md py-0.5'>
				{name}
			</Badge>
			{showCount && <p className='text-sm'>{totalQuestions}</p>}
		</Link>
	);
};

export default RenderTag;
