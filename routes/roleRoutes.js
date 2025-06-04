const express = require('express');
const router = express.Router();
const { agregarRol, obtenerRoles } = require('../controllers/roleController');

router.post('/agregarRol', agregarRol);
router.get('/roles', obtenerRoles);

module.exports = router;