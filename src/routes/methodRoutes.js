const express = require('express')
const methodController = require('../controller/methodController')
const router = express.Router()

router.get('/', methodController.show)
router.post('/', methodController.create)
router.put('/like/:id', methodController.modify)
router.delete('/:id', methodController.erase)

module.exports = router