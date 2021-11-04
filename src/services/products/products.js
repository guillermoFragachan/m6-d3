import express from 'express'
import models from "../../db/models/index.js"
const { Products, Reviews, Categories, Users } = models



const router = express.Router()


router.
route("/")
.get(async (req, res) => {
    const products = await Products.findAll({include:[{ model: Categories, through: { attributes: [] } }]})
    res.send(products)
})
.post(async (req, res) => {
    const product = await Products.create(req.body)
    res.send(product)
})

router
.route("/name/:query")
.get(async (req, res) => {
    const product = await Products.findOne({
        include: Reviews,
        where: {name: req.params.query}})
    res.send(product)
})

router
.route("/price/:query")
.get(async (req, res) => {
    const product = await Products.findOne({
        include: Reviews,
        where: {price: req.params.query}})
    res.send(product)
})

router.
route("/:id")
.get(async (req, res) => {
    const product = await Products.findByPk(req.params.id, {include:Reviews})
    res.send(product)
})
.put(async (req, res) => {
    const product = await Products.update(req.body, {where: {id: req.params.id}})
    res.send(product)
})
.delete(async (req, res) => {
    const product = await Products.destroy({where: {id: req.params.id}})
    res.send(product)
})


export default router