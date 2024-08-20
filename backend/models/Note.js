const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
    required: true,
  },
});

const Notes = mongoose.model("Note", notesSchema);

module.exports = Notes;
