const dotenv = require('dotenv');
dotenv.config();

const configuration = {
    PORT: process.env.PORT,
    URI: process.env.URI,

};

module.exports = configuration;