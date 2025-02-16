import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";

import { EducationHistory, EmploymentHistory, MedicalRecord } from "@/typings";

import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/prisma/generated/client";

// * Root of the medical-record API enpoint issues
// ! Index of arrays wasn't specfied in the data creation
// ? The date fields were not formatted correctly

export async function POST(req: NextRequest) {
	try {
		const user = await currentUser();
		if (!user) return new NextResponse("Unauthorized", { status: 401 });

		await auth.protect();

		const body = await req.json();
		console.log("Request body: ", JSON.stringify(body, null, 2));

		if (!body || typeof body !== "object") {
			return new NextResponse("Invalid request body", { status: 400 });
		}

		const { patient, medicalRecords, educationHistory, employmentHistory } =
			body;

		console.log("✅ Creating patient...");

		const result = await prisma.$transaction(
			async (tx: Prisma.TransactionClient) => {
				const newPatient = await tx.patient.create({
					data: {
						owner_id: user.id,
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

				console.log("✅ Patient created:", newPatient);

				if (!newPatient) {
					throw new Error("Patient creation failed");
				}

				let medicalRecord = [];
				if (medicalRecords?.length) {
					console.log("✅ Creating medical records...");
					medicalRecord = await Promise.all(
						medicalRecords.map((record: MedicalRecord) =>
							tx.medicalRecord.create({
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
									patient: { connect: { patient_id: newPatient.patient_id } },
								},
							})
						)
					);
					console.log("✅ Medical records created:", medicalRecord);
				}

				let educationRecords = [];
				if (educationHistory?.length) {
					console.log("✅ Creating education history...");
					educationRecords = await Promise.all(
						educationHistory.map((edu: EducationHistory) =>
							tx.educationHistory.create({
								data: {
									institution_names: edu.institution_names,
									qualification: edu.qualification,
									start_date: new Date(edu.start_date),
									end_date: edu.end_date ? new Date(edu.end_date) : null,
									notes: edu.notes,
									patient: { connect: { patient_id: newPatient.patient_id } },
								},
							})
						)
					);
					console.log("✅ Education history created:", educationRecords);
				}

				let employmentRecords = [];
				if (employmentHistory?.length) {
					console.log("✅ Creating employment history...");
					employmentRecords = await Promise.all(
						employmentHistory.map((job: EmploymentHistory) =>
							tx.employmentHistory.create({
								data: {
									employer_name: job.employer_name,
									job_title: job.job_title,
									start_date: new Date(job.start_date),
									end_date: job.end_date ? new Date(job.end_date) : null,
									employment_status: job.employment_status,
									notes: job.notes,
									patient: { connect: { patient_id: newPatient.patient_id } },
								},
							})
						)
					);
					console.log("✅ Employment history created:", employmentRecords);
				}

				return {
					newPatient,
					medicalRecord,
					educationRecords,
					employmentRecords,
				};
			}
		);

		console.log("🚀 Transaction successful:", result);
		return NextResponse.json(result);
	} catch (error) {
		console.error("🚨 Error:", error);
		return new NextResponse(`Internal Server Error: ${error}`, { status: 500 });
	}
}
