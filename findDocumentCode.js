const {getMaxListeners} = require('process');
const data = require('./data_1k.js');

const getTheList = () => {
	const hash = {};
	const hashTwenty = {};

	for (var i = 0; i < data.length; i++) {
		const string = data[i].title;
		const secondWord = string.split(' ').slice(1, 2).join(' ');
		let strHold = '';

		if (secondWord === 'customer') {
			strHold = string.split(' ').slice(0, 1).join(' '); //get only first word
		} else {
			strHold = string.split(' ').slice(0, 2).join(' '); //get both words
		}

		if (hash[strHold]) hash[strHold].push(data[i].content);
		//apply value to already existing key
		else hash[strHold] = [data[i].content]; //make a key for the first time and apply the value.
	}

	for (const [key, value] of Object.entries(hash)) {
		if (key === 'Aerosur') {
			hashTwenty['all'] = value;
			//console.log(hashTwenty);
			//console.log(hashTwenty.all.length);
		}
	}

	//get Lenght of Array.

	if (hashTwenty.all.length == 20) {
		console.log('20');
		//Return array
	}
	if (hashTwenty.all.length < 20) {
		console.log('less than');
		//Find the next Key alphbetically
		//Find the number you need to make the list 20
		//Apply those values
	}
	if (hashTwenty.all.length > 20) {
		console.log('more');
		//Move on, but make sure you don't go over 20 in the return.
	}
};

getTheList();
