const express = require('express');
const router = express.Router();
const { agregarUsuario, obtenerUsuarios } = require('../controllers/userController');

router.post('/agregarUsuario', agregarUsuario);
router.get('/usuarios', obtenerUsuarios);

module.exports = router;