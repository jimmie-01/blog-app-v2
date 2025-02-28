const router = require('express').Router();
const controllers = require('../../controllers/blogControllers');

router.get('', controllers.get_blog);
router.get('/about', controllers.get_about);
router.get('/post/:id', controllers.get_post);
router.post('/search', controllers.post_search);

module.exports = router;