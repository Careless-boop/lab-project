const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8008;

app.use(cors());
app.use(express.json());

const connectionString = "mongodb://localhost:27017/Web3";
mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log(err));

const merchSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
});
const Merch = mongoose.model("Item", merchSchema);

app.get("/merch", async (req, res) => {
  try {
    const merch = await Merch.find();
    res.json(merch);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
