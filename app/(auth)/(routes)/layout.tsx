interface AuthLayoutProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<section className='container'>
			<div className='flex h-[80vh] items-center justify-center'>
				{children}
			</div>
		</section>
	);
}
