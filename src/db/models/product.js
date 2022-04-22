import { DataTypes } from "sequelize"
import sequelize from "../index.js"

const product = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  image: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.FLOAT,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
})

product.sync()

export default product
