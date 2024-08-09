import mongoose from "mongoose";

const BillingSchema = new mongoose.Schema({
    items: [{
        itemId: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
})

const BillingModel = mongoose.model("Billing", BillingSchema)

export default BillingModel