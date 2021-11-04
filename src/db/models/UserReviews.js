import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const UserReviews = sequelize.define(
  "UserReviews",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

export default UserReviews;