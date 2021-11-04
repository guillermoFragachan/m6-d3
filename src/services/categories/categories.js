import express from "express";
import models from "../../db/models/index.js";
const { Products, Reviews, Categories, Users } = models;
const router = express.Router();

router.route("/").get(async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.send(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.route("/").post(async (req, res, next) => {
  try {
    const data  = req.body;
    const categories = await Categories.create(data);
    res.send(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;