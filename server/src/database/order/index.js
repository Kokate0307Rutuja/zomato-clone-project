import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    orderDetails: [
      {
        food: [
          {
            details: { type: mongoose.Types.ObjectId, ref: "foods" },
            quantity: { type: Number, required: true },
          },
        ],
        paymode: { type: String, required: true },
        status: { type: String, default: "Placed" },
        paymentDetails: {
          itemTotal: { type: Number, required: true },
          promo: { type: String, required: true },
          tax: { type: String, require: true },
          razorpay_payment_id: { type: String, required: true },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const OrderModel = mongoose.model("orders", OrderSchema);
<<<<<<< HEAD
=======
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
