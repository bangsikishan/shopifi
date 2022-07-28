const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'you are at home' });
});

router.post('/register', (req, res) => {
    res.status(200).json({ message: 'register' });

});

router.post('/login', (req, res) => {
    res.status(200).json({ message: 'login' });

});

router.post('/contact', (req, res) => {
    res.status(200).json({ message: 'contact' });
});


module.exports = router;