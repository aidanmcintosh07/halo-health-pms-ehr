import Header from "@/components/custom/Header";
import MedicalForm from "@/components/custom/MedicalForm";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { Patient } from "@prisma/client";
import Link from "next/link";
import { EducationHistory, EmploymentHistory, MedicalRecord } from "@/typings";

function formatDate(date: string | Date | null): string {
	if (!date) return "N/A";
	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

// Define a new type to handle formatted string dates
type PatientWithFormattedDates = Omit<Patient, "date_of_birth"> & {
	date_of_birth: string;
	medicalRecords: (Omit<MedicalRecord, "visit_date"> & {
		visit_date: string;
	})[];
	educationHistory: (Omit<EducationHistory, "start_date" | "end_date"> & {
		start_date: string;
		end_date: string | null;
	})[];
	employmentHistory: (Omit<EmploymentHistory, "start_date" | "end_date"> & {
		start_date: string;
		end_date: string | null;
	})[];
};

async function fetchPatientData(
	id: string
): Promise<PatientWithFormattedDates | null> {
	const user = await prisma.patient.findFirst({
		where: { patient_id: id },
		include: {
			medicalRecords: true,
			educationHistory: true,
			employmentHistory: true,
		},
	});

	if (!user) return null;

	return {
		...user,
		date_of_birth: formatDate(user.date_of_birth),
		medicalRecords: user.medicalRecords.map((record: MedicalRecord) => ({
			...record,
			visit_date: formatDate(record.visit_date),
		})),
		educationHistory: user.educationHistory.map((edu: EducationHistory) => ({
			...edu,
			start_date: formatDate(edu.start_date),
			end_date: edu.end_date ? formatDate(edu.end_date) : null,
		})),
		employmentHistory: user.employmentHistory.map((job: EmploymentHistory) => ({
			...job,
			start_date: formatDate(job.start_date),
			end_date: job.end_date ? formatDate(job.end_date) : null,
		})),
	};
}

type Params = Promise<{ patientId: string }>;

async function UserMedicalRecord(props: { params: Params }) {
	const params = await props.params;
	const patientId = params.patientId;
	const user = await currentUser();

	const patientData = await fetchPatientData(patientId);
	if (!patientData) {
		return <div>Patient not found</div>;
	}

	return (
		<>
			<Header />
			<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-6">
				<section className="text-center">
					<h1 className="font-bold">
						{patientData.first_name} {patientData.last_name}&apos;s Medical
						Record
					</h1>
					<span className="text-sm">Patient Id: {patientData.patient_id}</span>
				</section>

				{user?.publicMetadata.role === "admin" && (
					<Link
						href={`/admin/${patientData.patient_id}/edit`}
						className="mt-4 text-white bg-black hover:bg-black/90 p-2 rounded-md"
					>
						Edit Record
					</Link>
				)}

				<div className="flex items-center justify-center">
					<MedicalForm patientData={patientData} />
				</div>
			</div>
		</>
	);
}

export default UserMedicalRecord;
