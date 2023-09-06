
const cloudinary = require('cloudinary').v2;

const multer = require('multer-storage-cloudinary');

const CloudinaryStorage = multer.CloudinaryStorage

cloudinary.config({
    cloud_name: 'ddtr4jqfe',
    api_key: '596548531677238',
    api_secret: 'ENEJqsK9jrNZjN9_i7bWCc9xnuk'
});

const storage = new CloudinaryStorage({
   cloudinary,
   params: {
    folder: "spotify",
    allowedFormats: ["jpg", "png", "jpeg"]
   }
}); 

module.exports= {
    cloudinary,
    storage
}