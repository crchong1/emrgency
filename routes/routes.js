var patientsDB = require('../database/patientsDB.js');

// this function renders index.ejs, which is located in the views folder
var getMain = function(req, res) {
	res.render('index.ejs');
}

var getForm = function(req, res) {
	res.render('form.ejs');
}
var submitPatient = function(req, res) {
  console.log(req.body)
  patientsDB.putPatient(req.body, function(data, err) {
      if(err){
console.log("error")
      }
      else if(data){
          // console.log('success');
          console.log(data);
          res.send({
              message: '',
              patient: data
          });
      }
      else {
      }
  })
  res.render('form.ejs')
}
var getPatientKeys = function (req, res) {
  console.log('get patient: ' + req.body.patientName);
  // user signup
  var patientName = req.body.patientName;
  patientName = patientName.toLowerCase();
  patientsDB.getPatientKeys(patientName, function(data, err){
      if(err){
          res.render('pokemon.ejs', {message: 'Please enter a Pokemon'});
      }
      else if(data){
          // console.log('success');
          // console.log(data);
          res.send({
              message: '',
              patient: data
          });
      }
      else {
          res.render('pokemon.ejs', {message: 'Pokemon does not exist'});
      }
  });
}
// this method handles the get_main request from app.js and reroutes it to the getMain function above
var routes = { 
  get_main: getMain,
  get_form:getForm,
submit_patient: submitPatient

};

module.exports = routes;
