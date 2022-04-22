import { Sequelize } from "sequelize"

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
})

export const testDB = async () => {
  try {
    await sequelize.authenticate()
    console.log("DB Connection Successful")
  } catch (error) {
    console.log("DB Connection Failed: " + error)
  }
}

export default sequelize
