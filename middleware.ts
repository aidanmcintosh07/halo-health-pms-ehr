import {
	clerkClient,
	clerkMiddleware,
	createRouteMatcher,
} from "@clerk/nextjs/server";

// const clerkClient = createClerkClient({
// 	secretKey: process.env.CLERK_SECRET_KEY,
// });

const isPublicRoute = createRouteMatcher([
	"/sign-in(.*)",
	"/",
	"/api/uploadthing",
]);

export default clerkMiddleware(async (auth, request) => {
	if (!isPublicRoute(request)) {
		await auth.protect();
	}

	const { userId } = await auth();

	if (!userId) {
		return;
	}

	const client = await clerkClient();

	const currentUser = await client.users.getUser(userId!);

	if (!currentUser.publicMetadata.role) {
		await client.users.updateUser(userId!, {
			publicMetadata: {
				role: "patient",
			},
		});
		console.log("Updated user role to patient");
	} else {
		console.log("User role is already set");
	}
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
