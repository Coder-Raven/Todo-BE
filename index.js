const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log("Server is Running on port 3000");
});
