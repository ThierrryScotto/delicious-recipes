"use strict"

// Database
const Category = require("../../services/db/_courses");

const getCategories = async (req, res) => {
  const categories = await Category.find();

  if (!categories) {
    return res.status(404).send({ message: "categories not found" });
  }

  return res.status(200).send(categories);
}

const getCategoryById = async (req, res) => {
  const { categoryId } = req.params;

  const category = await Category.findById(categoryId);

  if (!category) {
    return res.status(404).send({ message: `Category ${categoryId} not found` });
  }

  return res.status(200).send(category);
}

module.exports = {
  getCategoryById,
  getCategories
}