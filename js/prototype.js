'use strict';

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const userProto = new User();

// Получить полное имя пользователя
userProto.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype = userProto;

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

console.group("Все пользователи");
console.table(users);
console.groupEnd();

// Массив полных имен лиц женского пола школьного возраста
function isSchoolAgeGirl(person) {
  return !person.isMale && person.age >= 6 && person.age <= 18;
}

function getFullNames(person) {
  return console.log(person.getFullName());
}

console.group("Имена лиц женского пола школьного возраста");
users.filter(isSchoolAgeGirl).map(getFullNames);
console.groupEnd();

// Проверка наличия пользователя с почтой useremail99@gmail.com
function hasEmail(person) {
  return person.email === "useremail99@gmail.com";
}

console.group("Проверка наличия пользователя с почтой useremail99@gmail.com");
console.log(users.some(hasEmail));
console.groupEnd();

// Подписаны ли все пользователи
function isSubscribed(person) { 
  return person.isSubscribed;   
}

console.group("Подписаны ли все пользователи");
console.log(users.every(isSubscribed));
console.groupEnd();