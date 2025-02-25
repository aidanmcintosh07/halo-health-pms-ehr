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
		<header className="bg-white shadow-md border-b border-gray-200">
			<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
				{/* Logo */}
				<Link href="/" className="flex items-center space-x-2">
					<img
						src="/fixedlogo.jpg"
						height={50}
						width={50}
						alt="Logo"
						className="rounded-lg"
					/>
					<span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
						Halo Health
					</span>
				</Link>

				{/* Center Links */}
				<div className="flex space-x-6">
					{user && (
						<Link
							href={`/medical-record/${user.id}`}
							className="text-gray-700 font-medium hover:bg-gradient-to-r from-blue-400 to-green-400 hover:text-transparent bg-clip-text transition"
						>
							My Medical Record
						</Link>
					)}

					{user?.publicMetadata.role === "admin" && (
						<Link
							href="/admin"
							className="text-gray-700 font-medium hover:bg-gradient-to-r from-blue-400 to-green-400 hover:text-transparent bg-clip-text transition"
						>
							Admin Dashboard
						</Link>
					)}
				</div>

				<div className="flex items-center space-x-4">
					<SignedOut>
						<SignInButton>
							<button className="px-4 py-2 text-white font-semibold rounded-lg shadow-md transition bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 hover:opacity-90">
								Sign In
							</button>
						</SignInButton>
						<SignUpButton>
							<button className="px-4 py-2 text-white font-semibold rounded-lg shadow-md transition bg-gradient-to-r from-green-500 via-yellow-500 to-orange-500 hover:opacity-90">
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
