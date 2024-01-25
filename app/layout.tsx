import '../styles/globals.css';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/providers/theme-provider';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [
		{
			name: 'wael mando',
			url: 'https://twitter.com/waelmando0',
		},
	],
	creator: 'waelmando',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn(fontSans.variable, 'bg-secondary dark:bg-accent')}>
				<ClerkProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem={false}
					>
						{children}
					</ThemeProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}
