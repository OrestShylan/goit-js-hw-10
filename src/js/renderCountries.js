import { Notify } from 'notiflix';
export default function renderCountries(dataCountries) {
  const countryList = document.querySelector('.country-list');
  const countryInfo = document.querySelector('.country-info');
  let quantityCountries = dataCountries.length;
  let countryItems = [];
  let currentCountry = dataCountries[0];

  if (quantityCountries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  } else if (quantityCountries >= 2 && quantityCountries <= 10) {
    dataCountries.map(country => {
      countryItems.push(`
        <li class="wrap-flag_item">
          <img src='${country.flags.svg}' alt='' width=40 class="flags"/>
          <span>${country.name.official}</span>
        </li>`);
    });
    countryInfo.innerHTML = '';
    countryList.innerHTML = countryItems;
  } else {
    countryInfo.innerHTML = `
          <div class="wrap_flag">
            <img src='${
              currentCountry.flags.svg
            }' alt='' class="flags" width=40 />
          <span class="capital">${currentCountry.name.official}</span>
        </div>
            <p>Capital: ${currentCountry.capital}</p>
            <p>Population: ${currentCountry.population}</p>
            <p>Languages: ${Object.values(currentCountry.languages).join(
              ', '
            )}</p>
        
    `;
    countryList.innerHTML = '';
  }
}
