import express from "express"
// import category from "../../../db/models/category.js"

const categoriesRouter = express.Router()

categoriesRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// categoriesRouter.get("/", async (req, res, next) => {
//   try {
//     res.status(200).send()
//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// })

// categoriesRouter.get("/", async (req, res, next) => {
//   try {
//     res.status(200).send()
//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// })

export default categoriesRouter
