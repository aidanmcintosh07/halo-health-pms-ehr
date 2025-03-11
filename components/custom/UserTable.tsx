"use client";

import { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import {
	TableCaption,
	TableHeader,
	TableRow,
	TableHead,
	TableBody,
	TableCell,
	Table,
} from "../ui/table";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

interface TableProps {
	users: {
		id: string;
		firstname: string | null;
		lastname: string | null;
		email: string;
		role: string | undefined;
	}[];
}

function UserTable({ users }: TableProps) {
	const [userRoles, setUserRoles] = useState<
		Record<string, string | undefined>
	>(Object.fromEntries(users.map((user) => [user.id, user.role])));

	const handleRoleChange = async (
		userId: string,
		newRole: string | undefined
	) => {
		setUserRoles((prev) => ({
			...prev,
			[userId]: newRole,
		}));

		try {
			await axios.post("/api/admin/user-role", {
				userId,
				newRole,
			});

			toast({
				title: "User role updated",
				duration: 3000,
				variant: "default",
			});
		} catch (error) {
			console.error("Failed to update user role", error);
			toast({
				title: "Failed to update user role",
				duration: 3000,
				variant: "destructive",
			});
		}
	};

	return (
		<div className="flex items-center justify-center mt-8">
			<Table>
				<TableCaption>List of all registered users</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Id</TableHead>
						<TableHead>Firstname</TableHead>
						<TableHead>Lastname</TableHead>
						<TableHead>Email</TableHead>
						<TableHead className="text-right">Role</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user) => (
						<TableRow key={user.id}>
							<TableCell className="font-medium">{user.id}</TableCell>
							<TableCell>{user.firstname}</TableCell>
							<TableCell>{user.lastname}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell className="text-right">
								<Select
									value={userRoles[user.id]}
									onValueChange={(value) => handleRoleChange(user.id, value)}
								>
									<SelectTrigger>
										<SelectValue placeholder="Select role" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="admin">Admin</SelectItem>
										<SelectItem value="patient">Patient</SelectItem>
									</SelectContent>
								</Select>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}

export default UserTable;
