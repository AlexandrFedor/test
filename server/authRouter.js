const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require("express-validator")
const authMiddleware = require('./middleware/authMIddleware')
const roleMiddleware = require('./middleware/roleMiddleware')
const fileController = require('./controllers/fileController')


router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
] , controller.registration)
router.post('/avatar', authMiddleware, fileController.uploadAvatar)
router.delete('/avatar', authMiddleware, fileController.deleteAvatar)
router.post('/login',  controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)
router.get('/auth',authMiddleware, controller.auth)

module.exports = router