import './sass/main.scss';
Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.

var debounce = require('lodash.debounce');