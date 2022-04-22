import express from "express"
import user from "../../../db/models/user.js"

const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await usersRouter.findAll()
    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// usersRouter.get("/", async (req, res, next) => {
//   try {
//     res.status(200).send()
//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// })

// usersRouter.get("/", async (req, res, next) => {
//   try {
//     res.status(200).send()
//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// })

export default usersRouter
