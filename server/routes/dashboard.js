const router = require('express').Router();
const controllers = require('../../controllers/dashBoardController');
const verifyUser = require('../../middleware/authMiddleware');

router.get('/dashboard', controllers.get_dashboard);



module.exports = router;