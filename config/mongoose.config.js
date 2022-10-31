const mongoose = require('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.DB_CNN,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
        console.log("Db connected  ")
    } catch (error) {
        console.log (error);
        throw new Error('Error on the Db start')
    }
}
// mongoose.connect("mongodb://localhost/pokeapi", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Established a connection to the pokemon database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));

module.exports = { dbConnection }