const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
      .catch((err) => res.status(500).json(err));
  },
  // Get a thought NEEDS WORK 
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      // .sort({ _id: 1 })
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought NEEDS WORK 
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtData) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true }
        );
      })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "No user with that ID" });
        }
        res.json({ message: "Thought created" });
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete thought NEEDS WORK 
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: thought.user } })
      )
      .then(() => res.json({ message: 'Thought and user deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },

// Add a reaction to a user
createReaction(req, res) {
  console.log('You are adding a reaction');
  console.log(req.body);
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reaction: req.body } },
    { runValidators: true, new: true }
  )
    .then((thoughtData) =>
      !thoughtData
        ? res
          .status(404)
          .json({ message: 'No user found with that ID :(' })
        : res.json(user)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},
// Remove reaction from a user
deleteReaction(req, res) {
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $pull: { reaction: { reactionId: req.params.reactionId } } },
    { runValidators: true, new: true }
  )
    .then((thoughtData) =>
      !thoughtData
        ? res
          .status(404)
          .json({ message: 'No thought found with that ID :(' })
        : res.json(thoughtData)
    )
    .catch((err) => res.status(500).json(err));
},
  };

  // module.exports = thoughtController;


  //FROM MINI PROJECT
//   // Add an assignment to a student
//   addAssignment(req, res) {
//     console.log('You are adding an assignment');
//     console.log(req.body);
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $addToSet: { assignments: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // Remove assignment from a student
//   removeAssignment(req, res) {
//     Student.findOneAndUpdate(
//       { _id: req.params.studentId },
//       { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
//       { runValidators: true, new: true }
//     )
//       .then((student) =>
//         !student
//           ? res
//               .status(404)
//               .json({ message: 'No student found with that ID :(' })
//           : res.json(student)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
// };