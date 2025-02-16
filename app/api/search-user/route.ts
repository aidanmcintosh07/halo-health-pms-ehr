import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const url = new URL(request.url);
	const query = url.searchParams.get("query");

	if (!query) {
		return NextResponse.json(
			{ error: "No search query provided" },
			{ status: 400 }
		);
	}

	const users = await prisma.patient.findMany({
		where: {
			OR: [
				{ first_name: { contains: query, mode: "insensitive" } },
				{ last_name: { contains: query, mode: "insensitive" } },
				{ contact_email: { contains: query, mode: "insensitive" } },
			],
		},
		include: {
			medicalRecords: true,
			educationHistory: true,
			employmentHistory: true,
		},
	});

	return NextResponse.json({ users });
}
