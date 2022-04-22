import express from "express"
import product from "../../../db/models/product.js"
import category from "../../../db/models/category.js"
import review from "../../../db/models/review.js"

const productsRouter = express.Router()

// includes should have any "id" ??
productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await product.findAll({ include: category, review })
    res.status(200).send(products)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

productsRouter.get("/:productId", async (req, res, next) => {
  try {
    const data = await product.findByPk(req.params.productId)
    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

productsRouter.post("/", async (req, res, next) => {
  try {
    const newProduct = await product.create(req.body)
    res.status(201).send(newProduct)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

productsRouter.put("/:productId", async (req, res, next) => {
  try {
    const updatedProduct = await product.update(req.body, {
      where: { id: req.params.productId },
    })
    res.status(201).send(updatedProduct)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

productsRouter.delete("/:productId", async (req, res, next) => {
  try {
    await product.destroy({ where: product.id === req.params.productId })

    res.status(200).send("Destroyed,this product is just dust in the wind")
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default productsRouter

/* Model Quering

Implement search on products by  name, description
Implement filters by price range
order products by price in asc/desc order
 

The persistence must be granted via Postgres */
