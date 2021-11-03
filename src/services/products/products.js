import express from 'express'
import models from "../../db/models/index.js"
const { Products } = models



const router = express.Router()


router.
route("/")
.get(async (req, res) => {
    const products = await Products.findAll()
    res.send(products)
})



export default router