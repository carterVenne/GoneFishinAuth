const router = require("express").Router();
const commentsController = require('../../controllers/storyController');


router.route("/")
    .get(storyController.findAll)
    .post(storyController.create);



router
    .route("/:id")
    .get(storyController.findById)
    .put(storyController.update)
    .delete(storyController.remove);


module.exports = router;