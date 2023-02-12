//install the "multer" middleware in order to handle file uploads.
import {upload} from "../middleware/multer"
const multer = require('multer');

app.post('/upload', upload.single('file'), (req, res) => {
    const file = new File({
        name: req.file.filename,
        path: req.file.path,
        size: req.file.size,
    });

    file.save((err, file) => {
        if (err) {
            return res.json({ message: "Error in aving your file. Please try again !" });
        }
        return res.json({ message: "File successfully uploaded", file });
    });
});

