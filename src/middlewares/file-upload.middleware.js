import multer from "multer";

// Configure storage with filename and location.
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename : (req, file, cb) => {
        cb(null, Date.now()+"-"+file.originalname);
    },
});

// Using multer to upload the file and pass the storage
export const upload = multer({
    storage : storage,
    limits: {fileSize: 5 * 1024 * 1024}
});