require("./modules/serverTasks");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();
