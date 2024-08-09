import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({
    itemId: { type: Number, required: true, unique: true },
    itemName: {type: String},
    quantity: {type: Number, required: true},
})

const InventoryModel = mongoose.model("Inventory", InventorySchema);

export default InventoryModel