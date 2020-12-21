const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT YOUR MODELS
require('./models/Users');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://localhost:27017/black-codher-personal-project`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }. then ()
);

app.use(bodyParser.json({limit: "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended : true}));
app.use(cors());
// IMPORT YOUR ROUTES
require('./routes/usersRoutes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
