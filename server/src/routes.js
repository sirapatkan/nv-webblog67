const UserController = require('./controllers/UserController');
<<<<<<< HEAD
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController');
const KeyboardController = require('./controllers/KeyboardController'); // เปลี่ยน BlogController เป็น KeyboardController

let multer = require("multer");

// upload section
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/uploads");
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.originalname);
    }
});
let upload = multer({ storage: storage }).array("userPhoto", 10);

module.exports = (app) => {
    app.get('/users', isAuthenController, UserController.index);
    app.get('/user/:userId', UserController.show);
    app.post('/user', UserController.create);
    app.put('/user/:userId', UserController.put);
    app.delete('/user/:userId', UserController.remove);
    app.post('/login', UserAuthenController.login);

    // เปลี่ยนเส้นทางทั้งหมดที่เกี่ยวกับ blog เป็น keyboard
    app.post('/keyboard', KeyboardController.create);
    app.put('/keyboard/:keyboardId', KeyboardController.put);
    app.delete('/keyboard/:keyboardId', KeyboardController.remove);
    app.get('/keyboard/:keyboardId', KeyboardController.show);
    app.get('/keyboards', KeyboardController.index);

    // upload
    app.post("/upload", function (req, res) {
        upload(req, res, function (err) {
            if (err) {
                return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
        });
    });

    // delete file uploaded function
    app.post('/upload/delete', async function (req, res) {
        try {
            const fs = require('fs');
            console.log(req.body.filename);

            fs.unlink(process.cwd() + '/public/uploads/' + req.body.filename, (err) => {
                if (err) throw err;
                res.send("Delete successful");
            });
        } catch (err) {
            res.status(500).send({
                error: 'An error has occurred trying to delete the file'
            });
        }
    });
};
=======

module.exports = (app) => {
    app.get('/users',UserController.index);
    app.get('/user/:userId',UserController.show);
    app.post('/user',UserController.create);
    app.put('/user/:userId',UserController.put);
    app.delete('/user/:userId',UserController.remove);
}
>>>>>>> 76469648f2680bb426e4a0b261136eb9b29f0d95
