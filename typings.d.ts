export type Patient = {
	patient_id: string;
	first_name: string;
	middle_name?: string;
	last_name: string;
	date_of_birth: Date;
	gender: string;
	nationality: string;
	ethnicity?: string;
	place_of_birth: string;
	government_id?: string;
	contact_phone?: string;
	contact_email?: string;
	address_line1: string;
	address_line2?: string;
	city: string;
	parish: string;
	postal_code?: string;
	country: string;
	created_at: Date;
	updated_at: Date;
	medicalRecords?: MedicalRecord[];
	educationHistory?: EducationHistory[];
	employmentHistory?: EmploymentHistory[];
	antenatalRecords?: AntenatalRecord[];
	emergencyContacts?: EmergencyContact[];
};

export type MedicalRecord = {
	patient_id: string;
	record_id: string;
	visit_date: Date;
	provider: string;
	visit_reason: string;
	diagnosis: string | null;
	treatment: string | null;
	medications: string | null;
	allergies: string | null;
	vaccination_status: string | null;
	notes: string | null;
};

export type EducationHistory = {
	patient_id: string;
	notes: string | null;
	education_id: string;
	institution_names: string;
	qualification: string;
	start_date: Date;
	end_date: Date | null;
};

export type EmploymentHistory = {
	patient_id: string;
	notes: string | null;
	start_date: Date;
	end_date: Date | null;
	employment_id: string;
	employer_name: string;
	job_title: string;
	employment_status: string;
};
