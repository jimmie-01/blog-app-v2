const router = require('express').Router();
const controllers = require('../../controllers/blogControllers');

router.get('', controllers.get_blog);
router.get('/about', controllers.get_about);

module.exports = router;