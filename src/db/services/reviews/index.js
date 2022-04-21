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

/* Review
The review should contain the following information:

{
	    "id": 1,
	    "text": TEXT,
	    "username:STRING,
	    "productId":FOREIGN KEY products
      
}
 
 
Routes
GET /reviews => returns the list of reviews including product
GET /reviews /123 => returns a single review with product
POST /reviews => create a new review
PUT /reviews /123 => edit the review with the given id
DELETE /reviews /123 => delete the review with the given id
 

Model Quering

Implement search on products by  name, description
Implement filters by price range
order products by price in asc/desc order
 

The persistence must be granted via Postgres
 */
