require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./database/mongooseConnect');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const index = require('../src/routes/index.js');
const bookRoutes = require('../src/routes/bookRoutes.js');
const catalogRoutes = require('../src/routes/catalogRoutes.js');
const cartoonRoutes = require('../src/routes/cartoonRoutes.js');
const movieRoutes = require('../src/routes/movieRoutes.js');
const seriesRoutes = require('../src/routes/seriesRoutes.js');
const userRoutes = require('../src/routes/userRoutes.js');

const app = express();

app.use('/documentacao-enecrescer', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(cors());
app.use('/', index);
app.use(bookRoutes);
app.use(catalogRoutes);
app.use(cartoonRoutes);
app.use(movieRoutes);
app.use(seriesRoutes);
app.use(userRoutes);

mongoose.connect();


module.exports = app;