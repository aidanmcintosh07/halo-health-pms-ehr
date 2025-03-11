import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const client = await clerkClient();
		const body = await req.json();

		const { userId, newRole } = body;

		const user = await client.users.getUser(userId!);

		if (!user) {
			console.error("User not found");
			return;
		}

		if (user.publicMetadata.role === newRole) {
			console.log("User role is already set");
			return;
		}

		const res = await client.users.updateUser(userId!, {
			publicMetadata: {
				role: newRole,
			},
		});

		return NextResponse.json(res);
	} catch (error) {
		console.error("Failed to update user role", error);
	}
}
