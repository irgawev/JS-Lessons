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




























































// function pow(x, n) {
//   return (n == 1) ? x : x * pow(x, n - 1);
// }

// console.log(pow(3, 3));






// function sumTo(arg) {
//   let nums = [];
//   let result;

//   for (let i = arg; i > 0; i--) {
//     nums.push(i);
//     result = nums.reduce((nums, current) => nums * current)
//   }

//   return result;
// }

// console.log(sumTo(5));





// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   alert(list.value); // выводим текущий элемент
// }

// printList(list);

























































// function sumAll(...args) {
//   let result = 0;

//   for (let value of args) result += value;

//   return result;
// }

// console.log(sumAll(1,2,2))




































// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// console.log(sum(1)(9));








// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     for (let i = (a - 1); i < b); i++) {
//         console.log(arr[i]);
//     }
// }

// inBetween(1, 9);









// let users = [
//     { name: "John", age: 18, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Betty", age: 18, surname: "Johnson" },
//     { name: "Ann", age: 18, surname: "Hathaway" }
// ];

// function byField(arg) {
//     return (a, b) => a[arg] > b[arg] ? 1 : -1;
// }

// users.sort(byField('age'));




































// let requestCommand = prompt('Please write a any command for JS', '');
// let func = new Function(requestCommand);
// func()


































// let timerId = setTimeout(function func() {
//     alert('Hello');
//     setTimeout(func, 1000);
// }, 1000);






// function printNumbers(from, to) {
//     let current = from;

//     let printResult = setInterval(function printNum() {
//         console.log(current);
//         if (current == to) clearInterval(printResult);
//         current++;
//     }, 1000);
// }

// printNumbers(1, 3);






// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }




















































// function slow(key, ...value) {
//     return key;
// }

// function toCache() {
//     let cache = new Map();

//     return (key, ...value) => {
//         if (cache.has(key)) {
//             return cache.get(key);
//         }

//         if (value == '' || value == undefined) {
//             return 'Please write a value!';
//         }

//         return cache.set(key, value);
//     }
// }

// slow = toCache(slow);








// function sayHi() {
//     console.log(this.name);
// }

// let user = {
//     name: 'Rasulbek',
//     age: 16
// }








// function slow(key, ...values) {
//     return console.log(key);
// }

// function toCache() {
//     let cache = new Map();

//     return (key, ...values) => {
//         if (cache.has(key)) return cache.get(key);
//         if (values == undefined || values == '') return 'Write a value!';

//         return cache.set(key, values);
//     }
// }

// slow = toCache(slow);










































































// let user = {
//     name: 'Rasulbek',
    
//     sayHi() {
//         console.log(`Hello ${this.name}!`);
//     }
// }

// let sayHi = user.sayHi.bind(user);

// setTimeout(sayHi, 2000);





// function mul(a, b) {
//     return console.log(a * b);
// }

// let triple = mul.bind(null, 3);

// triple(1e5);





// let message = {};

// message.from = prompt('What your the name?', '');
// message.text = prompt('PLease write a text for send', '');

// function writeMessage() {
//     let from = this.from;
//     let text = this.text;
//     let date = new Date();

//     return (`[${date.getHours()}:${date.getMinutes()}] ${from}: ${text}`);
// }

// let showMessage = writeMessage.bind(message);

// console.log(showMessage());

















































// let group = {
//     title: 'Hello',
//     students: ['Rasulbek', 'Emma', 'Pett'],

//     showList() {
//         this.students.forEach(student => console.log(`${this.title} ${student}`));
//     }
// }

// group.showList();















































// let user = {
//     name: 'Rasulbek'
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(JSON.stringify(descriptor, null, 1))






// let user = {
//     name: 'Rasulbek'
// };

// Object.defineProperty(user, 'name',{
//     value: 'John',
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// console.log(descriptor);





















































// let user = {
//     name: 'Rasulbek',
//     surname: 'Irgashev',
// };

// Object.defineProperty(user, 'fullName', {
//     get() {
//         return `${this.name} ${this.surname}`;
//     },
//     set(value) {
//         [this.name, this.surname] = value.split(' ');
//     }
// });

// user.fullName = 'John Smith';

// console.log(user.fullName);








// let user = {};

// Object.defineProperty(user, 'userName', {
//     get() {
//         return this._userName;
//     },
//     set(value) {
//         if (value.length < 3) {
//             return ('Username должен быть более 3 символов');
//         }
//         this._userName = value;
//     },
    
//     configurable: false
// });

// console.log(user);








// function User(name, birthday) {
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this, 'age', {
//         get() {
//             let todayYear = new Date().getFullYear();
//             return todayYear - birthday.getFullYear();
//         }
//     })
// }

// let rasul = new User('Rasulbek', new Date(2004, 04,30));

// console.log(rasul.age);























































// let user = {
//     name: "John",
//     surname: "Smith",
  
//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     },
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   let admin = {
//     __proto__: user,
//     isAdmin: true
//   };
  
//   console.log(admin.fullName); // John Smith (*)
  
//   // срабатывает сеттер!
//   admin.fullName = "Alice Cooper"; // (**)
//   console.log(admin.name); // Alice
//   console.log(admin.surname); // Cooper







// // методы animal
// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
  
//   let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
//   };
  
//   // модифицирует rabbit.isSleeping
//   rabbit.sleep();
  
//   alert(rabbit.isSleeping); // true
//   alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)







// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   // Object.keys возвращает только собственные ключи
//   alert(Object.keys(rabbit)); // jumps
  
//   // for..in проходит и по своим, и по унаследованным ключам
//   for(let prop in rabbit) alert(prop); // jumps, затем eats







// let animal = {
//     eats: true
//   };
  
//   let rabbit = {
//     jumps: true,
//     __proto__: animal
//   };
  
//   for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);
  
//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // Inherited: eats
//     }
//   }








// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     stomach: [],
//     __proto__: hamster
//   };
  
//   let lazy = {
//     stomach: [],
//     __proto__: hamster
//   };
  
//   // Этот хомяк нашёл еду
//   speedy.eat("apple");
//   console.log( speedy.stomach ); // apple
  
//   // У этого хомяка тоже есть еда. Почему? Исправьте
//   console.log( lazy.stomach ); // apple






















































// function Rabbit(name) {
//     this.name = name;
//     console.log(name);
// }

// let rabbit = new Rabbit('Rabby');

// let rabbit1 = rabbit.constructor('Raccy');






// function User(username) {
//     this._username = username;
//     this._isAdmin = false;
// };

// let rasul = new User('Rasulbek');

// for (let key in rasul) {
//     console.log(key);
// }






// function User(name) {
//     this.name = name;
// };

// User.prototype.sayHi = function() {return `Hello ${this.name}!`};

// let rasul = new User('Rasulbek');




// ??????////???//???/??/??/??/??/??/??//////?/??//????///????/?????????///???/?/??????///?//?/??//?????////?/??/?/??//?//?///////??/?
// let user = {
//     name: 'Rasulbek'
// };

// let user1 = {
//     name: 'Emma'
// };

// user.__proto__.sayName = function() {return this.name};

// console.log(user);
// console.log(user1);




// let user = {
//     _lastName: 'Irgashev'
// };

// function User(name) {
//     this._name = name;
// } User.prototype = user;

// let rasul = new User('Rasulbek');





// let obj = {
//     0: 'hello',
//     1: 'world',
//     length: 2
// };

// obj.joinn = Array.prototype.join;
// console.log(obj.joinn(' '));






// function sum(a, b) {
//     console.log(a + b);
// };

// Function.prototype.defer = function(ms) {
//     setTimeout(this, ms);
// };

// sum.defer(2000)(1,2);





// let obj = Object.create(null);
// let key = prompt('Key:', '__proto__');
// obj[key] = 'some value';

// console.log(obj[key]);






// let user = {
//     name: 'Rasulbek'
// };

// let rasul = Object.create(user);
// let getName = prompt('PLease write ypur name', '');

// (getName == '' || getName == null || getName == undefined) ? Object.setPrototypeOf(rasul, {name: null})
//                                                            : Object.setPrototypeOf(rasul, {name: getName});

// let descriptor = Object.getOwnPropertyDescriptor(rasul.__proto__, 'name');

// console.log(JSON.stringify(descriptor, null, 4));




























































// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age  = age;
//     }

//     sayHi() {
//         console.log('name: ' + this.name + ' age: ' + this.age)
//     }
// }

// let rasul = new User('Rasulbek', 16);

// console.log(JSON.stringify(rasul, null, 4))








// function makeClass(phrase) {
//     return class {
//         sayHi() {
//             return phrase;
//         }
//     }
// }

// let User = makeClass('r1');

// console.log(new User().sayHi());







// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             return console.log('Имя слишком короткое');
//         }

//         this._name = value;
//     }
// }

// let rasul = new User('r1');







// class Animal {
//     constructor(name) {
//         this.speed = null;
//         this.name  = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         return `Speed of ${this.name}: ${this.speed}`;
//     }

//     stop() {
//         this.speed = null;
//         return console.log(`${this.name} has been stopped`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }

//     hide() {
//         console.log(`${this.name} hidding`);
//     }

//     stop() {
//         setTimeout(() => super.stop(), 2000);
//         this.hide();
//     }
// }

// let rabbit = new Animal('Hungry Rabbit');
// let catty  = new Cat('Catty', 10);






// function f(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase);
//         }
//     }
// }

// class User extends f('Hello!') {};

// let rasul = new User();






// class User {
//     static staticMethod() {
//         return (this === User);
//     }
// }







// class Rabbit extends Object {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
//   }
  
//   let rabbit = new Rabbit("Кроль");
  
//   alert( rabbit.hasOwnProperty('name') );







// class User {
//     constructor(name) {
//         this._name = name;
//     }
//     static sayHi() {
//         console.log(this.name)
//     }
// }

// class NewUser extends User {
// }

// let rasul = User.sayHi();






// class CoffeeMachine {
//     _waterAmount = null;

//     // set & get of _waterAmount

//     set waterAmount(value) {
//         if (value <= 0) throw new Error('Нужно налить больше воды!');
//         this._waterAmount = value;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     // set & get of _power

//     set power(value) {
//         return console.log(`Мощность уже установлена на ${this._power}W!`)
//     }

//     get power() {
//         return this._power;
//     }

//     constructor(power) {
//         this._power = power;
//     }
// }

// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 1;







// class PowerArr extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }

//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new PowerArr(1, 2, 3, 10, 55);
// let filteredArr = arr.filter(item => item >= 10);

// console.log(arr);






// class Animal {
//     static [Symbol.hasInstance](Obj) {
//         if (Obj.canEat) return true;
//     }
// }

// let rabbit = {canEat: true};
// let obj = {canEat: true};
// console.log(obj instanceof Animal);
// console.log(rabbit instanceof Animal);








// let objToString = Object.prototype.toString;
// let arr = [];

// console.log(objToString.call(arr));







// let user = {
//     [Symbol.toStringTag]: "User"
// };

// console.log( {}.toString.call(user) );








// let sayMixin = {
//     say(phrase) {
//       console.log(phrase);
//     }
//   };
  
//   let sayHiMixin = {
//     __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)
  
//     sayHi() {
//       // вызываем метод родителя
//       super.say(`Привет, ${this.name}`); // (*)
//     },
//     sayBye() {
//       super.say(`Пока, ${this.name}`); // (*)
//     }
//   };
  
//   class User {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   // копируем методы
//   Object.assign(User.prototype, sayHiMixin);
  
//   // теперь User может сказать Привет
//   new User("Вася").sayHi(); // Привет, Вася!












































































// try {
//     console.log('Helloo!');
//     WTF
//     console.log("Byee!");
// } catch(err) {
//     console.log(err.stack)

//     if(err.name == "ReferenceError") {
//         console.log("r8")
//     }
// }






// let json = '{ "age": 30 }'; // данные неполны
// try {

//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени");
//   }

//   blabla(); // неожиданная ошибка

//   console.log( user.name );

// } catch(err) {

//   if (err.name == "SyntaxError") {
//     console.log( "JSON Error: " + err.message );
//   } else {
//     throw err; // проброс (*)
//   }

// }








// class Error {
//     constructor(message) {
//         this.name    = 'ERROR';
//         this.message = message;
//         this.stack   = '<стек вызовов>';
//     }
// }

// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// function readUser(json) {
//     let user = JSON.parse(json);

//     if(!user.name) {
//         throw new ValidationError('Havn\'t name');
//     }
//     if(!user.age) {
//         throw new ValidationError('Havn\'t age');
//     }

//     return user;
// }

// try {
//     let user = readUser('{ "age": 25 }');
//   } catch (err) {
//     if (err instanceof ValidationError) {
//         console.log(err.stack);
//     } else if (err instanceof SyntaxError) { // (*)
//         console.log(err.stack);
//     } else {
//         throw err; 
//     }
// }