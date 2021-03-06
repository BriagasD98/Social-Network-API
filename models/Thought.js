const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    })

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: [true, 'Please enter a thought!'],
            min: [1, 'Please Think Harder :)'],
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    },
        {
            toJson: {
                virtuals: true,
                getters: true
            },
            id: false
        });

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;