const router = require('express').Router();
//from mini project: 
const {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require('../../controllers/userController');

//from mini project: /api/students
router.route('/').get(getAllUsers).post(createUser);

//from mini project: /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser).post(updateUser);

//from mini project:// /api/students/:studentId/assignments
router.route('/:userId/reactions').post(addreactions);

// /api/students/:studentId/assignments/:assignmentId
// router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;