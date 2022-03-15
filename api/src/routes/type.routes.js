const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
    res.send("estoy en /type")
});

module.exports = router;