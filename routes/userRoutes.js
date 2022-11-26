const express = require('express')
const router = express.Router()

// Importing user Controller file
const userController = require('../controllers/userController')

router.get('/', userController.getUser).post('/', userController.postUser)
router
  .get('/:id', userController.getById)
  .put('/:id', userController.updateUser)
  .delete('/:id', userController.removeUser)

module.exports = router
