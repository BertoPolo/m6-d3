import express from "express"
import category from "../../../db/models/category.js"

const categoriesRouter = express.Router()

categoriesRouter.get("/", async (req, res, next) => {
  try {
    const categories = await category.findAll()
    res.status(200).send(categories)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

categoriesRouter.get("/categoryName", async (req, res, next) => {
  try {
    const data = await category.findOne({ where: { category_name: req.params.categoryName } })

    res.status(200).send(data)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

categoriesRouter.post("/", async (req, res, next) => {
  try {
    const newCategory = await category.create(req.body)

    res.status(201).send(newCategory.id)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

categoriesRouter.put("/categoryName", async (req, res, next) => {
  try {
    const updatedCategory = await category.update(req.body, {
      where: {
        id: req.params.categoryName,
      },
    })

    res.status(201).send(updatedCategory)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

categoriesRouter.delete("/categoryName", async (req, res, next) => {
  try {
    await category.destroy({ where: { category_name: req.params.categoryName } })

    res.status(200).send("category destroyed")
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default categoriesRouter
