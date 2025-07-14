import 'dotenv/config';
import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';


const startApp = async () => {
  await initMongoConnection(); 
  setupServer();              
};
process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection:', err.message);
  process.exit(1);
});

startApp();