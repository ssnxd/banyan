import express from 'express'
import { authRoutes, v1Routes } from './routes'

// Initialize express
const app = express()

// Initialize routes
app.use(authRoutes)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(v1Routes)

export default app
