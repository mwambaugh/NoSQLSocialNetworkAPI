const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String.apply,
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

const Thought = model("thought", thoughtSchema);

// userSchema.virtual("reactionCount").get(() => {
//     return this.reactions.length;
// });

module.exports = Thought;