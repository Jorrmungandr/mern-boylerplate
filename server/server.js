const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB connection established sucessfully');
});

app.use(cors());
app.use(express.json());

// ====================== ROUTES ====================== //
const examplesRouter = require('./routes/example');

app.use('/examples', examplesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is Running on port: ${port}`);
});
