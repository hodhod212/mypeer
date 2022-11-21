const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();
const dotenv = require("dotenv");
const env = dotenv.config();
app.enable("trust proxy");

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});

const peerServer = ExpressPeerServer(server, {
  path: "/",
});

app.use("/", peerServer);

module.exports = app;
