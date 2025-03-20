const router = require('express').Router();
const controllers = require('../../controllers/dashBoardController');
const verifyUser = require('../../middleware/authMiddleware');

router.get('/dashboard', controllers.get_dashboard);
router.get('/add-post', controllers.get_add_post);



module.exports = router;