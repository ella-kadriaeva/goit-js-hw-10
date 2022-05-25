const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/name/${name}?fields=name,flags,capital,population,languages`).then(response => {
   if(response.ok) {
         return response.json();
   }
    throw new Error('Error fetching data')
  });
}

export default { fetchCountries };