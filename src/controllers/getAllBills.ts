import { Request, Response } from 'express';
import BillingModel from '../db/models/billing';

export const getAllBills = async (req: Request, res: Response) => {
    try {
        const bills = await BillingModel.find();
        res.status(200).json(bills);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
};
