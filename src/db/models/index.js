import Products from "./Products.js"
import Reviews from "./Reviews.js"



Products.hasMany(Reviews, {onDelete: 'CASCADE'})




export default { Products, Reviews}