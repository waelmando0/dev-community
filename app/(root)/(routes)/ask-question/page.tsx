import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
	const { userId } = auth();

	// const userId = "exampleClerkId";
	if (!userId) redirect("/sign-in");

	const mongoUser = await getUserById({ userId });
	console.log(mongoUser);

	return (
		<div>
			<h1 className="text-3xl font-bold">Ask a question</h1>

			<div className="mt-11">
				<Question mongoUserId={JSON.stringify(mongoUser._id)} />
			</div>
		</div>
	);
};

export default AskQuestion;
