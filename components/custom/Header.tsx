import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

async function Header() {
	const user = await currentUser();

	return (
		<header className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
				{/* Logo */}
				<Link
					href="/"
					className="text-xl font-bold text-red-600 hover:opacity-80 transition"
				>
					Halo Health
				</Link>

				{/* Center Link */}
				{user && (
					<Link
						href={`/medical-record/${user.id}`}
						className="text-gray-700 hover:text-red-600 transition"
					>
						My Medical Record
					</Link>
				)}

				{user?.publicMetadata.role === "admin" && (
					<Link
						href="/admin"
						className="text-gray-700 hover:text-red-600 transition"
					>
						Admin Dashboard
					</Link>
				)}

				{/* Auth Buttons */}
				<div className="flex items-center space-x-4">
					<SignedOut>
						<SignInButton>
							<button className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition">
								Sign In
							</button>
						</SignInButton>
						<SignUpButton>
							<button className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100 transition">
								Sign Up
							</button>
						</SignUpButton>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</header>
	);
}

export default Header;
