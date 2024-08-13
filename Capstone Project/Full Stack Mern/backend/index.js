const app = require("./app");
const path = require("path");
const connectDatabase = require("./config/database");
const { Server } = require("http");

connectDatabase();

const index = app.listen(process.env.PORT, () => {
  console.log(
    `My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `
  );
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandled rejection error");
  Server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception error");
  Server.close(() => {
    process.exit(1);
  });
});
