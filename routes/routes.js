var patientsDB = require('../database/patientsDB.js');

// this function renders index.ejs, which is located in the views folder
var getMain = function(req, res) {
	res.render('index.ejs');
}

var getForm = function(req, res) {
	res.render('form.ejs');
}

var getSearchPatients = function(req, res) {
  res.render('patientSearch.ejs');
}
var getPatientPage = function(req, res) {
  res.render('patientPage.ejs')
}
var submitPatient = function(req, res) {
  console.log(req.body);
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
  console.log('get patient: ' + req.body.search);
  var search = req.body.search;
  var field = req.body.field;
  // patientName = patientName.toLowerCase();
  patientsDB.getPatientKeys(search, field, function(data, err){
      if(err){
          alert("Error from getPatientKeys, patients DB, in routes.js -> getPatientKeys")
      }
      else if(data){
          res.send({
              message: '',
              patient: data
          });
      }
      else {
          alert("No data or error in routes.js -> getPatientKeys")
      }
  });
}
// this method handles the get_main request from app.js and reroutes it to the getMain function above
var routes = { 
  get_main: getMain,
  get_form:getForm,
  submit_patient: submitPatient,
  get_patient_page: getPatientPage,
  get_patient_keys: getPatientKeys,
  get_patient_search: getSearchPatients
};

module.exports = routes;
