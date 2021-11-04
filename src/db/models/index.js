import Products from "./Products.js"
import Reviews from "./Reviews.js"
import Users from "./Users.js"
import Categories from './Categories.js'
import ProductCategory from './ProductCategory.js'
import UserReviews from './UserReviews.js'



Products.hasMany(Reviews, {onDelete: 'CASCADE'})
Reviews.belongsTo(Products, {onDelete: 'CASCADE'})


Products.belongsToMany(Categories, {
    through: { model: ProductCategory, unique: false },
  });
  Categories.belongsToMany(Products, {
    through: { model: ProductCategory, unique: false },
  });


  Users.belongsToMany(Reviews, {
    through: { model: UserReviews, unique: false },
  })

  Reviews.belongsToMany(Users, {
    through: { model: UserReviews, unique: false },
  })
export default { Products, Reviews, Categories, Users, ProductCategory }