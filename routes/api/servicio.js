const router = require('express').Router();
const { Servicio } = require('../../db');

router.get('/', async (req, res) => {
    try {
        const servicios = await Servicio.findAll({logging: false});

        if (servicios.length === 0) {
            return res.status(404).json({ message: 'No hay servicios disponibles' });
        }

        res.status(200).json(servicios);
    } catch (error) {
        console.error('Error al obtener los servicios:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

module.exports = router;
