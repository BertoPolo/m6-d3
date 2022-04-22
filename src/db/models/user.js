import { DataTypes } from "sequelize"
import sequelize from "../index.js"

const user = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
})

user.sync()

export default user
