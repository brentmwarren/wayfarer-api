const db = require('../models');

const cityList = require('./cities.json');

// removes all cities 
db.City.deleteMany({}, () => {
	// loops through the json file
	// cityList.forEach(city => {
		// for each one creates a city entry in the DB
		db.City.create(cityList, (error, createdCities) => {
			if (error) return console.log(error);
			console.log(createdCities);
			process.exit();
		});
	// });
});

// to seed the application for local use, run "node db/seed.js" in CLI 