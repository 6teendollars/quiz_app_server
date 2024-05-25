import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'
const app = express()

//connection file
import connect from './database/conn.js'
import { error } from 'console'

//middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config();

//aplication port 
const port = process.env.PORT || 8080;

//
connect()
//routes

app.use('/api',router)

app.get('/', (req,res)=>{
	try {
		res.json("Get Request")
	} catch (error) {
		res.json(error)
	}
})

//start serv only when we have valid conn
connect().then(()=>{
try {
	app.listen(port, ()=>{
		console.log(`server connected to ${port}`)
	})
} catch (error) {
	console.log('Cannot connect to the server');
}
}).catch(error => {
	console.log('Invalid Database Conn');
})

