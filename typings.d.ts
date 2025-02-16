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
	record_id: string;
	patient_id: string;
	visit_date: Date;
	provider: string;
	visit_reason: string;
	diagnosis?: string;
	treatment?: string;
	medications?: string;
	allergies?: string;
	vaccination_status?: string;
	notes?: string;
};

export type EducationHistory = {
	education_id: string;
	patient_id: string;
	institution_name: string;
	qualification: string;
	start_date: Date;
	end_date?: Date;
	notes?: string;
};

export type EmploymentHistory = {
	employment_id: string;
	patient_id: string;
	employer_name: string;
	job_title: string;
	start_date: Date;
	end_date?: Date;
	employment_status: string;
	notes?: string;
};

export type AntenatalRecord = {
	antenatal_id: string;
	patient_id: string;
	antenatal_visit_date: Date;
	gestational_age: number;
	complications?: string;
	doctor_notes?: string;
};

export type EmergencyContact = {
	contact_id: string;
	patient_id: string;
	name: string;
	relationship: string;
	phone_number: string;
	email?: string;
	address?: string;
};
