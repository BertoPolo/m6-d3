import { Sequalize } from "sequalize"

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env

const sequalize = new Sequalize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
})

export const testDB = async () => {
  try {
    await sequalize.authenticate()
    console.log("db connection succeful")
  } catch (error) {
    console.log("db conection failed: " + error)
  }
}
