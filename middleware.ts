import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
	// meaning our landing page is now unprotected meaning that both logged in and logged out users can visit it
	publicRoutes: ['/'],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
