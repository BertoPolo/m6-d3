import express from "express"
import user from "../../../db/models/user.js"

const usersRouter = express.Router()

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await user.findAll()
    res.status(200).send(users)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

//should id need some INCLUDE ?? here u only get an User
usersRouter.get("/userId", async (req, res, next) => {
  try {
    const data = await user.findByPk(req.params.userID)
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await user.create(req.body)

    res.status(200).send("user ID : " + newUser.id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.put("/:userId", async (req, res, next) => {
  try {
    const updatedUser = await user.update(req.body, { where: { id: req.params.userId } })

    res.status(201).send(updatedUser)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

usersRouter.delete("/:userId", async (req, res, next) => {
  try {
    await user.destroy({ where: { id: req.params.userId } })
    res.status(200).send("This User Is History Now!,MUAHAHAHA")
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default usersRouter
