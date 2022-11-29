import 'dotenv/config';
import express  from 'express';
import cors from 'cors'
import { router } from './Routes';
import dbMongo from './Config/mongo';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json())

// Routes
app.use(router)

dbMongo().then(()=> console.log('Conexion to DataBase: (☞ﾟヮﾟ)☞ ✅'))
app.listen(PORT, () => console.log(`!!! Server Started 🚀 in port: ${PORT}`))