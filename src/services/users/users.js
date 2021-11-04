import express from "express";
import models from "../../db/models/index.js";
const { Products, Reviews, Categories, Users } = models;
const router = express.Router();



// 4b5e2bf6-9098-474c-8b3a-a048b1ca2713

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const user = await Users.findAll({
        include: { model: Reviews },
      });
      res.send(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Users.create(req.body);
      res.send(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  });



router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const User = await User.findByPk(req.params.id);
      res.send(User);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      delete req.body.email;
      delete req.body.id;
      const newUser = await User.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
        }
      );
      res.send(newUser[1][0]);
    } catch (error) {
      console.log(error);
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const rows = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ rows });
    } catch (error) {
      console.log(error);
      next(error);
    }
  });

export default router