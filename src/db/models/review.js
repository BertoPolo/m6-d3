import { DataTypes } from "sequelize"
import sequelize from "../index.js"

const review = sequelize.define("review", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.TEXT,
  },
  productId: {
    type: DataTypes.TEXT,
  },
})

review.sync()

export default review
