export {};

declare global {
	interface CustomJwtSessionClaims {
		id: string;
		email: string;
		roles: string[];
		full_name: string;
		image_url: string;
		first_name: string;
		last_name: string;
		public_metadata: unknown;
		user_name: string;
	}
}
