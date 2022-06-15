const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
    },
    address: {
      type: String,
      required: [true, "Please provide address."],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Please enter Date of Birth."],
    },
    state: {
      type: String,
      required: [true, "Please enter state."],
    },
    age: {
      type: Number,
      required: [true, "Please enter age."],
    },
    pincode: {
      type: Number,
      required: [true, "Please enter age."],
    },
    email: {
      type: String,
      required: [true, "Pleae enter email"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", candidateSchema);
