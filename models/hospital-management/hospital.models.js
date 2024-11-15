import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    addressLin1: {
      type: String,
      required: true
    },
    addressLine2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    pincode: {
      type: Number,
      required: true
    },
    specializedIn: [
      {
        type: String
      }
    ],
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
      },
    ]
  }, {timestamps: true}
)

export const Hospital = mongoose.model("Hospital", hospitalSchema);