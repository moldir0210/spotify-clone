const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors= require("cors")
const singerRoutes= require("./routes/singer")
const songRoutes = require("./routes/song")
const albumRoutes= require("./routes/album")
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));


const PORT = 3001;

const uri =
  "mongodb+srv://moldiramangeldi:EN3Tyk2imwUL_Df@cluster0.iy5zngq.mongodb.net/spotify?retryWrites=true&w=majority";

app.use('/api/song', songRoutes);
app.use('/api/singer', singerRoutes);
app.use('/api/album', albumRoutes);


function start() {
    try {
        mongoose.connect(uri,{
            useNewUrlParser: true,
    useUnifiedTopology: true,
        })
        mongoose.connection.on("connected", () => {
            console.log("Connected to MongoDB Atlas");
        });
        
        app.listen(PORT, ()=> console.log("Server has started"))
    } catch (error) {
       console.log(error); 
    }
}

start()
