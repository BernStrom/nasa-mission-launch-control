require('dotenv').config();
const mongoose = require('mongoose');

const NASA_ACCESS = process.env.NASA_ACCESS;
const MONGO_URL = `mongodb+srv://nasa-api:${NASA_ACCESS}@nasacluster.dqhm4.mongodb.net/nasa?retryWrites=true&w=majority`;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  mongoConnect,
};
