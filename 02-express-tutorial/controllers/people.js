const { people } = require('../data')

const addPerson = (req, res) => {
    // const { name } = req.body
    const newPerson = req.body
    console.log("adding person: ", newPerson)
    people.push(newPerson)
    res.status(200).json({ success: true, data: newPerson })
}

const getPeople = (req, res) => {
    // console.log("getting people: ", people)
    res.status(200).json({ success: true, data: people })
  }

const getPersonById = (req, res) => {
    const personId = parseInt(req.params.id)
    const person = people.find(person => person.id === personId)

    if (person) {
        res.status(200).json({ sucess: true, data: person })
    } else { 
        res.status(404).json( { sucess: false, message: "Person not found"})
    }
    }

const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id)
    const updatedPeople = people.filter(person => person.id !== personId)

    if(updatedPeople.length < people.length) {
        res.status(200).json({ sucess: true, message: "Person deleted successfully"})
    } else {
        res.status(404).json({ sucess: false, message: "Person not found"})
    }
}

module.exports = { addPerson, getPeople, getPersonById, deletePerson }