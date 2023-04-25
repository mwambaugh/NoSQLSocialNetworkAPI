const { Schema, model } = require("mongoose");
// const reactionSchema = require("./Reaction");

const reactionSchema = new Schema({
    // reactionId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId(),
    // },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.Now,
    },
});

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLenght: 280,
    },
    createdAt: {
        type: Date,
        default: Date.Now,
    },
    username: {
        type: String,
        required: true,
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    //     id: false,
    // },
    reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });

const Thought = model("Thought", thoughtSchema);

// userSchema.virtual("reactionCount").get(() => {
//     return this.reactions.length;
// });

module.exports = Thought;