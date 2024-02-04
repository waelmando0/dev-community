import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

type RenderTagProps = {
	_id: string;
	name: string;
	totalCount?: number;
	showCount?: boolean;
};

const RenderTag = ({ _id, name, totalCount, showCount }: RenderTagProps) => {
	return (
		<Link href={`/tags/${_id}`} className="flex justify-between gap-2">
			<Badge variant="secondary" className="rounded-md py-1 px-4">
				{name}
			</Badge>
			{showCount && <p className="text-sm">{totalCount}</p>}
		</Link>
	);
};

export default RenderTag;
