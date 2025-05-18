import { Router } from "express";
import { authHandlers } from "./utils/auth";

const auth = Router();
// Auth routes
// NOTE: auth is handled by better-auth https://www.better-auth.com
// we don't have to write any controller and services for auth.
auth.all("/api/auth/{*any}", authHandlers);

const v1 = Router();
// Auth helpers
// Helpers for auth
// these are our custom auth routes.
// @TODO: create a route to check if a server has admin or not
v1.get("/api/ping", (req, res) => {
	res.status(200).json({
		message: "pong",
	});
});

export { v1 as v1Routes, auth as authRoutes };
