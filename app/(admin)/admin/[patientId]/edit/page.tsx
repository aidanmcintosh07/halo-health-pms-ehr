import AdminEditPatientForm from "@/components/custom/AdminEditPatientForm";
import Header from "@/components/custom/Header";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

function formatDate(date: string | Date | null) {
	if (!date) return "N/A";
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

async function fetchPatientData(id: string) {
	const result = await prisma.$transaction(
		async (tx: Prisma.TransactionClient) => {
			const patientData = await tx.patient.findFirst({
				where: { patient_id: id },
				include: {
					medicalRecords: true,
					educationHistory: true,
					employmentHistory: true,
				},
			});

			if (!patientData) return { patientData: null };

			const serializedData = {
				...patientData,
				date_of_birth: formatDate(patientData.date_of_birth),
				created_at: formatDate(patientData.created_at),
				updated_at: formatDate(patientData.updated_at),
				educationHistory: patientData.educationHistory.map((edu) => ({
					...edu,
					start_date: formatDate(edu.start_date),
					end_date: edu.end_date ? formatDate(edu.end_date) : null,
				})),
				employmentHistory: patientData.employmentHistory.map((job) => ({
					...job,
					start_date: formatDate(job.start_date),
					end_date: job.end_date ? formatDate(job.end_date) : null,
				})),
				medicalRecords: patientData.medicalRecords.map((record) => ({
					...record,
					visit_date: formatDate(record.visit_date),
				})),
			};

			return { patientData: serializedData };
		}
	);

	return result;
}

type Params = Promise<{ patientId: string }>;

export default async function Edit(props: { params: Params }) {
	const params = await props.params;
	const patientId = params.patientId;
	const patientData = await fetchPatientData(patientId);

	return (
		<div>
			<Header />
			<section className="flex-grow flex items-center justify-center py-12 px-6">
				<div className="w-full max-w-4xl bg-gray-100 shadow-lg rounded-2xl p-6 sm:p-8">
					<h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
						Patient Registration Form
					</h2>
					<AdminEditPatientForm patientData={patientData.patientData} />
				</div>
			</section>
		</div>
	);
}
