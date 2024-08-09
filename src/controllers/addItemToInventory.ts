import { Request, Response } from 'express';
import InventoryModel from '../db/models/inventory';

export const addItemToInventory = async (req: Request, res: Response) => {
    try {
        const { itemId, itemName, quantity } = req.body;
        const newItem = new InventoryModel({ itemId, itemName, quantity });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
};