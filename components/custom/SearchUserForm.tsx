"use client";

import { Patient } from "@prisma/client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

function SearchUserForm() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);

	const handleSearch = async () => {
		const response = await fetch(`/api/search-user?query=${query}`);
		const data = await response.json();
		setResults(data.users);
	};

	return (
		<div className="w-full">
			<div className="flex flex-1 items-center">
				<Input
					type="text"
					placeholder="Search by firstname, lastname or email"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="border p-2"
				/>
				<Button
					onClick={handleSearch}
					className="bg-blue-500 text-white p-2 ml-2"
				>
					Search
				</Button>
			</div>

			<div className="mt-4">
				{results.length > 0 ? (
					<ul>
						<h1 className="text-base font-semibold mb-6">Search Results:</h1>
						{results.map((user: Patient) => (
							<li
								className="underline text-blue-500 cursor-pointer"
								key={user.patient_id}
							>
								<Link href={`/admin/${user.patient_id}`}>
									{user.first_name} {user.last_name} - {user.contact_email}
								</Link>
							</li>
						))}
					</ul>
				) : (
					<p>No results found</p>
				)}
			</div>
		</div>
	);
}

export default SearchUserForm;
