import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import sequelize from './Connection/connection.js';
import Comments from "./Models/Comments.js"


const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json()); 




// get route request for pokemon's comments
app.get('/collection/:pokemonId', async (req, res) => {
    const { pokemonId } = req.params;
    console.log(pokemonId)
    
    const comments = await Comments.findAll({where: {
        pokemonId: pokemonId
    }})

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
    console.log('running post')

    const {id, content, author, pokemonId} = req.body;
try {
    console.log('bah', req.body)

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

app.delete('/collection/:id', async (req, res) => {
    const data = req.body;
    console.log('running delete', data.commentId);
    try {
        console.log('Before Comments.destroy call');

        const deletedCount  = await Comments.destroy({
            where: {
                id: data.commentId,
              },
        })

        if(deletedCount === 0) {
            console.log("BOOOOOOO")
            res.status(404).send({
                deleted: false,
                message: 'Comment deleted unsuccessfully',
            });
        }

        if(deletedCount === 1) {
            console.log("HRURRRAAYAYYYYY")
            res.status(200).send({
                deleted: true,
                message: 'Comment deleted successfully',
            });
        }
       

        
    } catch (error) {
        res.status(500).send({
            deleted: false,
            message: 'you blew it',
        })    }
})




app.post('/collection/:pokemonId', async (req, res) => {
  
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