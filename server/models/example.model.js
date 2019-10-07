const mongoose = require('mongoose');

const { Schema } = mongoose;

const exampleSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
  },
}, {
  timestamps: true,
});

const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;
