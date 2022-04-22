import { DataTypes } from "sequelize"
import sequelize from "../index.js"

const category = sequelize.define("category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.STRING,
  },
})

category.sync({ alter: true })

export default category
