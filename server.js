const express = require("express");
const path = require("path");
const app = express();

/* app.use(express.urlencoded({ extnded: true }));
app.use(express.json()); */

require("../notetaker/Develop/routes/apiRoutes.js")(app);

require("../notetaker/Develop/routes/htmlRoutes.js")(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
});
