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
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// router.route('/:userId').get(getSingleUser).post(addreactions);

// /api/students/:studentId/assignments/:assignmentId
router.route("/:userId/friends/:friendId").post(createFriend).delete(deleteFriend);

module.exports = router;