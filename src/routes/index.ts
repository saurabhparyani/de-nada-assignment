import { getAllItemsFromInventory } from '../controllers/getAllItemsFromInventory';
import { addItemToInventory } from '../controllers/addItemToInventory';
import express, {Request, Response} from 'express'
import { createBill } from '../controllers/createBill';
import { getAllBills } from '../controllers/getAllBills';
import { getBillById } from '../controllers/getBillById';

const router = express.Router();

router.post('/item', addItemToInventory);
router.get('/items', getAllItemsFromInventory)
router.post('/bill', createBill)
router.get('/bills',getAllBills)
router.get('/bill/:id', getBillById)


router.get('/', (req: Request, res:Response) => {
    res.send({
        message: `Hello. Welcome to the backend. 
        Hit /items to get all items from inventory.
        Hit /bills to get all bills.
        Hit /bill:id to get a particular bill.
        Try sending POST requests using Postman and come back!`
    })
})


export default router