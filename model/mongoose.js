var mongoose    = require('mongoose');
var config = require('../config/init.json');

mongoose.connect('mongodb://' + config.dbUser + ':' + config.dbPass + '@ds119533.mlab.com:19533/store', {
    useMongoClient: true
});

var db = mongoose.connection;

db.on('error', function(err) {
    console.error('connection error:', err.message);
});

db.once('open', function callback() {
    console.info("Connected to DB!");
});

module.exports = mongoose;