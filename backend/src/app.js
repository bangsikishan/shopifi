const express = require('express');
const { PORT, URI } = require('./config/config');
const router = require('./routes/router');
const dbConnection = require('./database/connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

async function setup() {
    await dbConnection(URI);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
setup();

