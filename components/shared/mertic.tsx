import Link from "next/link";
import React from "react";

interface MetricProps {
	href?: string;
	isAuthor?: boolean;
	title: string | number;
	value: string | number;
}

const Metric = ({ title, href, isAuthor, value }: MetricProps) => {
	const metricContent = (
		<>
			<p className="flex">
				<span className="mr-1">{value}</span>
				<span
					className={`small-regular line-clamp-1 ${
						isAuthor ? "max-sm:hidden" : ""
					}`}
				>
					{title}
				</span>
			</p>
		</>
	);

	if (href) {
		return (
			<Link href={href} className="flex-center gap-1">
				{metricContent}
			</Link>
		);
	}
	return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
