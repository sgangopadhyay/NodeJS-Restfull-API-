// create the routes for my application

const express = require("express");
const router = express.Router();
const Alien = require("../models/models");

//fetch all data
router.get("/", async (req, res) => {
  try {
    const info = await Alien.find();
    res.json(info);
  } catch (err) {
    res.send("ERROR : " + err);
  }
});

// insert data
router.post("/", async (req, res) => {
  const info = new Alien({
    name: req.body.name,
    location: req.body.location,
    tech: req.body.tech,
    date_created: req.body.date_created,
  });
  try {
    const temp = await info.save();
    res.json(temp);
  } catch (err) {
    res.send("ERROR : " + err);
  }
});

// find by ID
router.get("/:id", async (req, res) => {
  try {
    const info = await Alien.findById(req.params.id);
    res.json(info);
  } catch (err) {
    res.send("ERROR : " + err);
  }
});

//edit by ID
router.patch("/:id", async (req, res) => {
  try {
    const info = await Alien.findById(req.params.id); // search for the ID
    info.location = req.body.location;
    info.name = req.body.name;
    info.tech = req.body.tech;

    const info_save = await info.save(); // save the new information for that ID
    res.json(info_save);
  } catch (err) {
    res.send("ERROR : " + err);
  }
});

module.exports = router;
