"use client";

import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { QuestionsSchema } from "@/lib/validation";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import { createQuestion } from "@/lib/actions/question.action";
import { useRouter, usePathname } from "next/navigation";

interface QuestionProps {
	mongoUserId: string;
	type: string;
	questionId?: string;
	title?: string;
	content?: string;
	tags?: string[];
}

const type: any = "create";

const Question = ({ mongoUserId, type, questionId }: QuestionProps) => {
	const editorRef = useRef(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const form = useForm<z.infer<typeof QuestionsSchema>>({
		resolver: zodResolver(QuestionsSchema),
		defaultValues: {
			title: "",
			explanation: "",
			tags: [],
		},
	});

	async function onSubmit(values: z.infer<typeof QuestionsSchema>) {
		try {
			setIsSubmitting(true);
			await createQuestion({
				title: values.title,
				content: values.explanation,
				tags: values.tags,
				author: JSON.parse(mongoUserId),
				path: pathname,
			});

			// navigate to home page
			router.push("/");
		} catch (error) {
		} finally {
			setIsSubmitting(false);
		}
	}

	const handleInputKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>,
		field: any
	) => {
		if (event.key === "Enter" && field.name === "tags") {
			event.preventDefault();
			const tagInput = event.target as HTMLInputElement;
			const tagValue = tagInput.value.trim();

			if (tagValue !== "") {
				if (tagValue.length > 15) {
					return form.setError("tags", {
						type: "required",
						message: "Tag must be less than 15 characters.",
					});
				}

				if (!field.value.includes(tagValue as never)) {
					form.setValue("tags", [...field.value, tagValue]);
					tagInput.value = "";
					form.clearErrors("tags");
				} else {
					form.trigger();
				}
			}
		}
	};

	const handleTagRemove = (tag: string, field: any) => {
		const newTags = field.value.filter((t: string) => t !== tag);
		form.setValue("tags", newTags);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold sm:text-xl">
								Question Title
							</FormLabel>
							<FormControl>
								<Input
									className="flex w-full bg-slate-200/70 dark:bg-zinc-900 dark:placeholder:text-white rounded-lg border px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
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
					name="explanation"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold sm:text-xl">
								Detailed explanation of your problem
							</FormLabel>
							<FormControl>
								{/* Editor add an Editor component */}
								<Editor
									apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
									onInit={(evt, editor) =>
										// @ts-ignore
										(editorRef.current = editor)
									}
									id="tiny-editor"
									onBlur={field.onBlur}
									onEditorChange={(content) => field.onChange(content)}
									initialValue=""
									init={{
										height: 500,
										menubar: false,
										plugins: [
											"advlist",
											"autolink",
											"lists",
											"link",
											"image",
											"charmap",
											"preview",
											"anchor",
											"searchreplace",
											"visualblocks",
											"code",
											"fullscreen",
											"insertdatetime",
											"media",
											"table",
											"code",
											"help",
											"wordcount",
										],
										toolbar:
											"undo redo | blocks | " +
											"codesample |bold italic forecolor | alignleft aligncenter " +
											"alignright alignjustify | bullist numlist | " +
											"removeformat | help",
										content_style:
											"body { font-family:Inetr,Arial,sans-serif; font-size:16px }",
										// skin: mode === "dark" ? "oxide-dark" : "oxide",
										// content_css: mode === "dark" ? "dark" : "light",
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
					name="tags"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="font-semibold sm:text-xl">Tags</FormLabel>
							<FormControl>
								<>
									<Input
										className="flex w-full bg-slate-200/70 dark:bg-zinc-900 dark:placeholder:text-white rounded-lg border px-3 h-14 shadow-sm transition-colors  placeholder:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 "
										placeholder="Add tags..."
										onKeyDown={(e) => handleInputKeyDown(e, field)}
									/>
									{field.value.length > 0 && (
										<div className="flex flex-wrap gap-4  pt-2 cursor-pointer">
											{field.value.map((tag: any) => (
												<Badge
													key={tag}
													className="py-2 px-4 capitalize "
													onClick={() => handleTagRemove(tag, field)}
												>
													{tag}
													<X className="w-4 h-4 ml-2" />
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
				<Button type="submit" size="lg" disabled={isSubmitting}>
					{isSubmitting ? (
						<>{type === "edit" ? "Editing..." : "Posting..."}</>
					) : (
						<>{type === "edit" ? "Edit Question" : "Ask a Question"}</>
					)}
				</Button>
			</form>
		</Form>
	);
};

export default Question;
