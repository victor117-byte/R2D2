const express = require('express');
const router = express.Router();

// ruta para que el usuario pueda logea
router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la app');
});

router.get('/users/signup', (req, res) => {
    res.send('Formulario de autenticacion');
});
module.exports = router;