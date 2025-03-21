const router = require('express').Router();
const controllers = require('../../controllers/dashBoardController');
const verifyUser = require('../../middleware/authMiddleware');

router.get('/dashboard', controllers.get_dashboard);
router.get('/add-post', controllers.get_add_post);
router.post('/add-post', controllers.post_add_post);
router.get('/edit-post/:id', controllers.get_edit_post);
router.put('/edit-post/:id', controllers.put_edit_post);
router.delete('/delete-post/:id', controllers.delete_post);


module.exports = router;