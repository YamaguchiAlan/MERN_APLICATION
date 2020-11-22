const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs'); 

const usersSchema = new Schema({
    username:{
        type: String,
        required: [true, 'Enter a Username'], 
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Enter a Email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Enter a Password']
    }
}, { timestamps: true });

usersSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

usersSchema.methods.matchPassword = async function(password) {
        return await bcrypt.compare(password, this.password)
}

module.exports = model('Users', usersSchema)