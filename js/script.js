// let massObj = {
//     'Rasulbek': 100,
//     'Dave': 'Dacee',
//     'John': 130
// };

// let sum;

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             sum = obj[key] *= 2;

//         }
//     }
//     return sum;
// }

// console.log(multiplyNumeric(massObj));





// function User(name, age) {
// 	this.name = name;
// 	this.age = age
// 	this.isAdmin = false;
// }

// let user = new User('Rasulbek', 16);
// let user1 = new User('Rasulbek1');

// alert(user.name);
// alert(user1.name);








// function Calculator() {
// 	this.read = function() {
// 		this.a = +prompt('a?', 0);
// 		this.b = +prompt('b?', 0);
// 	}
// 	this.sum = function() {
// 		let result = this.a + this.b;
// 		return result;
// 	}
// 	this.mul = function() {
// 		let result = this.a * this.b;
// 		return result;
// 	}	
// }

// let calculator = new Calculator();
// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());








// let valueOfAccumulator = prompt('PLease write value of accumulator', 0);

// function Accumulator(value) {
// 	this.value = +value;

// 	this.read = function() {
// 		return this.value += +prompt('Please write current value of accumulator', 0);
// 	}
// }

// let accumulator = new Accumulator(valueOfAccumulator);
// accumulator.read();

// alert(accumulator.value);












// function readNumber() {
// 	let num;

// 	do {
// 		num = +prompt('Write a number', 0);
// 	} while (!isFinite(num))

// 	if (num == null || num == 0 || num == '') return null;

// 	return parseInt(num);
// }

// readNumber();













// function mathRandom(min, max) {
// 	let result = min + Math.random() * (max - min);
// 	return Math.floor(result);
// }

// alert(mathRandom(1, 20));













// let anyText = prompt('Please write any text', 'rrrrrr');
// pos = 0;

// while (true) {
// 	let findWord = anyText.indexOf('r', pos);
// 	if (findWord == -1) break;

// 	console.log(`"r" is here: ${findWord}`)
// 	pos = findWord + 1;
// }













// let firstName = prompt('Please write your first-name', '');

// function ucName(name) {
// 	firstWord = name[0].toUpperCase();
// 	otherName = name.slice(1);

// 	return firstWord + otherName;
// }

// console.log(ucName(firstName));
















// let anyText = prompt('Please write any text', '');

// function checkSpam(str) {
// 	let toLower = str.toLowerCase();

// 	if (toLower.includes('viagra') || toLower.includes('xxx')) {
// 		alert('Spam!!!');
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// let checkSpamm = checkSpam(anyText);













// let str = prompt('PLease write any text', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus?');

// function truncate(str, maxLength) {
// 	return (str.length > maxLength)
// 										? str.slice(0, maxLength) + '...'
// 										: str;
// }

// console.log(truncate(str, 30));











// function sumInput() {
// 	let numbers = [];

// 	while (true) {
// 		let value = prompt('Please write a any number', '0');

// 		if (value == '' || value == null || !isFinite(value)) break;

// 		numbers.push(+value);
// 	}

// 	let sym = 0;

// 	for (let number of numbers) {
// 		sym += number;
// 	}

// 	return sym;
// }

// sumInput();