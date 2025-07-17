import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import dotenv from 'dotenv';
import { handleGetAllContacts, getContactById } from './controllers/contactsController.js';


dotenv.config();

export function setupServer() {
  const app = express();
    
    app.use(pino());
  
    app.use(cors());
  
    app.get('/contacts', handleGetAllContacts);
    app.get('/contacts/:contactId', getContactById);

    app.use((req, res) => {
        res.status(404).json({
            message: 'Not Found'});
    });

    const PORT = Number(process.env.PORT) || 3000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  };