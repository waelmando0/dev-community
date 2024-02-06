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

export const createUser = async (userData: CreateUserParams) => {};

export const updateUser = async (userData: UpdateUserParams) => {};

export const deleteUser = async (userData: DeleteUserParams) => {};
