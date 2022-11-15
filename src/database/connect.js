const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.2bqp0ne.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Occorreu um erro ao tentar se conectar ao banco de dados!",
          error
        );
      }
      return console.log("Conexao ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
