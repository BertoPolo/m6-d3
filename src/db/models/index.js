import product from "./product.js"
import review from "./review.js"
import category from "./category.js"
import user from "./user.js"

product.hasMany(review, { onDelete: "CASCADE" })
review.belongsTo(product, { onDelete: "CASCADE" })

// Implement associations between Category and Product as many-to-many.
product.belongsToMany(category, { onDelete: "CASCADE" })
category.belongsToMany(product, { onDelete: "CASCADE" })

// Implement associations between User and Review as one-to-many.

user.hasMany(review, { onDelete: "CASCADE" })
review.belongsTo(user, { onDelete: "CASCADE" })
