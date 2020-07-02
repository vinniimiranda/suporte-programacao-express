const router = require('express').Router()

let users = [
  { id: 1, name: "Flavio" },
  { id: 2, name: "Mateus" },
  { id: 3, name: "Rafael" },
  { id: 4, name: "Juserio" },
]

router.post('/', (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.json({})
  }

  users.push({ ...body, id: users.length + 1 })

  return res.json(users)
})

router.get('/', function (req, res) {
  return res.json(users)
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  const user = users.find(function (currentUser) {
    return currentUser.id == id
  })
  return res.json(user)
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body;

  const user = users.find(function (currentUser) {
    return currentUser.id == id
  })

  users = users.filter(currentUser => currentUser.id != id)
  users.push({ ...user, ...body })

  return res.json(users)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  users = users.filter(currentUser => currentUser.id != id)

  return res.json(users)
})

module.exports = router