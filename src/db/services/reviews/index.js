import express from "express"

const reviewsRouter = express.Router()

reviewsRouter.get("/", async (req, res, next) => {
  try {
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})

reviewsRouter.get("/reviewId", async (req, res, next) => {
  try {
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})

reviewsRouter.post("/", async (req, res, next) => {
  try {
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})

reviewsRouter.put("/reviewId", async (req, res, next) => {
  try {
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})

reviewsRouter.delete("/reviewId", async (req, res, next) => {
  try {
    res.status(200).send()
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default reviewsRouter
