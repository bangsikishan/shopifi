const { Router } = require('express');
const {register, login} = require('../controllers/UserController');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'you are at home' });
});

router.post('/register', register);

router.post('/login', login);

router.post('/contact', (req, res) => {
    res.status(200).json({ message: 'contact' });
});


module.exports = router;