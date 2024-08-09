import { Request, Response } from 'express';
import InventoryModel from '../db/models/inventory';

export const getAllItemsFromInventory = async (req: Request, res: Response) => {
    try {
        const items = await InventoryModel.find();
        res.status(200).json(items);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
};
