'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { QuestionsSchema } from '@/lib/validation';

const Question = () => {
	const form = useForm<z.infer<typeof QuestionsSchema>>({
		resolver: zodResolver(QuestionsSchema),
		defaultValues: {
			title: '',
			explanation: '',
			tags: [],
		},
	});

	function onSubmit(values: z.infer<typeof QuestionsSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold'>Question Title</FormLabel>
							<FormControl>
								<Input
									className='flex w-full bg-slate-200/70 dark:bg-zinc-500/50 dark:placeholder:text-white rounded-lg border px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 '
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Be specific and imagine you&apos;re asking a question to another
								person
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='explanation'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold'>
								Detailed explanation of your problem
							</FormLabel>
							<FormControl></FormControl>
							<FormDescription>
								Introduce the problem and expand on what you put in the title.
								Minimum 20 characters.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='tags'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='font-semibold'>Tags</FormLabel>
							<FormControl>
								<Input
									className='flex w-full bg-slate-200/70 dark:bg-zinc-500/50 dark:placeholder:text-white rounded-lg border px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 '
									placeholder='Add tags...'
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Add up to 3 tags to describe what your question is about. You
								need to press enter to add a tag.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
};

export default Question;
