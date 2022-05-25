import './css/styles.css';
import countryCardTpl from './templates/country-card.hbs';
import countryCardLst from './templates/country-card2.hbs';
import API from './api-service';
import _ from 'lodash';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 500;
const serchCountry = document.querySelector("#search-box");
const countryCard = document.querySelector(".country-info");

serchCountry.addEventListener("input", _.debounce(onInputEv, DEBOUNCE_DELAY));

function onInputEv (e) {
      let serch = e.target.value;
      let serchValue = checkSerchString (serch);
        
      API.fetchCountries(serchValue)
        .then(checkArrey)
        .catch(() => {
          Notiflix.Notify.failure('Oops, there is no country with that name');
          clearSerchForm();
          });

     }

function checkArrey(array) {  
  if(array.length > 10) {     
    return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.'); 
  }
  if(array.length > 1) { 
    return renderCountryLongList (array);
  }
return renderCountryList (array);
}
     

function renderCountryList (country) {
  const markup = countryCardTpl(country);
  return countryCard.innerHTML = markup;
}
function renderCountryLongList (country) {
  const markup = countryCardLst(country);
  return countryCard.innerHTML = markup;
}

function checkSerchString (stringCheck) {
  if(stringCheck === '') {
     return 
  }
  const checkedSerch = stringCheck.trim();
  return checkedSerch;
}

function clearSerchForm() {
  countryCard.innerHTML = '';
}
