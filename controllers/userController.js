const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// // Aggregate function to get the number of students overall
// const headCount = async () =>
//   User.aggregate()
//     .count('userCount')
//     .then((numberOfUsers) => numberOfUsers);

// // Aggregate function for getting the overall grade using $avg
// const grade = async (userId) =>
//   Student.aggregate([
//     // only include the given student by using $match
//     { $match: { _id: ObjectId(userId) } },
//     {
//       $unwind: '$assignments',
//     },
//     {
//       $group: {
//         _id: ObjectId(userId),
//         overallGrade: { $avg: '$assignments.score' },
//       },
//     },
//   ]);

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then(async (users) => {
        const userObj = {
          users,
          headCount: await headCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
            user,
            post: await post(req.params.userId),
          })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
 // Update a thought
 updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((userData) =>
      !userData
        ? res.status(404).json({ message: 'No user with this id!' })
        : res.json(userData)
    )
    .catch((err) => res.status(500).json(err));
},

  // Delete a user and remove them from the thought
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.findOneAndUpdate(
            { users: req.params.userId },
            { $pull: { user: req.params.userId } },
            { new: true }
          )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
            message: 'User deleted, but no thoughts found',
          })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

// Add a reaction to a user
createFriend(req, res) {
  console.log('You are adding a friend');
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friend: req.body } },
    { runValidators: true, new: true }
  )
    .then((userData) =>
      !userData
        ? res
          .status(404)
          .json({ message: 'No User/Friend found' })
        : res.json(userData)
    )
    .catch((err) => res.status(500).json(err));
},
// Remove reaction from a user NEEDS WORK 
deleteFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friend: { friendId: req.params.userId } } },
    { runValidators: true, new: true }
  )
    .then((UserData) =>
      !userData
        ? res
          .status(404)
          .json({ message: 'No friend found with that user' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},
  };