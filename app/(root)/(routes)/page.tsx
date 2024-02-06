import Filter from "@/components/shared/filter";
import LocalSearchBar from "@/components/shared/search/local-searchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/home/home-filters";
import Link from "next/link";
import React from "react";
import { getQuestions } from "@/lib/actions/question.action";
import QuestionCard from "@/components/card/QuestionCard";

const Home = async () => {
	const result = await getQuestions({});
	console.log(result.questions);

	return (
		<>
			<div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4">
				<h1 className="text-3xl font-bold">All Questions</h1>
				<Link href="/ask-question" className="flex justify-end max-sm:w-full">
					<Button size="lg">Ask a Question</Button>
				</Link>
			</div>
			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchBar route="/" placeholder="Search for questions" />
				<Filter
					filters={HomePageFilters}
					containerClasses="hidden max-md:flex"
				/>
			</div>
			<HomeFilters />
			<div className="flex flex-col gap-4 mt-8">
				{result.questions.length > 0 ? (
					result.questions.map((question) => (
						<QuestionCard
							key={question._id}
							_id={question._id}
							title={question.title}
							tags={question.tags}
							author={question.author}
							upvotes={question.upvotes}
							views={question.views}
							answers={question.answers}
							createdAt={question.createdAt}
						/>
					))
				) : (
					<>
						<p>there is no result</p>
					</>
				)}
			</div>
		</>
	);
};

export default Home;
