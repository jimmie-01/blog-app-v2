const router = require('express').Router();
const controllers = require('../../controllers/adminController'); 

router.get('/admin', controllers.get_login);
router.post('/admin', controllers.post_login);
router.post('/register', controllers.post_register);

module.exports = router;