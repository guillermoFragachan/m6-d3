import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"

import ProductsRouter from "./services/products/products.js"

import { testconnection, connectDB } from "./db/index.js"; //1.


const server = express()


server.use(cors())


server.use(express.json())
server.use("/products", ProductsRouter)


console.table(listEndpoints(server))


server.listen(process.env.PORT, async()=>{
    console.log(`Server is running on ${process.env.PORT}`)
    await testconnection()
    await connectDB()
})