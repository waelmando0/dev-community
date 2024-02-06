import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
	title: string;
	description: string;
	route: string;
	btnTitle: string;
}

const NoResult = ({ title, description, route, btnTitle }: Props) => {
	return (
		<div className="flex items-center mt-10 w-full flex-col">
			<Image
				src="/assets/images/light-illustration.png"
				alt="No result illustration"
				width={270}
				height={200}
				className="block object-contain dark:hidden"
			/>
			<Image
				src="/assets/images/dark-illustration.png"
				alt="No result illustration"
				width={270}
				height={200}
				className="hidden object-contain dark:block"
			/>
			<h2 className="text-xl font-semibold mt-8">{title}</h2>
			<p className="text-sm my-3.5 max-w-md text-center">{description}</p>

			<Link href={route} className="mt-4">
				<Button variant="default">{btnTitle}</Button>
			</Link>
		</div>
	);
};

export default NoResult;
