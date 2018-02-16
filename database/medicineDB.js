var mongoose = require('mongoose');

var medicineSchema = mongoose.Schema({
	//Allergies
	allergyType:{
		type: String,
		required: true,
		unique: true,
	},
	allergySeverity:{
		type: String,
		required: true,
	},
	allergySymoptoms:{
		type: String,
		required: true,
	},
	//Chronic medicine list 
	chronicMedStartDate:{
		type: Number,
		required: true,
	},
	chronicMedDrugName:{
		type: String,
		required: true,
	},
	chronicmMedDose:{
		type: String,
		required: true,
	},
	chronicmMedTime:{
		type: String,
		required: true,
	},
	chronicmMedRoute:{
		type: String,
		required: true,
	},
	chronicmMedDrugDescription:{
		type: String,
		required: true,
	},
	chronicmMedEndDate:{
		type: Number,
		required: true,
	},
	//Problem list 
	onsetDate:{
		type: Number,
		required: true,
	},
	diagnosis:{
		type: String,
		required: true,
	},
	treatment:{
		type: String,
		required: true,
	},
	resolutionDate:{
		type: Number,
		required: true,
	},
	//Medication list
	medStartDate:{
		type: Number,
		required: true,
	},
	medDrugName:{
		type: String,
		required: true,
	},
	medDose:{
		type: String,
		required: true,
	},
	medEndDate:{
		type: Number,
		required: true,
	}
});
