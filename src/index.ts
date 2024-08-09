import express, {Express} from "express";
import dotenv from 'dotenv'
import { connectToDatabase } from "./db/connection";
import router from "./routes/index";

dotenv.config()

const app:Express = express();
const port = process.env.PORT;

connectToDatabase();

app.use(express.json());
app.use('/',router); // all routes go here

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
    
})
