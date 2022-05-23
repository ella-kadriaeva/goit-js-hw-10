const BASE_URL = 'https://restcountries.com/v3.1/name/{name}';

function fetchCountry(name) {
  return fetch(`${BASE_URL}/name/${name}`).then(response =>
    response.json(),
  );
}

export default { fetchCountry };