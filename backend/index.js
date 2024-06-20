import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import sequelize from './Connection/connection.js';

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });


const app = express();
const port = process.env.PORT || 3000;

app.use(cors())


app.get('/collection/:id', (req, res) => {
    console.log('hit!')
    console.log('sequelize is here', sequelize)
    const {id} = req.params
    console.log(id)
try {
    res.status(200).send({
        message: 'hello world',
        data: 'piece ovf shit',
        someProp: 'property',
        id: id
      });
} catch (error) {
    console.log(error.message)
    res.status(400).send({
        message: 'sorry dude',
        data: 'piece ovf shit',
        someProp: 'proppies',
        id: id
      });
}
});

app.get('/', (req, res) => {
  res.send('Goodbye World!');
});

app.listen(port, () => {
  console.log(`Finally serving on  ${port}`);
});
