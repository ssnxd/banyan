import { betterAuth } from "better-auth";
import { toNodeHandler } from "better-auth/node";
import { dialect } from "./database";

export const auth = betterAuth({
	database: {
		dialect,
		type: "sqlite",
	},
	emailAndPassword: {
		enabled: true,
	},
	user: {
		additionalFields: {
			role: {
				type: "string",
				required: true,
				defaultValue: "student",
				input: false,
			},
		},
	},
});

export const authHandlers = toNodeHandler(auth);
