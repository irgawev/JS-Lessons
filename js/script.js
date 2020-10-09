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

// console.log(sumInput());






















// let users = [
//     { name: 'Emma', age: 15 },
//     { name: 'Rasulbek', age: 16 },
//     { name: 'Djon', age: 18 },
//     { name: 'Stan', age: 19 }
// ]


// call
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// };


// forEach()
// users.forEach((person, index) => console.log(`${index}: ${person}`))


// map()
// const newPeople = users.map(index => index.name);


// filter
// const adults = users.filter(person => person.age >= 18);


// reduce
// let amount = users.reduce((total, person) => total += person.age, 0);


// find
// const emma = users.find(person => person.name === 'Emma');

// split & join






////////////////////////////////////////////////////////////////////////
// let writeUser = prompt('PLease write a names of new users', '');
// let users = [];
// const splitUsers = writeUser.split(', ')

// function addUser(newUser) {
//     let result = users.push(newUser);

// }

// addUser(splitUsers);

// console.log(users);


















// let range = {
//     from: 1,
//     to: 10,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },

//     next() {
//         if (this.current <= this.to) {
//             return {
//                 done: false,
//                 value: this.current++
//             }
//         } else {
//             return { done: true }
//         }
//     }
// }

// for (let i of range) {
//     console.log(i)
// }

// let range = {
//     from: 1,
//     to: 10
// }

// range[Symbol.iterator] = function() {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return {
//                     done: false,
//                     value: this.current++
//                 }
//             } else {
//                 return { done: true }
//             }
//         }
//     }
// }

// for (let i of range) {
//     console.log(i)
// }























// let uniqueWord = prompt('Write any text', '');
// let uniqueWord = []

// function unique(arr) {
//     let uniqueWordAdd = prompt('Write a unique words please...', '');
//     let singleUniqueWords = uniqueWordAdd.split(' ');

//     uniqueWord.push(singleUniqueWords);
//     return (
//         uniqueWordSet = Array.from(new Set(uniqueWord))
//     )
// }

// console.log(unique());






















// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.key());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
// keys.push("more");






















// let visits = new Map();
// visits.set('value', 0)

// function countUser(user) {
//     let count = visits.get(user) || 0;

//     for (let i of visits) {
//         visits.set(user, count++);
//     }

// }

// countUser('Rasulbek');
// countUser('Rasul');
// countUser('Rasul1');
// countUser('Rasul2');

// console.log(visits);



















// let visitedUsers = new WeakSet();

// let john = {name: 'John'};
// let emma = {name: 'Emma'};
// let mary = {name: 'Mary'};

// visitedUsers.add(john);
// visitedUsers.add(emma);
// console.log(visitedUsers.has(john));
// visitedUsers.delete(john);



// let messages = [
//     {
//         txt: 'Hello',
//         from: 'John'
//     },
//     {
//         txt: 'How goes?',
//         from: 'John'
//     },
//     {
//         txt: 'See you soon',
//         from: 'Alice'
//     }
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// for (let i = 0; i < messages.length; i++) {
//     if (!readMessages.has(messages[i])) {
//         let result = messages.length - i;
//         console.log(`${result} message(s) unreaded. From: ${messages[i].from}`);
//     }
// }






























// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4
// }

// let doublePrice = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );




























// let salaries = {
//     'john': 105,
//     'emma': 200,
//     'pett': 250,
// };

// function sumSalaries(arg) {
//     let sum = 0;

//     for (let i of Object.values(arg)) {
//         let parseI = parseInt(i);
//         sum += parseI;
//     }
    
//     return sum;
// }

// console.log(sumSalaries(salaries));



































// let user = new Map();

// user.set('name', 'Rasulbek')
//     .set('age', 16);

// for (let [keys, values] of user) {
//     console.log(`${keys}: ${values}`);
// }




// let options = {
//     one: 1,
//     two: 2,
//     three: 3
// };

// let {one, ...rest} = options

// console.log(rest);




// let options = {
//     size: {
//         width: 200,
//         height: 100
//     },
//     item: [
//         'Cake',
//         'Doner'
//     ],
//     extra: true
// };

// let {
//     size: {
//         width,
//         height
//     },
//     item: [
//         item1,
//         item2
//     ],
//     title = 'Menu'
// } = options;

// console.log(title);






// let user = {
//     name: "Rasulbek",
//     years: 16
// };

// let {
//     name,
//     years,
//     isAdmin = false
// } = user;

// console.log(years)






// var salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(arg) {
//     var name = null;
//     var num = 0;

//     for (var [key, value] of Object.entries(arg)) {
//         if (num <= value) {
//             num = value;
//             name = key;
//         }
//     }

//     return name;
// }

// topSalary(salaries);\



















































// let date = new Date(2020, 9, 8);

// function getWeekDay(arg) {
//     let dayOfWeek = arg.getDay();
//     let dayWeek;

//     if (dayOfWeek == 0) {
//         dayWeek = 'Воскресенье'
//     } else if (dayOfWeek == 1) {
//         dayWeek = 'Понедельник'
//     } else if (dayOfWeek == 2) {
//         dayWeek = 'Вторник'
//     } else if (dayOfWeek == 3) {
//         dayWeek = 'Среда'
//     } else if (dayOfWeek == 4) {
//         dayWeek = 'Четверг'
//     } else if (dayOfWeek == 5) {
//         dayWeek = 'Пятница'
//     } else if (dayOfWeek == 6) {
//         dayWeek = 'Суббота'
//     } 

//     return dayWeek;
// }

// console.log(getWeekDay(date));











// let date = new Date(2020, 9, 5);

// function getLocalDay(arg) {
//     let dayOfWeek = arg.getDay();
//     let dayWeek;

//     if (dayOfWeek == 0) {
//         dayOfWeek = 7;
//         dayWeek = 'Воскресенье';
//     } else if (dayOfWeek == 1) {
//         dayOfWeek = 1;
//         dayWeek = 'Понедельник';
//     } else if (dayOfWeek == 2) {
//         dayOfWeek = 2
//         dayWeek = 'Вторник';
//     } else if (dayOfWeek == 3) {
//         dayOfWeek = 3
//         dayWeek = 'Среда';
//     } else if (dayOfWeek == 4) {
//         dayOfWeek = 4
//         dayWeek = 'Четверг';
//     } else if (dayOfWeek == 5) {
//         dayOfWeek = 5
//         dayWeek = 'Пятница';
//     } else if (dayOfWeek == 6) {
//         dayOfWeek = 6
//         dayWeek = 'Суббота';
//     } 

//     return dayWeek;
// }

// console.log(getLocalDay(date));










// let date = new Date();
// let quest = +prompt('Write a any number', '');

// function getDateAgo (dateTd, daysAgo) {
//     let getPersonNum = dateTd.getDate() - daysAgo;

//     return getPersonNum;
// }

// console.log(getDateAgo(date, quest));












// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);

//     return date;
// }

// console.log(getLastDayOfMonth(2021, 9));













// function getSecondsToTomorrow() {
//     let nowDate = new Date();
//     let nowHour = nowDate.getHours();
//     let nowMinute = nowDate.getMinutes();
//     let sumMinute = nowMinute * 60;

//     let a = (24 - nowHour) * 3600;

//     let result = a + sumMinute;

//     return Math.round(result);
// }

// console.log(getSecondsToTomorrow()) 
















































// let user = {
//     name: 'Rasulbek',
//     age: 16,
//     skills: [
//         'HTML',
//         'CSS',
//         'Little bit JS'
//     ],
//     isAdmin: true,
//     wife: false
// }

// let json = JSON.stringify(user);
// let toObj = JSON.parse(json);

// console.log(toObj)






// let room = {
//     number: 11
// };

// let meetup = {
//     title: 'Conference',
//     participants: [
//         {
//             name: 'Rasulbek'
//         },
//         {
//             name: 'John'
//         }
//     ],
//     place: room
// };

// room.occupiedBy = meetup;

// console.log( JSON.parse(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'], 4)) )








// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Совещание",
//     occupiedBy: [{name: "Rasulbek"}, {name: "Pett"}],
//     place: room
//   };
  
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//     JSON.stringify(meetup, function(key, value) {
//         return (
//             (key != '' && value == meetup) ? undefined : value
//         )
//     })
// )




























































