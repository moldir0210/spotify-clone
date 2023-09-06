const { Router } = require("express");

const Song = require("../models/song");
/* const singer = require("../models/singer"); */
const router = Router();


// create song
router.post("/", async (req, res) => {
  try {
    const song = new Song(req.body)
    await song.save()
    res.status(201).send("Song created")
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error.message})
  }
});

// get all songs

router.get("/", async (req, res) =>{
    try {
        const song = await Song.find()
        if(!song.length) {
            return res.send({message: "No songs found"})
        }

        res.status(200).send({song});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
})

// get song by id

router.get("/:id", async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).send({message: "No song found"})
        }
        res.status(200).send(song);
      } catch (error) {
        console.log(error);
       
      }
    });
// delete singer by id 
router.delete("/:id", async (req, res) => {
    try {
      const song = await Song.findById(req.params.id);
      if (!song) {
        return res.json("Song does not exist");
      }
      await Song.deleteOne({ _id: req.params.id });
      res.status(200).json("Song deleted");
    } catch (error) {
      console.log(error);
      
    }
  });

module.exports = router;