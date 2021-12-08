// import './CSS/style.css';
/* function fetchData() {
  fetch('https://dujour.squiz.cloud/developer-challenge/data')
    .then((response) =>
      console.log(
        'response:',
        response.json().then((json) => console.log(json))
      )
    )
    .catch((error) => console.log('error:', error));
}

fetchData();
 */
const getData = async () => {
  const response = await fetch(
    'https://dujour.squiz.cloud/developer-challenge/data'
  );
  const data = await response.json();
  console.log('data:', data);
};
getData();
const element = document.getElementById('data');
element.innerHTML = '<div>jakiś inny tekst</div>';
console.log(element.innerHTML);
