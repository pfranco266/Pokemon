import { DataTypes, Model } from '@sequelize/core';

import sequelize from "../Connection/connection.js";
class Comments extends Model {}

Comments.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 251], // Minimum length of 3 characters and maximum length of 251 characters
    },
  },

  
}, {
  sequelize, // Use the imported Sequelize instance
  modelName: 'Comments',
  timestamps: false,
});


const comment1 = new Comments({ 
    id: 1, 
    content: 'hey how are you i am fine thanks no worries man, just lookgin out, pseakingn of lloing out how are the look out spots form space',


});
console.log(comment1)


export default Comments;
