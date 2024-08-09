import { Request, Response } from 'express';
import BillingModel from '../db/models/billing';

export const getBillById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const bill = await BillingModel.findById(id);

        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }

        res.status(200).json(bill);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
};
