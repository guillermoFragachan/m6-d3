import sequelize from "../index.js";
import sequel from "sequelize";

const { DataTypes } = sequel;


const Reviews = sequelize.define('Reviews', 
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    commnet: {
        type: DataTypes.STRING,
        allowNull: false

    
    }
})

console.log('Reviews executed');

export default Reviews;