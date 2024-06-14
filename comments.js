// Create web server
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
// Create a new array to store comments
let comments = [];

// Use body-parser to parse JSON
app.use(bodyParser.json());

// Add a comment
app.post("/comments", (req, res) => {
  // Create a new comment object with the data sent by the client
  const newComment = {
    id: comments.length + 1,
    name: req.body.name,
    comment: req.body.comment,
  };
  // Add the new comment to the array
  comments.push(newComment);
  // Send the new comment as the response
  res.json(newComment);
});

// Get all comments
app.get("/comments", (req, res) => {
  // Send the comments array as the response
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
