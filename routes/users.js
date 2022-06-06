
const { Router } = require('express')
const { userGet, userDelete, userPut, userPost } = require('../controllers/users')

const router = Router()


// Rutas
router.get('/', userGet)

router.post('/', userPost)

router.put('/:id', userPut)

router.delete('/', userDelete)


module.exports = router