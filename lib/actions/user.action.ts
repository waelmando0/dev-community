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

export async function getUserById(params) {
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

export const createUser = async (userData: CreateUserParams) => {
	try {
		connectToDatabase();
		const newUser = User.create(userData);
		console.log(newUser);
		return newUser;
	} catch (err) {
		console.log(err);
	}
};

export const updateUser = async (userData: UpdateUserParams) => {
	try {
		connectToDatabase();

		const { clerkId, updateData, path } = userData;
		const existingUser = await User.findOneAndUpdate({ clerkId }, updateData, {
			new: true,
		});
		revalidatePath(path);

		return existingUser;
	} catch (err) {
		console.log(err);
	}
};

export const deleteUser = async (userData: DeleteUserParams) => {
	try {
		connectToDatabase();

		const { clerkId } = userData;

		const user = await User.findOneAndDelete({ clerkId });

		if (!user) {
			throw new Error("No User Exist");
		}

		// const userQuestionIds = await Question.find({
		// 	author: user._id,
		// }).distinct("_id");

		await Question.deleteMany({ author: user._id });

		// TODO: deleted user answers, comments, etc

		return user;
	} catch (error) {
		console.log(error);
	}
};
