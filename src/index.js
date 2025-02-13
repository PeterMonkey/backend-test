import express from 'express'
import connectionDb from './config/database.js'
import authRoute from "./routes/auth.routes.js"
import projectRoute from './routes/project.route.js'

const app = express()

app.use(express.json())

connectionDb()

app.use('/auth', authRoute)
app.use('/project', projectRoute)

app.listen('3000', () => console.log('Server Up on port 3000'))