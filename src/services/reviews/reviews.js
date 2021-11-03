import express from 'express'
import models from "../../db/models/index.js"
const { Reviews, Products } = models



const router = express.Router()


router.
route("/")
.get(async (req, res) => {
    const reviews = await Reviews.findAll({include:Products})
    res.send(reviews)
})
.post(async (req, res) => {
    const reviews = await Reviews.create(req.body)
    res.send(reviews)
})

router
.route("/:id")
.get(async (req, res) => {
    const reviews = await Reviews.findByPk(req.params.id)
    res.send(reviews)
})
.put(async (req, res) => {
    const reviews = await Reviews.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.send(reviews)
})
.delete(async (req, res) => {
    const reviews = await Reviews.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send(reviews)
})


export default router