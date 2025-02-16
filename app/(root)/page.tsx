import Header from "@/components/custom/Header";
import PatientForm from "@/components/custom/PatientForm";

function Home() {
	return (
		<main className="w-full min-h-screen flex flex-col">
			<Header />

			<section className="bg-red-100 py-12 px-6">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
						Welcome to <span className="text-red-600">Halo Health</span>
					</h1>
					<p className="text-lg text-gray-700 mt-4">
						Fill out the form below to securely add a new patient to the system.
					</p>
				</div>
			</section>

			<section className="flex-grow flex items-center justify-center py-12 px-6">
				<div className="w-full max-w-4xl bg-gray-100 shadow-lg rounded-2xl p-6 sm:p-8">
					<h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
						Patient Registration Form
					</h2>
					<PatientForm />
				</div>
			</section>
		</main>
	);
}

export default Home;
