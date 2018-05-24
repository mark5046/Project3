const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const routes = require('./routes')
const path = require("path");
const apiRoutes = require("./routes/api/apiRoutes");

const app = express();

// var db = require('./models');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use(express.static("client/build"));

app.use((req, res, next) => {
  
  console.log('url: ', req.url);
  console.log('query: ', req.query);
  next();
})

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use("/api/apiRoutes", apiRoutes);
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ExcerciseSchema");
mongoose.Promise = Promise;


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));