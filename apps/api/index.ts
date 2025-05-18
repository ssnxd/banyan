import app from './src/app'
import { createAdmin } from './src/services/admin'
import { env } from './src/utils/env'

// Create our admin user
await createAdmin({
	email: env.ADMIN_EMAIL,
	password: env.ADMIN_PASSWORD,
	name: env.ADMIN_NAME
}).catch(() => {
	console.log(`Failed to create a user for ${env.ADMIN_EMAIL}`)
	process.exit(1)
}).finally(() => {
	console.log(`Amdin user ${env.ADMIN_EMAIL}`)
})


app.listen(env.PORT, () => {
	console.log(`Server is running on PORT:${env.PORT}`)
})
