const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    name: { 
        type: String 
    },
    path: {
         type: String 
    },
    size: { 
        type: Number 
    },
    createdAt: { type: Date, default: Date.now }
});

const File = mongoose.model('File', fileSchema);
