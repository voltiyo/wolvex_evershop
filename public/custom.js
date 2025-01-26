document.title = "Wolvex"

require("dotenv").config(); // Load .env variables
const config = require("./config.json"); // Import your config.json

// Merge environment variables dynamically
config.google_login.client_id = process.env.googleclientid;
config.google_login.client_secret = process.env.googleclientsecret;
config.database.password = process.env.DB_PASS;


