'use client';

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
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
import { Badge } from '../ui/badge';
import { X } from 'lucide-react';

const Question = () => {
	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};

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

	const handleInputKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		field: any
	) => {
		if (e.key === 'Enter' && field.name === 'tags') {
			e.preventDefault();

			const tagInput = e.target as HTMLInputElement;
			const tagValue = tagInput.value.trim();

			if (tagValue !== '') {
				if (tagValue.length > 15) {
					return form.setError('tags', {
						type: 'required',
						message: 'Tag must be less than 15 characters.',
					});
				}
			}

			if (!field.value.includes(tagValue as never)) {
				form.setValue('tags', [...field.value, tagValue]);
				tagInput.value = '';
				form.clearErrors('tags');
			} else {
				form.trigger();
			}
		}
	};

	const handleTagRemove = (tag: string, field: any) => {
		const newTags = field.value.filter((t: string) => t !== tag);
		form.setValue('tags', newTags);
	};

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
									className='flex w-full bg-slate-200/70 dark:bg-zinc-900 dark:placeholder:text-white rounded-lg border px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 '
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
							<FormControl>
								{/* Editor add an Editor component */}
								<Editor
									apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
									onInit={(evt, editor) => {
										// @ts-ignore
										editorRef.current = editor;
									}}
									initialValue=''
									init={{
										height: 350,
										menubar: false,
										plugins: [
											'advlist',
											'autolink',
											'lists',
											'link',
											'image',
											'charmap',
											'preview',
											'anchor',
											'searchreplace',
											'visualblocks',
											'codesample',
											'fullscreen',
											'insertdatetime',
											'media',
											'tablet',
										],
										toolbar:
											'undo redo | ' +
											'codesample | bold italic forecolor | alignleft aligncenter ' +
											'alignright alignjustify | bullist numlist',
										content_style:
											'body { font-family:Helvetica,Arial,sans-serif; font-size:16px}',
									}}
								/>
							</FormControl>
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
								<>
									<Input
										className='flex w-full bg-slate-200/70 dark:bg-zinc-900 dark:placeholder:text-white rounded-lg border px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 '
										placeholder='Add tags...'
										onKeyDown={(e) => handleInputKeyDown(e, field)}
									/>
									{field.value.length > 0 && (
										<div className='flex-start space-x-4 pt-2 cursor-pointer'>
											{field.value.map((tag: any) => (
												<Badge
													key={tag}
													className='py-2 px-4 gap-2 capitalize'
													onClick={() => handleTagRemove(tag, field)}
												>
													{tag}
													<X className='w-4 h-4' />
												</Badge>
											))}
										</div>
									)}
								</>
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
