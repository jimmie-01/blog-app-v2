const router = require('express').Router();
const controllers = require('../../controllers/blogControllers');
const verifyAuth = require('../../middleware/authMiddleware');

router.get('', controllers.get_blog);
router.get('/about', controllers.get_about);
router.get('/post/:id', verifyAuth, controllers.get_post);
router.get('/dashboard', verifyAuth, controllers.get_dashboard);
router.post('/search', controllers.post_search);

module.exports = router;