"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import {
	CreateUserParams,
	DeleteUserParams,
	UpdateUserParams,
	GetUserByIdParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
	try {
		connectToDatabase();

		const { userId } = params;

		const user = await User.findOne({ clerkId: userId });

		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function createUser(userData: CreateUserParams) {
	try {
		connectToDatabase();

		const newUser = User.create(userData);

		console.log(newUser);
		return newUser;
	} catch (err) {
		console.log(err);
	}
}

export async function updateUser(params: UpdateUserParams) {
	try {
		connectToDatabase();

		const { clerkId, updateData, path } = params;
		await User.findOneAndUpdate({ clerkId }, updateData, {
			new: true,
		});

		revalidatePath(path);
	} catch (err) {
		console.log(err);
	}
}

export async function deleteUser(params: DeleteUserParams) {
	try {
		connectToDatabase();

		const { clerkId } = params;

		const user = await User.findOneAndDelete({ clerkId });

		if (!user) {
			throw new Error("No User Exist");
		}

		const userQuestionIds = await Question.find({ author: user._id }).distinct(
			"_id"
		);

		await Question.deleteMany({ author: user._id });

		const deleteUser = await User.findByIdAndDelete(user._id);

		return deleteUser;
	} catch (error) {
		console.log(error);
	}
}
