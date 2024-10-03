const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projetousers.cznbe.mongodb.net/projetoTasks?retryWrites=true&w=majority&appName=ProjetoUsers`
    );
    console.log("conexão com o banco bem sucedida");
  } catch (err) {
    console.log("Erro ao se conectar com o banco", err);
  }
};

module.exports = connectToDatabase;
