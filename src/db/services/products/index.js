import express from "express"
import product from "../../../db/models/product.js"

const productsRouter = express.Router()

productsRouter.get("/", async (req, res, next) => {
  try {
    const products = await productsRouter.findAll()
    res.status(200).send(products)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

productsRouter.get("/productId", async (req, res, next) => {
  try {
    const product = await productsRouter.findByPk(req.params.productId)
    res.status(200).send()
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

productsRouter.put("/productId", async (req, res, next) => {
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

productsRouter.delete("/productId", async (req, res, next) => {
  try {
    const productToDelete = await product.destroy({ where: req.params.productId })
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default productsRouter