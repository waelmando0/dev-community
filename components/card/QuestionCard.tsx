import Link from "next/link";
import React from "react";
import { auth } from "@clerk/nextjs";
import RenderTag from "../shared/render-tag";
import Metric from "../shared/mertic";
import { ThumbsUp, MessageCircle, Eye } from "lucide-react";
import Image from "next/image";
import { convertNumber } from "@/lib/utils";

interface QuestionCardTypeProps {
	_id: string;
	title: string;
	tags: {
		_id: string;
		name: string;
	}[];
	author: {
		name: string;
		_id: string;
		picture: string;
		clerkId: string;
	};
	upvotes: number;
	answers: number;
	views: number;
	createdAt: Date;
}

const QuestionCard = ({
	_id,
	title,
	tags,
	author,
	upvotes,
	answers,
	views,
	createdAt,
}: QuestionCardTypeProps) => {
	const { userId } = auth();

	return (
		<div className="bg-white dark:bg-zinc-900 rounded-lg p-9 sm:px-11 ">
			<div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
				<div>
					<Link href={`/question/${_id}`}>
						<h3 className="text-xl  font-bold line-clamp-1 flex-1">{title}</h3>
					</Link>
				</div>
			</div>
			<div className="mt-3.5 flex flex-wrap gap-2">
				{tags.length > 0
					? tags.map((tag) => (
							<RenderTag key={tag._id} _id={tag._id} name={tag.name} />
						))
					: ""}
			</div>
			<div className="md:flex justify-between flex-wrap items-center mt-6 w-full gap-3">
				<div>
					<Image
						src={author.picture}
						alt={author.name}
						width={16}
						height={16}
						className="object-contain"
					/>
					<Metric
						title="author"
						value={author.name}
						href={`/profile/${author._id}`}
						isAuthor
					/>
				</div>
				<div className="flex items-center gap-3 max-sm:flex-wrap max-sm:items-start">
					<div className="flex items-center gap-1">
						<ThumbsUp className="w-[14px] h-[14px] text-slate-600" />
						<Metric value={convertNumber(upvotes)} title="Votes" />
					</div>
					<div className="flex items-center gap-1">
						<MessageCircle className="w-[14px] h-[14px] text-slate-600" />
						<Metric value={convertNumber(answers)} title="Answers" />
					</div>
					<div className="flex items-center gap-1">
						<Eye className="w-[14px] h-[14px] text-slate-600" />
						<Metric value={convertNumber(views)} title="Views" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestionCard;
