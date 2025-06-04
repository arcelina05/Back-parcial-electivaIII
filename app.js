const express = require('express');
const cors = require('cors');
const app = express();
const roleRoutes = require('./routes/rolRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(express.json());

app.use('/', roleRoutes);
app.use('/', userRoutes);

module.exports = app;
