const app =require("./app");
const dotenv =require("dotenv");
const connectDB =require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


//Config
dotenv.config({path:"Backend/config/config.env"});
const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT || 3000;

//Connect Database
connectDB();

// Start the server
const server = app.listen(port, hostname, () => {
    console.log(`Server started on port ${port}.`);
});

//Unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });