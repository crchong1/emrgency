//importing mongoose and connecting it to the database
var mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost/pokeData');

// CHANGE THIS TO THE DIRECTORY OF YOUR POKEDATA.TXT !!!!!!!!!!!!!!!!
var inputSource = "/Users/Chris/Documents/Penn 2017-18/EHR/Assignment 3/ewbserver_v3/pokedata.txt";

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});*/

//This is the Mongoose Schema with the 8 fields
//Schema is only used when adding things to db, not getting
var immSupp = mongoose.Schema({
    //Immunizations
    dueDate: {
        type: Number,
        required: true,
        unique: true
    },
    immAdminDate: {
        type: Number,
        required: true,
        unique: true
    },
    vaxName: {
        type: String,
        required: true
    },
    immLotNum: {
        type: Number,
        required: true
    },
    //Vitamin A Supplements
    vitaAdminDate: {
        type: Number,
        required: true
    },
    vitaLotNum: {
        type: Number,
        required: true
    },
    //Deworming Tablets
    dwAdminDate: {
        type: Number,
        required: true
    },
    dwLotNum: {
        type: Number,
        required: true
    }
  });


/* Initial declaration of the Pokemon Schema
var Pokemon = mongoose.model('Pokemon', pokeSchema);


//insert functions here
var getPokemon = function(pokemon_name, route_callback){
    var key = new RegExp("^"+pokemon_name);
    Pokemon.find({name: key}, function(err, response){
        if(err) {
            route_callback(null, "error" + err)
        } else {
            route_callback(response, null);
        }
    }); 
}

var database = {};

module.exports = database;
*/
