const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Email must be a valid one.']
        },
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
    },
        {
            toJson: {
                virtuals: true,
                getters: true
            },
            id: false
        });

        // Virtual friend counter
    UserSchema.virtual('friendCount').get(function() {
        return this.friends.length;
    })

    const User = model('User', UserSchema);

    module.exports = User;