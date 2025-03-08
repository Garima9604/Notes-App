const express = require("express");
const router = express.Router();

const Note = require("../models/Note");

//get all notes
router.get("/", async (req, res) => {
  try {
    let allNotes = await Note.find({});
    // console.log("Backend AllNotes : ", allNotes);
    res.status(200).json(allNotes);
  } catch (e) {
    res.status(400).json({ msg: "Error in Home Backend" });
  }
});

// add new note
router.post("/new", async (req, res) => {
  try {
    let { title, desc } = req.body;
    console.log("Backend notesRoutes.js add new note : ", { title, desc });
    await Note.create({ title, desc });
    console.log("New Note Created Succcessfully");
    res.status(200).json({ msg: "New Note Created Succcessfully" });
  } catch (error) {
    res.status(400).json({ msg: "Error in adding new note Backend" });
  }
});

// get a particular note
router.get("/note/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let foundNote = await Note.findById(id);
    console.log("Backend m note mila : ", foundNote);
    res.status(200).json(foundNote);
  } catch (error) {
    console.log("Nhi mila notes backend mein : ", error);
  }
});

// to edit a note
router.patch("/edit/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { title, desc } = req.body;
    await Note.findByIdAndUpdate(id, { title, desc });
    res.status(201).json({ msg: "Note updated successfully Backend" });
  } catch (e) {
    res.status(400).json({ msg: "Note Update hi ho paya backend" });
  }
});

// delete a note
router.delete("/delete/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await Note.findByIdAndDelete(id);
    console.log("Note Delete ho gye backend de bhi : ");
    res.status(201).json({ msg: "Note deleted successfully" });
  } catch (e) {
    res.status(400).json({ msg: "Nhi Delete hua Note Backend" });
  }
});

module.exports = router;
