import sequelize from "../index.js";
import sequel from "sequelize";

const { DataTypes } = sequel;


const Products = sequelize.define('Products', 
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

console.log('Products executed');

export default Products;