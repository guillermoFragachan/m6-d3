import express from 'express'
import models from "../../db/models/index.js"
const { Reviews } = models



const router = express.Router()


router.
route("/")
.get(async (req, res) => {
    const reviews = await Reviews.findAll()
    res.send(reviews)
})
.post(async (req, res) => {
    const reviews = await Reviews.create(req.body)
    res.send(reviews)
})



export default router