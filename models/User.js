const {
    Schema,
    model
} = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Please provide a username!',
        trim: true
    },

    email: {
        type: String,
        required: 'Please provide an email!',
        unique: true,
        validate: {
            validator: function (v) {
                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} not a valid email!`
        }
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true
    }
});


//Friend Count, lenght of Users friends
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;