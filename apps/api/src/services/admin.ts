// Admin service
import { auth } from "../utils/auth";
import { db } from "../utils/database";

// Creates a new admin
// this is only allowed to be called with the .env values
export async function createAdmin({
	email,
	password,
	name,
}: {
	email: string;
	password: string;
	name: string;
}) {
	// check if a user already exists for the .env user
	const user = await db
		.selectFrom("user")
		.where("email", "=", email)
		.selectAll()
		.executeTakeFirst();

	if (user) {
		console.log(`Admin already exists ${email}`);
		return;
	}

	await auth.api.signUpEmail({
		body: {
			email,
			password,
			name,
		},
	});

	// Update user role to admin
	await db
		.updateTable("user")
		.set({
			role: "admin",
		})
		.where("email", "=", email)
		.execute();
}
