const router = require('express').Router();
const controllers = require('../../controllers/adminController');
const verifyAuth = require('../../middleware/authMiddleware');

router.get('/admin', controllers.get_login);
router.post('/register', controllers.post_register);
router.post('/admin', controllers.post_login);
router.get('/dashboard', verifyAuth, controllers.get_dashboard);

module.exports = router;