const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT YOUR MODELS
require('./models/Users');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());

// IMPORT YOUR ROUTES
require('./routes/usersRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});