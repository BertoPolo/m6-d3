import express from "express"
import cors from "cors"
import { testDB } from "./db/index.js"
import productsRouter from "./db/services/products/index.js"
import reviewsRouter from "./db/services/reviews/index.js"

const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 3002

app.use("/products", productsRouter)
app.use("/reviews", reviewsRouter)

const initialize = async () => {
  try {
    app.listen(port, async () => {
      console.log("server running on port " + port)
      await testDB()
    })

    app.on("error", (error) => console.log("server crashed!"))
  } catch (error) {
    console.log(error)
  }
}

initialize()
