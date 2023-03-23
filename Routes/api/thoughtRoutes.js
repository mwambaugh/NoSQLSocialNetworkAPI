const router = require('express').Router();

//from mini project: 
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/courses: //from mini project: 
router.route('/').get(getAllThoughts).post(createThought);

// router.route('/').get(createReaction).put(deleteReaction);

// /api/courses/:courseId //from mini project: 
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

// router.route("/:thougthId/reactionId").delete(deleteReaction);
router.route("/:thougthId/reactions/:reactionId").delete(deleteReaction);

http: router.route;

module.exports = router;