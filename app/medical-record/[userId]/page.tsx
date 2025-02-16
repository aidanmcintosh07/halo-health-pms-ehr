import Header from "@/components/custom/Header";
import MedicalForm from "@/components/custom/MedicalForm";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import Link from "next/link";

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

			const serializedData = {
				...patientData,
				date_of_birth: formatDate(patientData.date_of_birth),
				created_at: formatDate(patientData.created_at),
				updated_at: formatDate(patientData.updated_at),
				educationHistory: patientData.educationHistory.map((edu) => ({
					...edu,
					start_date: formatDate(new Date(edu.start_date)),
					end_date: edu.end_date ? formatDate(new Date(edu.end_date)) : null,
				})),
				employmentHistory: patientData.employmentHistory.map((job) => ({
					...job,
					start_date: formatDate(new Date(job.start_date)),
					end_date: job.end_date ? new Date(job.end_date) : null,
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

async function MedicalRecords(props: { params: Params }) {
	const params = await props.params;
	const userId = params.patientId;
	const user = await currentUser();

	const patientData = await fetchPatientData(userId);

	if (!patientData.patientData) {
		return (
			<>
				<Header />
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<section className="text-center">
						<h1 className="font-bold">No Medical Record Found</h1>
						<p className="text-sm">
							No medical record exists for this user. Please check back later.
						</p>
					</section>
				</div>
			</>
		);
	}

	console.log(patientData.patientData);

	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-6">
				<section className="text-center">
					<h1 className="font-bold">{user?.fullName}&apos;s Medical Record</h1>
					<span className="text-sm">
						Patient Id: {patientData.patientData?.patient_id}
					</span>
				</section>

				{(user?.id === patientData.patientData.owner_id ||
					user?.publicMetadata.role === "admin") && (
					<Link
						href={`/medical-record/${userId}/edit`}
						className="mt-4 text-white bg-black hover:bg-black/90 p-2 rounded-md"
					>
						Edit Record
					</Link>
				)}

				<div className="flex items-center justify-center">
					<MedicalForm patientData={patientData.patientData} />
				</div>
			</div>
		</>
	);
}

export default MedicalRecords;
