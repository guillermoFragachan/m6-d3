import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"

import ProductsRouter from "./services/products/products.js"
import ReviewsRouter from "./services/reviews/reviews.js"

import CategoryRouter from "./services/categories/categories.js"
import UsersRouter from "./services/users/users.js"


import { testconnection, connectDB } from "./db/index.js"; //1.


const server = express()


server.use(cors())


server.use(express.json())
server.use("/products", ProductsRouter)
server.use("/reviews", ReviewsRouter)
server.use("/categories", CategoryRouter)
server.use("/users", UsersRouter)



console.table(listEndpoints(server))


server.listen(process.env.PORT, async()=>{
    console.log(`Server is running on ${process.env.PORT}`)
    await testconnection()
    await connectDB()
})