let express = require('express');
<<<<<<< HEAD
// import body parser
let bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const config = require('./config/config');


=======
let bodyParser = require('body-parser');
const {sequelize} = require('./models');
const config = require('./config/config');



>>>>>>> 76469648f2680bb426e4a0b261136eb9b29f0d95
const app = express();
// use body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/assets', express.static('public'));

<<<<<<< HEAD
// import routes

require('./userPassport');
require('./routes')(app);


let port = config.port;

sequelize.sync({ force: false }).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})
=======
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

require('./routes')(app);





 
let port = config.port;

sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
    console.log('Server running on ' + port)
    })
    })
>>>>>>> 76469648f2680bb426e4a0b261136eb9b29f0d95
