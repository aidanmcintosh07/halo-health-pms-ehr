import EditPatientForm from "@/components/custom/EditPatientForm";
import Header from "@/components/custom/Header";
import prisma from "@/lib/db";
import { Prisma } from "@/prisma/generated/client";
import { EducationHistory, EmploymentHistory, MedicalRecord } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";

function formatDate(date: string | Date | null) {
	if (!date) return "N/A";

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return formattedDate;
}

async function fetchPatientData(id: string) {
	const result = await prisma.$transaction(
		async (tx: Prisma.TransactionClient) => {
			const patientData = await tx.patient.findFirst({
				where: {
					owner_id: id,
				},
				include: {
					medicalRecords: true,
					educationHistory: true,
					employmentHistory: true,
				},
			});

			if (!patientData) return { patientData: null };

			// Convert Date objects to readable strings
			const serializedData = {
				...patientData,
				date_of_birth: formatDate(patientData.date_of_birth),
				created_at: formatDate(patientData.created_at),
				updated_at: formatDate(patientData.updated_at),
				educationHistory: patientData.educationHistory.map(
					(edu: EducationHistory) => ({
						...edu,
						start_date: formatDate(new Date(edu.start_date)),
						end_date: edu.end_date ? new Date(edu.end_date) : null,
					})
				),
				employmentHistory: patientData.employmentHistory.map(
					(job: EmploymentHistory) => ({
						...job,
						start_date: formatDate(new Date(job.start_date)),
						end_date: job.end_date ? formatDate(new Date(job.end_date)) : null,
					})
				),
				medicalRecords: patientData.medicalRecords.map(
					(record: MedicalRecord) => ({
						...record,
						visit_date: formatDate(record.visit_date),
					})
				),
			};

			return { patientData: serializedData };
		}
	);

	return result;
}

async function Edit() {
	const user = await currentUser();

	const patientData = await fetchPatientData(user?.id as string);

	return (
		<div>
			<Header />

			<section className="flex-grow flex items-center justify-center py-12 px-6">
				<div className="w-full max-w-4xl bg-gray-100 shadow-lg rounded-2xl p-6 sm:p-8">
					<h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
						Patient Registration Form
					</h2>
					<EditPatientForm patientData={patientData.patientData} />
				</div>
			</section>
		</div>
	);
}

export default Edit;
