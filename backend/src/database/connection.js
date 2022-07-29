const mongooseCon = require('mongoose');

const dbConnection = async (URI) => {
    try {
        await mongooseCon.connect(URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error.message);
    }

};

module.exports = dbConnection;