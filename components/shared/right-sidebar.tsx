import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import RenderTag from "./render-tag";

const RightSidebar = () => {
	const hotQuestions = [
		{
			_id: 1,
			title:
				"Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
		},
		{
			_id: 2,
			title: "Is it only me or the font is bolder than necessary?",
		},
		{
			_id: 3,
			title: "Can I get the course for free?",
		},
		{
			_id: 4,
			title: "Redux Toolkit Not Updating State as Expected",
		},
		{
			_id: 5,
			title: "Async/Await Function Not Handling Errors Properly",
		},
	];

	const popularTags = [
		{
			_id: "1",
			name: "Javascript",
			totalQuestions: 4,
		},
		{
			_id: "2",
			name: "React",
			totalQuestions: 6,
		},
		{
			_id: "3",
			name: "Next",
			totalQuestions: 3,
		},
		{
			_id: "4",
			name: "Node",
			totalQuestions: 2,
		},
		{
			_id: "5",
			name: "Redux",
			totalQuestions: 4,
		},
	];

	return (
		<section className="flex flex-col h-screen sticky top-0 right-0  overflow-y-auto border-l p-6 pt-36 shadow-sm dark:shadow-none max-xl:hidden w-[350px] bg-white dark:bg-zinc-900 custom-scrollbar space-y-8">
			<div>
				<h3 className="text-xl font-bold">Top Question</h3>
				<div className="flex flex-col gap-[30px] w-full mt-7">
					{hotQuestions.map((question) => (
						<Link
							key={question._id}
							href={`/question/${question._id}`}
							className="flex items-center justify-between gap-7 cursor-pointer"
						>
							<p className="text-black dark:text-neutral-400 text-sm font-medium leading-[1.15rem]">
								{question.title}
							</p>
							<span>
								<ChevronRight className="w-4 h-4" />
							</span>
						</Link>
					))}
				</div>
			</div>
			<div className="pt-8">
				<h3 className="text-xl font-bold">Popular Tags</h3>
				<div className="flex flex-col gap-4 mt-7">
					{popularTags.map((tag) => (
						<RenderTag key={tag._id} _id={tag._id} name={tag.name} showCount />
					))}
				</div>
			</div>
		</section>
	);
};

export default RightSidebar;
