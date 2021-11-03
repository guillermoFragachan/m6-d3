import Products from "./Products.js"
import Reviews from "./Reviews.js"



Products.hasMany(Reviews, {onDelete: 'CASCADE'})
Reviews.belongsTo(Products, {onDelete: 'CASCADE'})




export default { Products, Reviews}