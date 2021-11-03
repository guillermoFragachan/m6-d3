import express from 'express'
import models from "../../db/models/index.js"
const { Products, Reviews } = models



const router = express.Router()


router.
route("/")
.get(async (req, res) => {
    const products = await Products.findAll({include:Reviews})
    res.send(products)
})
.post(async (req, res) => {
    const product = await Products.create(req.body)
    res.send(product)
})



export default router