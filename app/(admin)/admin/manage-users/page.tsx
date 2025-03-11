import Header from "@/components/custom/Header";
import UserTable from "@/components/custom/UserTable";
import { clerkClient } from "@clerk/nextjs/server";

async function ManageUsers() {
	const client = await clerkClient();
	const { data } = await client.users.getUserList({
		orderBy: "-created_at",
	});

	const users = data.map((user) => ({
		id: user.id,
		firstname: user.firstName || "N/A",
		lastname: user.lastName || "N/A",
		email: user.emailAddresses[0]?.emailAddress || "N/A",
		role: user.publicMetadata?.role || "N/A",
	}));

	return (
		<>
			<Header />
			<div className="mx-auto max-w-6xl h-screen py-4">
				<h1 className="text-3xl font-bold text-center">Manage Users</h1>

				<UserTable users={users} />
			</div>
		</>
	);
}

export default ManageUsers;
