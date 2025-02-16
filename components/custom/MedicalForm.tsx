"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MedicalFormProps {
	patientData: {
		patient_id: string;
		owner_id: string;
		first_name: string;
		middle_name: string | null;
		last_name: string;
		date_of_birth: Date | string;
		gender: string;
		nationality: string;
		ethnicity: string | null;
		place_of_birth: string;
		id_type: string;
		government_id: string;
		contact_phone: string | null;
		contact_email: string | null;
		address_line1: string;
		address_line2: string | null;
		city: string;
		parish: string;
		postal_code: string | null;
		country: string;
		created_at: Date | string;
		updated_at: Date | string;

		educationHistory: {
			patient_id: string;
			notes: string | null;
			education_id: string;
			institution_names: string;
			qualification: string;
			start_date: Date | string;
			end_date: Date | string | null;
		}[];

		employmentHistory: {
			patient_id: string;
			notes: string | null;
			start_date: Date | string;
			end_date: Date | string | null;
			employment_id: string;
			employer_name: string;
			job_title: string;
			employment_status: string;
		}[];

		medicalRecords: {
			patient_id: string;
			record_id: string;
			visit_date: Date | string;
			provider: string;
			visit_reason: string;
			diagnosis: string | null;
			treatment: string | null;
			medications: string | null;
			allergies: string | null;
			vaccination_status: string | null;
			notes: string | null;
		}[];
	} | null;
}

function MedicalForm({ patientData }: MedicalFormProps) {
	return (
		<div className="p-6 bg-gray-100 min-h-screen">
			<div className="space-y-6 max-w-4xl mx-auto">
				{/* Patient Information Card */}
				<Card className="bg-white shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-semibold">
							Patient Information
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<strong>Full Name:</strong> {patientData?.first_name}{" "}
								{patientData?.middle_name || ""} {patientData?.last_name}
							</div>
							<div>
								<strong>Date of Birth:</strong>{" "}
								{String(patientData?.date_of_birth)}
							</div>
							<div>
								<strong>Gender:</strong> {patientData?.gender}
							</div>
							<div>
								<strong>Nationality:</strong> {patientData?.nationality}
							</div>
							<div>
								<strong>Place of Birth:</strong> {patientData?.place_of_birth}
							</div>
							<div>
								<strong>ID Type:</strong> {patientData?.id_type}
							</div>
							<div>
								<strong>Government ID:</strong>{" "}
								<a href={patientData?.government_id} className="text-blue-500">
									View Document
								</a>
							</div>
							<div>
								<strong>Contact Phone:</strong> {patientData?.contact_phone}
							</div>
							<div>
								<strong>Contact Email:</strong> {patientData?.contact_email}
							</div>
							<div>
								<strong>Address:</strong> {patientData?.address_line1},{" "}
								{patientData?.city}, {patientData?.parish},{" "}
								{patientData?.country}
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Medical Records */}
				<Card className="bg-white shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-semibold">
							Medical Records
						</CardTitle>
					</CardHeader>
					<CardContent>
						{patientData!.medicalRecords.length > 0 ? (
							patientData?.medicalRecords.map((record, index) => (
								<div key={index} className="space-y-2 border-t pt-4">
									<div>
										<strong>Visit Date:</strong> {record.visit_date.toString()}
									</div>
									<div>
										<strong>Provider:</strong> {record.provider}
									</div>
									<div>
										<strong>Visit Reason:</strong> {record.visit_reason}
									</div>
									<div>
										<strong>Diagnosis:</strong> {record.diagnosis}
									</div>
									<div>
										<strong>Treatment:</strong> {record.treatment}
									</div>
									<div>
										<strong>Medications:</strong> {record.medications}
									</div>
									<div>
										<strong>Allergies:</strong> {record.allergies || "None"}
									</div>
									<div>
										<strong>Vaccination Status:</strong>{" "}
										{record.vaccination_status}
									</div>
									<div>
										<strong>Notes:</strong>{" "}
										{record.notes || "No notes available"}
									</div>
								</div>
							))
						) : (
							<p>No medical records available.</p>
						)}
					</CardContent>
				</Card>

				{/* Education History */}
				<Card className="bg-white shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-semibold">
							Education History
						</CardTitle>
					</CardHeader>
					<CardContent>
						{patientData!.educationHistory.length > 0 ? (
							patientData?.educationHistory.map((education, index) => (
								<div key={index} className="space-y-2 border-t pt-4">
									<div>
										<strong>Institution:</strong> {education.institution_names}
									</div>
									<div>
										<strong>Qualification:</strong> {education.qualification}
									</div>
									<div>
										<strong>Start Date:</strong>{" "}
										{education.start_date.toString()}
									</div>
									<div>
										<strong>End Date:</strong>{" "}
										{education.end_date
											? education.end_date.toString()
											: "Ongoing"}
									</div>
									<div>
										<strong>Notes:</strong>{" "}
										{education.notes || "No notes available"}
									</div>
								</div>
							))
						) : (
							<p>No education history available.</p>
						)}
					</CardContent>
				</Card>

				{/* Employment History */}
				<Card className="bg-white shadow-lg">
					<CardHeader>
						<CardTitle className="text-2xl font-semibold">
							Employment History
						</CardTitle>
					</CardHeader>
					<CardContent>
						{patientData!.employmentHistory.length > 0 ? (
							patientData?.employmentHistory.map((employment, index) => (
								<div key={index} className="space-y-2 border-t pt-4">
									<div>
										<strong>Employer:</strong> {employment.employer_name}
									</div>
									<div>
										<strong>Job Title:</strong> {employment.job_title}
									</div>
									<div>
										<strong>Start Date:</strong>{" "}
										{employment.start_date.toString()}
									</div>
									<div>
										<strong>End Date:</strong>{" "}
										{employment.end_date
											? employment.end_date.toString()
											: "Currently Employed"}
									</div>
									<div>
										<strong>Status:</strong> {employment.employment_status}
									</div>
									<div>
										<strong>Notes:</strong>{" "}
										{employment.notes || "No notes available"}
									</div>
								</div>
							))
						) : (
							<p>No employment history available.</p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default MedicalForm;
