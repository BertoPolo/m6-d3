import express from "express"
import review from "../../../db/models/review.js"
import product from "../../../db/models/product.js"

const reviewsRouter = express.Router()

//GET /reviews => returns the list of reviews including product
reviewsRouter.get("/", async (req, res, next) => {
  try {
    const fullInfo = await review.findAll({
      include: product,
    })

    res.status(200).send(fullInfo)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

//GET /reviews /123 => returns a single review with product
reviewsRouter.get("/reviewId", async (req, res, next) => {
  try {
    const fullInfo = await review.findOne({ where: { id: req.params.reviewid } }, { include: product })

    res.status(200).send(fullInfo)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// POST /reviews => create a new review
reviewsRouter.post("/", async (req, res, next) => {
  try {
    const newReview = await review.create(req.body)
    res.status(201).send(newReview.id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

//PUT /reviews /123 => edit the review with the given id
reviewsRouter.put("/reviewId", async (req, res, next) => {
  try {
    const updatedReview = await review.update(req.body, {
      where: { id: req.params.reviewId },
    })
    res.status(200).send(updatedReview)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

// DELETE /reviews /123 => delete the review with the given id
reviewsRouter.delete("/reviewId", async (req, res, next) => {
  try {
    await review.destroy({
      where: {
        id: req.params.reviewId,
      },
    })
    res.status(200).send("Deleted")
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default reviewsRouter

/* Review

 

Model Quering

Implement search on products by  name, description
Implement filters by price range
order products by price in asc/desc order
 

The persistence must be granted via Postgres
 */
