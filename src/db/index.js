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
    // await sequelize.sync({ force: true })
    // console.log("All models were synchronized successfully.")
  } catch (error) {
    console.log("DB Connection Failed: " + error)
  }
}

export default sequelize
