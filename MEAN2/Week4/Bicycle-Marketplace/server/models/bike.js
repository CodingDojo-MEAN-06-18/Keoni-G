const mongoose = require('mongoose');
const { Schema } = mongoose;

const bikeSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'A bike title is required'],
      trim: true,
    },
    price: {
      type: Number,
      min: 1,
      required: [true, 'Price must be greater than $1'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description for this bike'],
      trim: true,
      maxlength: [200, 'Description must be less than 200 characters'],
    },
    location: {
      type: String,
      required: [true, 'A location is required'],
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'An image is required'],
      trim: true,
    },
    ownerId: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Bike', bikeSchema);
