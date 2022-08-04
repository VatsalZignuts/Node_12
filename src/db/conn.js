const mongoose = require("mongoose");

// mongoose.connect('mongodb://vatsalk:ejnDb0zn54HqoEXrchNCISC54Ku4@15.206.7.200:28017/vatsalk').then(() => {
    mongoose.connect('mongodb://vatsalk:ejnDb0zn54HqoEXrchNCISC54Ku4@15.206.7.200:28017/vatsalk?authSource=admin&ssl=false').then(() => {
        console.log("mongodb database connected.....");    
    }).catch(err => {
        console.log('err :: ', err);
    });

// mongoose.connect('mongodb://vatsalk:ejnDb0zn54HqoEXrchNCISC54Ku4@15.206.7.200:28017/?authMechanism=DEFAULT',{

// useCreateIndex : true,
// useNewUrlParser : true,
// useUnifiedTopology : true
// }).then (() => {
//     console.log(" mongodb connection is successfully");
// }).catch((e) => {
//     console.log(" mongodb connection is unsuccessfully");
// });


// 'mongodb://vatsalk:ejnDb0zn54HqoEXrchNCISC54Ku4@15.206.7.200:28017/vatsalk?authSource=admin&ssl=false'