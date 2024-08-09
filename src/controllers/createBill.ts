import { Request, Response } from 'express';
import BillingModel from '../db/models/billing';
import InventoryModel from '../db/models/inventory';

export const createBill = async (req: Request, res: Response) => {
    try {
        const { items, userId } = req.body;

        // Check if all items in the bill exist and have sufficient quantity
        for (const item of items) {
            const inventoryItem = await InventoryModel.findOne({ itemId: item.itemId });

            if (!inventoryItem) {
                return res.status(404).json({ message: `Item ${item.itemId} not found` });
            }

            if (inventoryItem.quantity < item.quantity) {
                return res.status(400).json({ message: `Insufficient quantity for item ${item.itemId}` });
            }
        }

        // Create the bill
        const newBill = new BillingModel({ items, userId });
        await newBill.save();

        // Update the inventory
        for (const item of items) {
            const inventoryItem = await InventoryModel.findOne({ itemId: item.itemId });
            
            if (inventoryItem) {
                inventoryItem.quantity -= item.quantity;
                await inventoryItem.save();
            }
        }

        res.status(201).json(newBill);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
};
