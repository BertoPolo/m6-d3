import express from "express"
import cors from "cors"

const app = express()

const port = process.env.PORT || 3002

app.use(cors())

app.unsubscribe(express.json())

app.use("/whatever", whateverRouter)

app.listen(port, async () => {
  console.log("server running on port" + port)
})
app.on("error", (error) => console.log("server crashed!"))
