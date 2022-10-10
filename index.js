const express = require("express");
const app = express();

app.use(express.json());

app.get("", (request, response) => {

  return response.json(request.body.data);
});

const port = 5050
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 });
