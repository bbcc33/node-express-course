const express = require("express")
const router = express.Router()
const { addPerson, getPeople, getPersonById, deletePerson } = require("../controllers/people.js")

router.get("/", getPeople)

router.post("/", addPerson)

router.get("/:id", getPersonById)

router.delete("/:id", deletePerson)

module.exports = router