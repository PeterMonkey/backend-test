import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import connectionDb from './config/database.js'
import authRoute from "./routes/auth.routes.js"
import projectRoute from './routes/project.route.js'
import movementsRoute from './routes/movements.route.js'
import lineRoutes from './routes/line.routes.js'

const PORT = process.env.PORT
const app = express()

app.use(express.json())

connectionDb()

app.use('/auth', authRoute)
app.use('/project', projectRoute)
app.use('/movement', movementsRoute)
app.use('/line', lineRoutes)

app.listen(PORT, () => console.log(`Server Up on port ${PORT}`))