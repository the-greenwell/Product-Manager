const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const routes = require('./routes/product.route');
routes(app);
app.listen(8000, ()=>console.log('I..AM..IRONMAN'))
