const router = require('express').Router();
//from mini project: 
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
//   addAssignment,
//   removeAssignment,
} = require('../../controllers/userController');

//from mini project: /api/students
router.route('/').get(getUsers).post(createUser);

//from mini project: /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

//from mini project:// /api/students/:studentId/assignments
// router.route('/:userId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;