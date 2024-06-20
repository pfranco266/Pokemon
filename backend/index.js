import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import sequelize from './Connection/connection.js';
import Comments from "./Models/Comments.js"


const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json()); 


app.get('/collection/:pokemonId', async (req, res) => {
    const { pokemonId } = req.params;
    console.log(pokemonId)
    
    const comments = await Comments.findAll({where: {
        pokemonId: pokemonId
    }})

    console.log('NAALLLLLLLLLWWKLNWENEI', comments)


try {
    res.status(200).send({
        message: 'hello world',
        data: comments,
        someProp: 'property',
        id: pokemonId
      });
} catch (error) {
    console.log(error.message)
    res.status(400).send({
        message: 'sorry dude',
        data: 'piece ovf shit',
        someProp: 'proppies',
        id: pokemonId
      });
}
});


app.post('/collection/:pokemonId', async (req, res) => {
    console.log('postHIT!')
    console.log('ohh yeah touch mah body', req.body)
    const {content, author, pokemonId} = req.body;
   
try {
    const comment = await Comments.create({content, author, pokemonId})
    console.log('success', comment)
    res.status(200).send({
        message: 'success hogans',
        comment: comment
      });
} catch (error) {
    console.log(error.message)
    res.status(400).send({
        message: 'sorry dude',
     
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