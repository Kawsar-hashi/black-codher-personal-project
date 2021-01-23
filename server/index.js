const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


require('./models/Users');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/black-codher-personal-project?readPreference=primary&appname=MongoDB%20Compass&ssl=false`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());
app.use(cors());

require('./routes/usersRoutes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});