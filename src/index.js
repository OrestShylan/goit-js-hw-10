import './css/styles.css';
import fetchCountry from './js/fetchCountry';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderCountries from './js/renderCountries';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountries, DEBOUNCE_DELAY));

function searchCountries(event) {
  let countryName = event.target.value.trim();
  if (countryName) {
    fetchCounry(countryName)
      .then(dataCountries => {
        renderCountries(dataCountries);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else {
    countryInfo.innerHTML = '';
    countryList.innerHTML = '';
  }
}
