import Header from "@/components/custom/Header";
import SearchUserForm from "@/components/custom/SearchUserForm";

function AdminDashboard() {
	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-10">
				<h1 className="text-3xl font-bold text-gray-900 text-center">
					Admin Dashboard
				</h1>

				<div className="flex items-center justify-center flex-1">
					<SearchUserForm />
				</div>
			</div>
		</>
	);
}

export default AdminDashboard;
