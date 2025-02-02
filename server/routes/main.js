const router = require('express').Router();
const controllers = require('../../controllers/blogControllers');

router.get('', controllers.get_blog);

module.exports = router;