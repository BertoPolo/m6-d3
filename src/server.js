import express from "express"
import cors from "cors"
import { testDB } from "./db/index.js"
import productsRouter from "./db/services/products/index.js"
import reviewsRouter from "./db/services/reviews/index.js"
import usersRouter from "./db/services/users/index.js"
import categoriesRouter from "./db/services/categories/index.js"

const server = express()

server.use(express.json())
server.use(cors())

const port = process.env.PORT || 3002

server.use("/products", productsRouter)
server.use("/reviews", reviewsRouter)
server.use("/users", usersRouter)
server.use("/categories", categoriesRouter)

const initialize = async () => {
  try {
    server.listen(port, async () => {
      console.log("server running on port " + port)
      await testDB()
    })

    server.on("error", (error) => console.log("server crashed!"))
  } catch (error) {
    console.log(error)
  }
}

initialize()
