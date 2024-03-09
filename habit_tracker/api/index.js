const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

const Habit = require("./models/habit");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://fedefedev:fedecapo8@apphabitcluster.z9cp89t.mongodb.net/"
  )
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((error) => {
    console.log("Error al conectarse a MongoDB", error);
  });

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto", port);
});

// endpoint para crear un habito en el backend de la app

app.post("/habits", async (req, res) => {
  try {
    const { title, color, repeatMode, reminder } = req.body;
    const newHabit = new Habit({
      title,
      color,
      repeatMode,
      reminder,
    });
    const savedHabit = await newHabit.save();
    res.status(200).json(savedHabit);
  } catch (error) {
    res.status(500).json({ error: "Network error" });
  }
});
