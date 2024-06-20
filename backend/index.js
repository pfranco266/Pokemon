import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import sequelize from './Connection/connection.js';
import Comments from "./Models/Comments.js"


const app = express();
const port = process.env.PORT;

app.use(cors())


app.get('/collection/:id', async (req, res) => {
  
    const { pokemonId } = req.params;
    let comments = await Comments.findAll({ where: { pokemonId } }); 
    if (comments.length === 0) {
        comments = 'No comments yet. Be the first!';
      }
try {
    res.status(200).send({
        message: 'hello world',
        data: comments,
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


app.post('/collection/:pokemonId', async (req, res) => {
    console.log('postHIT!')
    console.log('req', req)
    console.log('ohh yeah touch mah body', req.body)
    const {content, user, pokemonId} = req.body;
    const comment = await Comments.create({content, user, pokemonId})
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




(async () => {
    try {
      await sequelize.sync({ force: true }); // { force: true } will drop the table if it already exists
      console.log('Database & tables created!');
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    } catch (error) {
      console.error('Unable to synchronize the database:', error);
    }
  })();