const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/updatePassword', userController.updatePasswordByEmail)
router.post('/sendEmail', userController.sendEmail)
router.post('/login', userController.login)

module.exports = router;
