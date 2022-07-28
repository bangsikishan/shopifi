const mongooseCon = require('mongoose');

const dbConnection = async (URI) => {
    try {
        await mongooseCon.connect(URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }

};

// mongoose.connection.on('connected', () => {
//     console.log('Connected to the database');
// });

// mongoose.connection.on('error', () => {
//     console.log('Could not connect to the database');
// });

module.exports = dbConnection;