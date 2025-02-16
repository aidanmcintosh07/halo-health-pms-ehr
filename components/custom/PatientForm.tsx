"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { UploadButton } from "@/utils/uploadthing";
import { useUser } from "@clerk/nextjs";

const formSchema = z.object({
	patient: z.object({
		first_name: z.string().min(1, "First name is required"),
		middle_name: z.string().optional(),
		last_name: z.string().min(1, "Last name is required"),
		date_of_birth: z.string().refine((val) => !isNaN(Date.parse(val)), {
			message: "Invalid date format",
		}),
		gender: z
			.enum(["Male", "Female", "Other"], {
				required_error: "Gender is required",
			})
			.nullable(),
		nationality: z.string().min(1, "Nationality is required"),
		ethnicity: z.string().optional(),
		place_of_birth: z.string().min(1, "Place of birth is required"),
		id_type: z
			.enum(["Passport", "Driver's License", "National Id"], {
				required_error: "ID type is required",
			})
			.nullable(),
		government_id: z.string().url("Invalid URL format"),
		contact_phone: z.string().optional(),
		contact_email: z.string().email("Invalid email format").optional(),
		address_line1: z.string().min(1, "Address is required"),
		address_line2: z.string().optional(),
		city: z.string().min(1, "City is required"),
		parish: z.string().min(1, "Parish is required"),
		postal_code: z.string().optional(),
		country: z.string().min(1, "Country is required"),
	}),

	medicalRecords: z
		.array(
			z.object({
				visit_date: z
					.string()
					.refine((val) => !isNaN(Date.parse(val)), {
						message: "Invalid date format",
					})
					.optional(),
				provider: z.string().min(1, "Provider is required"),
				visit_reason: z.string().min(1, "Visit reason is required"),
				diagnosis: z.string().optional(),
				treatment: z.string().optional(),
				medications: z.string().optional(),
				allergies: z.string().optional(),
				vaccination_status: z
					.enum(["Vaccinated", "Not Vaccinated", "N/A"], {
						required_error: "Vaccination status is required",
					})
					.nullable(),
				notes: z.string().optional(),
			})
		)
		.optional(),

	educationHistory: z
		.array(
			z.object({
				institution_names: z.string().min(1, "Institution name is required"),
				qualification: z.string().min(1, "Qualification is required"),
				start_date: z.string().refine((val) => !isNaN(Date.parse(val)), {
					message: "Invalid date format",
				}),
				end_date: z.string().optional(),
				notes: z.string().optional(),
			})
		)
		.optional(),

	employmentHistory: z
		.array(
			z.object({
				employer_name: z.string().min(1, "Employer name is required"),
				job_title: z.string().min(1, "Job title is required"),
				start_date: z
					.string()
					.refine((val) => !isNaN(Date.parse(val)), {
						message: "Invalid date format",
					})
					.optional(),
				end_date: z.string().optional(),
				employment_status: z.string().min(1, "Employment status is required"),
				notes: z.string().optional(),
			})
		)
		.optional(),
});

function PatientForm() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { user } = useUser();

	const { toast } = useToast();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			patient: {
				first_name: "",
				middle_name: "",
				last_name: "",
				date_of_birth: "",
				nationality: "",
				ethnicity: "",
				place_of_birth: "",
				gender: null,
				id_type: null,
				government_id: undefined,
				contact_phone: "",
				contact_email: "",
				address_line1: "",
				address_line2: "",
				city: "",
				parish: "",
				postal_code: "",
				country: "",
			},
			medicalRecords: [
				{
					visit_date: "",
					provider: "",
					visit_reason: "",
					diagnosis: "",
					treatment: "",
					medications: "",
					vaccination_status: null,
					allergies: "",
					notes: "",
				},
			],
			educationHistory: [
				{
					institution_names: "",
					qualification: "",
					start_date: "",
					end_date: "",
					notes: "",
				},
			],
			employmentHistory: [
				{
					employer_name: "",
					job_title: "",
					start_date: "",
					end_date: "",
					employment_status: "",
					notes: "",
				},
			],
		},
	});

	// console.log("Form errors: ", form.formState.errors);
	// console.log("Form values: ", form.getValues());

	// Field Arrays for dynamic sections
	const {
		fields: medicalFields,
		append: appendMedical,
		remove: removeMedical,
	} = useFieldArray({
		control: form.control,
		name: "medicalRecords",
	});

	const {
		fields: educationFields,
		append: appendEducation,
		remove: removeEducation,
	} = useFieldArray({
		control: form.control,
		name: "educationHistory",
	});

	const {
		fields: employmentFields,
		append: appendEmployment,
		remove: removeEmployment,
	} = useFieldArray({
		control: form.control,
		name: "employmentHistory",
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);
			await axios.post("/api/medical-record", values);
			router.refresh();
			form.reset(form.formState.defaultValues);
			toast({
				title: "Form submitted successfully",
				description: "Your medical record has been submitted successfully",
				duration: 3000,
				variant: "default",
			});
			router.push(`/medical-record/${user?.id}`);
		} catch (error) {
			console.error(error);
			toast({
				variant: "destructive",
				title: "Uh oh! Something went wrong.",
				description: "There was a problem with your request.",
				duration: 3000,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<Card className="shadow-lg">
					<CardContent className="p-8 space-y-8">
						{/* Patient Information Section */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Patient Information</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<FormField
									name="patient.first_name"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>First Name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.middle_name"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Middle Name (Optional)</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.last_name"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last Name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.date_of_birth"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Date of Birth</FormLabel>
											<FormControl>
												<Input type="date" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.gender"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Gender</FormLabel>
											<FormControl>
												<RadioGroup
													value={field.value!}
													onValueChange={field.onChange}
													className="flex space-x-4"
												>
													<RadioGroupItem value="Male" id="gender-male" />
													<Label htmlFor="gender-male">Male</Label>
													<RadioGroupItem value="Female" id="gender-female" />
													<Label htmlFor="gender-female">Female</Label>
													<RadioGroupItem value="Other" id="gender-other" />
													<Label htmlFor="gender-other">Other</Label>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.nationality"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nationality</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.ethnicity"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Ethnicity (Optional)</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.place_of_birth"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Place of Birth</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.id_type"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>ID Type</FormLabel>
											<FormControl>
												<RadioGroup
													value={field.value!}
													onValueChange={field.onChange}
													className="flex space-x-4"
												>
													<RadioGroupItem
														value="Passport"
														id="id_type-passport"
													/>
													<Label htmlFor="id_type-passport">Passport</Label>
													<RadioGroupItem
														value="Driver's License"
														id="id_type-driver_license"
													/>
													<Label htmlFor="id_type-driver_license">
														Driver&apos;s License
													</Label>
													<RadioGroupItem
														value="National Id"
														id="id_type-national_id"
													/>
													<Label htmlFor="id_type-national_id">
														National ID
													</Label>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.government_id"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Government ID (Upload Picture)</FormLabel>
											<FormControl>
												<UploadButton
													endpoint="imageUploader"
													onClientUploadComplete={(res) => {
														// console.log("Files: ", res);
														if (res && res.length > 0) {
															field.onChange(res[0].ufsUrl);
														}
														toast({
															description: "ID uploaded successfully",
														});
													}}
													onUploadError={(err: Error) => {
														console.error(err);
														toast({
															variant: "destructive",
															description: "ID upload failed",
														});
													}}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									name="patient.contact_phone"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Contact</FormLabel>
											<FormControl>
												<Input
													type="tel"
													placeholder="(xxx) xxx-xxxx"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.contact_email"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.address_line1"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address Line 1</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.address_line2"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address Line 2 (Optional)</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.city"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>City</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.parish"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Parish/Region</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.postal_code"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Postal Code (Optional)</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									name="patient.country"
									control={form.control}
									render={({ field }) => (
										<FormItem>
											<FormLabel>Country</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>

						<Separator className="my-6" />

						{/* Medical Records Section */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Medical Records</h2>
							{medicalFields.map((item, index) => (
								<div key={item.id} className="mb-6 border rounded-md p-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											name={`medicalRecords.${index}.visit_date`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Visit Date</FormLabel>
													<FormControl>
														<Input type="date" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.provider`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Provider</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.visit_reason`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Visit Reason</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.diagnosis`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Diagnosis (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.treatment`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Treatment (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.medications`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Medications (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.allergies`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Allergies (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.vaccination_status`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Vaccination Status</FormLabel>
													<FormControl>
														<RadioGroup
															value={field.value!}
															onValueChange={field.onChange}
															className="flex space-x-4"
														>
															<RadioGroupItem
																value="Vaccinated"
																id="vaccinated"
															/>
															<Label htmlFor="vaccinated">Vaccinated</Label>
															<RadioGroupItem
																value="Not Vaccinated"
																id="not-vaccinated"
															/>
															<Label htmlFor="not-vaccinated">
																Not Vaccinated
															</Label>
															<RadioGroupItem value="N/A" id="n/a" />
															<Label htmlFor="n/a">N/A</Label>
														</RadioGroup>
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`medicalRecords.${index}.notes`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Notes (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="mt-4 flex justify-end">
										<Button
											variant="destructive"
											onClick={() => removeMedical(index)}
										>
											Remove Medical Record
										</Button>
									</div>
								</div>
							))}
							<div className="flex justify-end">
								<Button
									onClick={() =>
										appendMedical({
											visit_date: "",
											provider: "",
											visit_reason: "",
											diagnosis: "",
											treatment: "",
											medications: "",
											allergies: "",
											vaccination_status: null,
											notes: "",
										})
									}
								>
									Add Medical Record
								</Button>
							</div>
						</div>

						<Separator className="my-6" />

						{/* Education History Section */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Education History</h2>
							{educationFields.map((item, index) => (
								<div key={item.id} className="mb-6 border rounded-md p-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											name={`educationHistory.${index}.institution_names`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Institution Name</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`educationHistory.${index}.qualification`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Qualification</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`educationHistory.${index}.start_date`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Start Date</FormLabel>
													<FormControl>
														<Input type="date" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`educationHistory.${index}.end_date`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>End Date (Optional)</FormLabel>
													<FormControl>
														<Input type="date" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`educationHistory.${index}.notes`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Notes (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="mt-4 flex justify-end">
										<Button
											variant="destructive"
											onClick={() => removeEducation(index)}
										>
											Remove Education Record
										</Button>
									</div>
								</div>
							))}
							<div className="flex justify-end">
								<Button
									onClick={() =>
										appendEducation({
											institution_names: "",
											qualification: "",
											start_date: "",
											end_date: "",
											notes: "",
										})
									}
								>
									Add Education Record
								</Button>
							</div>
						</div>

						<Separator className="my-6" />

						{/* Employment History Section */}
						<div>
							<h2 className="text-2xl font-bold mb-4">Employment History</h2>
							{employmentFields.map((item, index) => (
								<div key={item.id} className="mb-6 border rounded-md p-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<FormField
											name={`employmentHistory.${index}.employer_name`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Employer Name</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`employmentHistory.${index}.job_title`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Job Title</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`employmentHistory.${index}.start_date`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Start Date</FormLabel>
													<FormControl>
														<Input type="date" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`employmentHistory.${index}.end_date`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>End Date (Optional)</FormLabel>
													<FormControl>
														<Input type="date" {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`employmentHistory.${index}.employment_status`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Employment Status</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											name={`employmentHistory.${index}.notes`}
											control={form.control}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Notes (Optional)</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<div className="mt-4 flex justify-end">
										<Button
											variant="destructive"
											onClick={() => removeEmployment(index)}
										>
											Remove Employment Record
										</Button>
									</div>
								</div>
							))}
							<div className="flex justify-end">
								<Button
									onClick={() =>
										appendEmployment({
											employer_name: "",
											job_title: "",
											start_date: "",
											end_date: "",
											employment_status: "",
											notes: "",
										})
									}
								>
									Add Employment Record
								</Button>
							</div>
						</div>

						<Separator className="my-6" />

						<div className="flex justify-end mt-8">
							<Button type="submit" disabled={loading}>
								{loading ? "Submitting..." : "Submit"}
							</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</Form>
	);
}

export default PatientForm;
