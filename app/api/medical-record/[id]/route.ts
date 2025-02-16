import { prisma } from "@/lib/db";
import { MedicalRecord } from "@/typings";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
	EducationHistory,
	EmploymentHistory,
	Prisma,
	PrismaClient,
} from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ id: string }>;

export async function PATCH(req: NextRequest, segmentData: { params: Params }) {
	try {
		const user = await currentUser();
		const params = await segmentData.params;
		const id = params.id;

		if (!user) return new NextResponse("Unauthorized", { status: 401 });

		await auth.protect();

		const body = await req.json();
		console.log("Request body: ", JSON.stringify(body, null, 2));

		if (!body || typeof body !== "object") {
			return new NextResponse("Invalid request body", { status: 400 });
		}

		const { patient, medicalRecords, educationHistory, employmentHistory } =
			body;

		console.log("✅ Updating patient...");

		const result = await prisma.$transaction(
			async (
				tx: Omit<
					PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
					| "$connect"
					| "$disconnect"
					| "$on"
					| "$transaction"
					| "$use"
					| "$extends"
				>
			) => {
				// ✅ Update Patient
				const updatedPatient = await tx.patient.update({
					where: { owner_id: id },
					data: {
						first_name: patient.first_name,
						middle_name: patient.middle_name,
						last_name: patient.last_name,
						date_of_birth: new Date(patient.date_of_birth),
						gender: patient.gender,
						nationality: patient.nationality,
						ethnicity: patient.ethnicity,
						place_of_birth: patient.place_of_birth,
						id_type: patient.id_type,
						government_id: patient.government_id,
						contact_phone: patient.contact_phone,
						contact_email: patient.contact_email,
						address_line1: patient.address_line1,
						address_line2: patient.address_line2,
						city: patient.city,
						parish: patient.parish,
						postal_code: patient.postal_code,
						country: patient.country,
					},
				});

				console.log("✅ Patient updated:", updatedPatient);

				// ✅ Update Medical Records (Only if they exist)
				let medicalRecord = [];
				if (medicalRecords?.length) {
					console.log("✅ Updating medical records...");
					medicalRecord = await Promise.all(
						medicalRecords.map((record: MedicalRecord) =>
							tx.medicalRecord.updateMany({
								where: {
									patient_id: updatedPatient.patient_id, // Ensure correct patient
									record_id: record.record_id, // Ensure correct record
								},
								data: {
									visit_date: new Date(record.visit_date),
									provider: record.provider,
									visit_reason: record.visit_reason,
									diagnosis: record.diagnosis,
									treatment: record.treatment,
									medications: record.medications,
									allergies: record.allergies,
									vaccination_status: record.vaccination_status,
									notes: record.notes,
								},
							})
						)
					);
					console.log("✅ Medical records updated:", medicalRecord);
				}

				// ✅ Update Education History (Only if valid)
				let educationRecords: unknown = [];
				if (Array.isArray(educationHistory) && educationHistory.length) {
					console.log("✅ Updating education history...");
					educationRecords = await Promise.all(
						educationHistory
							.filter((edu) => edu && edu.id) // Ensure records are valid
							.map((edu: EducationHistory) =>
								tx.educationHistory.update({
									where: {
										education_id: edu.education_id, // Must have a valid ID
										patient_id: updatedPatient.patient_id,
									},
									data: {
										institution_names: edu.institution_names,
										qualification: edu.qualification,
										start_date: new Date(edu.start_date),
										end_date: edu.end_date ? new Date(edu.end_date) : null,
										notes: edu.notes,
									},
								})
							)
					);
					console.log("✅ Education history updated:", educationRecords);
				}

				// ✅ Update Employment History (Only if valid)
				let employmentRecords: unknown = [];
				if (Array.isArray(employmentHistory) && employmentHistory.length) {
					console.log("✅ Updating employment history...");
					employmentRecords = await Promise.all(
						employmentHistory
							.filter((job) => job && job.id) // Ensure records are valid
							.map((job: EmploymentHistory) =>
								tx.employmentHistory.update({
									where: {
										employment_id: job.employment_id, // Must have a valid ID
										patient_id: updatedPatient.patient_id,
									},
									data: {
										employer_name: job.employer_name,
										job_title: job.job_title,
										start_date: new Date(job.start_date),
										end_date: job.end_date ? new Date(job.end_date) : null,
										employment_status: job.employment_status,
										notes: job.notes,
									},
								})
							)
					);
					console.log("✅ Employment history updated:", employmentRecords);
				}

				return {
					updatedPatient,
					medicalRecord,
					educationRecords,
					employmentRecords,
				};
			}
		);

		console.log("🚀 Transaction successful:", result);
		return NextResponse.json(result);
	} catch (error) {
		console.error("❌ Error while updating form:", error);
		return new NextResponse("Error while updating form", { status: 500 });
	}
}

export async function DELETE(
	req: NextRequest,
	segmentData: { params: Params }
) {
	try {
		const user = await currentUser();
		const params = await segmentData.params;
		const id = params.id;

		if (!user) return new NextResponse("Unauthorized", { status: 401 });

		await auth.protect();

		const deletedPatient = await prisma.$transaction(
			async (
				tx: Omit<
					PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
					| "$connect"
					| "$disconnect"
					| "$on"
					| "$transaction"
					| "$use"
					| "$extends"
				>
			) => {
				await tx.medicalRecord.deleteMany({
					where: { patient: { owner_id: id } },
				});
				await tx.educationHistory.deleteMany({
					where: { patient: { owner_id: id } },
				});
				await tx.employmentHistory.deleteMany({
					where: { patient: { owner_id: id } },
				});

				return await tx.patient.delete({
					where: { owner_id: id },
				});
			}
		);

		console.log("✅ Patient and related data deleted:", deletedPatient);
		return NextResponse.json(deletedPatient);
	} catch (error) {
		console.error("Error while deleting form", error);
		return new NextResponse("Error while deleting form", { status: 500 });
	}
}
