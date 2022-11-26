const express = require('express')
const router = express.Router()
const userController = require('../controllers/blogController')

router.get('/', userController.getUser)

router.get('/:id', userController.getById)

router.post('/', userController.postUser)

router.put('/:id', userController.updatUser)

router.delete('/:id', userController.removeUser)

module.exports = router
