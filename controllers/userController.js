// const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
    .select('-__v')
    .then((userData) => {
      console.log(userData);
      res.json(userData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  },
  // Get a single user
  getSingleUser(req, res) {
    User.findById({ _id: req.params.userId })
      .select('-__v')
      .populate("friends")
      .populate("thoughts")
      .then((userData) =>
        !userData
        ? res.status(404).json({ message: "No user with that ID" })
        : res.json(userData)
    )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
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
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

  // Delete a user and remove them from the thought
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((userData) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.findOneAndUpdate(
            { user: req.params.userId },
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
  console.log(req.params.friendId);
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friend: req.params.friendId } },
    { new: true }
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
    { $pull: { friend: { friendId: req.params.friedId } } },
    { new: true }
  )
    .then((UserData) =>
      !userData
        ? res
          .status(404)
          .json({ message: 'No friend found with that user' })
        : res.json(userData)
    )
    .catch((err) => res.status(500).json(err));
},
  };