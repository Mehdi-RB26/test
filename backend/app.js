const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");

app.use(cors());

app.get("/api/message", (req, res) => {
  res.json({ message: "Nouveau message depuis le backend !" });

});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
