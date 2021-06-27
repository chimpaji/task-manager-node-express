const mongoose = require("mongoose");

const connectDB = (uri) => {
  return mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
  });
};

module.exports = connectDB;
