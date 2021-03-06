import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title : {
    type: String,
    required: "Title is Required",
  },
  weeks : {
    type : Number,
    required : "Weeks is required"
  },
  problems : {
    type : Number,
    required : "Problems are required"
  },
  startedAt : {
    type: Date,
    default : Date.now
  },
  // End At
  createdAt : {
    type: Date,
    default: Date.now
  },
  img : {
    type: String,
  },
  creator: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  challengers: [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
});

const model = mongoose.model("Challenge", challengeSchema);

export default model;