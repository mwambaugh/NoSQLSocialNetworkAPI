const router = require('express').Router();

//from mini project: 
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/courses: //from mini project: 
router.route('/').get(getThought).post(createThought);

// /api/courses/:courseId //from mini project: 
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;