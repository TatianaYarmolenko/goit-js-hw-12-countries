import  API from './fetchCountries';

import countryCard from '../templates/countryCard.hbs';
import countryList from '../templates/countryList.hbs';

import { alert } from '@pnotify/core/dist/PNotify.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
import { defaults } from '@pnotify/core'
defaults.delay = '3000'
defaults.width = '400px'
defaults.minHeight = '56px'

const inputCountry = document.querySelector(".countryNameInput");
const card = document.querySelector('.card')
const debounce = require('lodash.debounce');

function clearContainer() {
  card.innerHTML = '';
}

function renderCountryCard(data) {
    const markup = countryCard(data);
    card.insertAdjacentHTML('beforeend', markup);
}

function checkContries(data) {
            if (data.length === 1) {
                renderCountryCard(data)
            }
            if (data.length > 10) {
                return alert({ text: 'Too many matches found. Please enter a more specific query!' })
            }
            if (data.length >=2 && data.length < 10 ) {
                card.innerHTML = countryList(data)
            }
}
function onSearch(e) {
    clearContainer();
    const searchQuery = e.target.value;
    e.preventDefault();
    API.fetchCountries(searchQuery).then(checkContries);
   }

inputCountry.addEventListener('input', debounce(onSearch, 500));