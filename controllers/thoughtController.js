const { Thought, User } = require('../models');

module.exports = {
  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughtData) => res.json(thoughtData))
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

 // Get a thought NEEDS WORK 
 getSingleThought(req, res) {
  console.log("fetching a thought!");
  Thought.findbyId({ _id: req.params.thoughtId })
    .select('-__v')
    // .sort({ _id: 1 })
    .then((thoughtData) =>
      !thoughtData
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(thoughtData)
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
},

  // Delete thought NEEDS WORK 
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughtData) =>
        !thoughtData
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Thought.deleteMany({ _id: { $in: thoughtData.user } })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
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
  Thought.findOneAndUpdate(
    { _id: req.params.thoughtId },
    { $addToSet: { reactions: req.body } },
    { runValidators: true, new: true }
  )
    .then((thoughtData) =>
      !thoughtData
        ? res
          .status(404)
          .json({ message: 'No user found with that ID :(' })
        : res.json(thoughtData)
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
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    {new: true }
  )
    .then((thoughtData) =>
      !thoughtData
        ? res.status(404).json({ message: 'No thought found with that ID :(' })
        : res.json(thoughtData)
    )
   .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
},
};

// deleteReaction(req, res) {
//   Thought.findOneAndDelete({ _id: req.params.reactionId })
//     .then((thoughtData) =>
//       !thoughtData
//         ? res.status(404).json({ message: 'No reaction with that ID' })
//         : Thought.deleteMany({ _id: { $in: thoughtData.user } })
//     )
//     .then(() => res.json({ message: 'Reaction deleted!' }))
//     .catch((err) => res.status(500).json(err));
// },
// };



  // module.exports = thoughtController;
