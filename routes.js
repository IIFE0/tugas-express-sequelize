const express = require("express")
const router = express.Router()
const cors = require("cors")

router.use(cors({ origin: `http://localhost:3000` }))

router.use(function timeLog(req, res, next) {
  console.log({
    method: req.method,
    url: req.url,
    time: new Date(),
  })
  next()
})

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const db = require("./app/models")

db.sequelize
  .sync()
  .then(() => {
    console.log("synced db.")
  })
  .catch((err) => {
    console.log("error syncing db:", err.message)
  })

const biodataController = require("./app/controllers/biodataController.js")

router.post("/", (req, res) => {
  biodataController.create(req, res)
})
router.get("/", (req, res) => {
  biodataController.findAll(req, res)
})
router.get("/:id", (req, res) => {
  biodataController.findOne(req, res)
})
router.put("/:id", (req, res) => {
  biodataController.update(req, res)
})
router.delete("/:id", (req, res) => {
  biodataController.deleteById(req, res)
})
module.exports = router
