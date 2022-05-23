import './css/styles.css';
import countryCardTpl from './templates/country-card.hbs';
import API from './api-service';
import _ from 'lodash'

const DEBOUNCE_DELAY = 300;

const serchCountry = document.querySelector("#search-box");
const countryCard = document.querySelector(".country-info");

serchCountry.addEventListener("input", _.debounce(onInputEv, DEBOUNCE_DELAY));

function onInputEv (e) {
      const serch = e.target.value;

     API.fetchCountries(serch)
     .then(renderCountryList)
     .catch(onFetchError)
     .finally(() => form.reset());
    }

function renderCountryList(country) {
  const markup = countryCardTpl(country);
  countryCard.innerHTML = markup;
}

