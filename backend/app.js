const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const notesRoutes = require("./routes/notesRoutes");

const cors = require("cors");
// app.use(cors());
app.use(cors({ origin: ["http://localhost:5173"] }));

mongoose
  .connect("mongodb://127.0.0.1:27017/Notes-Taking-App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("DB Not Connected", err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(notesRoutes);

// app.get("/new", (req, res) => {
//   res.send("Hello from new route");
// });

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
