const data = require('./data_1k.js');

const createHashTable = () => {
	const hash = {};

	for (var i = 0; i < data.length; i++) {
		const string = data[i].title;
		const secondWord = string.split(' ').slice(1, 2).join(' ');
		let strHold = '';

		if (secondWord === 'customer') {
			strHold = string.split(' ').slice(0, 1).join(' '); //get only first word
		} else {
			strHold = string.split(' ').slice(0, 2).join(' '); //get first and second word
		}
		if (hash[strHold]) hash[strHold]++;
		else hash[strHold] = 1;
	}
	return hash;
};

const doesAirlineExist = (string) => {
	let found = 0;
	const hash = createHashTable();

	for (const [key, value] of Object.entries(hash)) {
		if (key === string) {
			found = 1;
		}
	}
	return found;
};

const findDocument = (string) => {
	const buildIndex = () => {
		const foundAirlineName = doesAirlineExist(string);
		if (foundAirlineName == 0) return;
	};
	buildIndex();
};

findDocument('Aerosur');
