import product from "./product.js"
import review from "./review.js"
import category from "./category.js"
// import user from "./user.js"

product.hasMany(review, { onDelete: "CASCADE" })
review.belongsTo(product, { onDelete: "CASCADE" })

product.hasMany(category, { onDelete: "CASCADE" })
category.belongsToMany(product, { onDelete: "CASCADE" })
