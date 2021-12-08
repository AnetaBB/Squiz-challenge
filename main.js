const listItems = {};
const getData = async () => {
  const response = await fetch(
    'https://dujour.squiz.cloud/developer-challenge/data'
  );
  const data = await response.json();

  listItems.data = data;
  return data;
};

const makeList = async () => {
  const data = await getData();
  console.log('data:', data);
  var html = '<ul>';
  data.map((item) => {
    html =
      html +
      `<li key=${item.id}>
      name: ${item.name},&nbsp;
      country: ${item.country},&nbsp;
      industry: ${item.industry},&nbsp;
      numberOfEmployees: ${item.numberOfEmployees}
      </li>`;
  });
  var html = html + '</ul>';
  updateDOM('data', html);
};
makeList();

const updateDOM = (id, html) => {
  const element = document.getElementById(id);
  element.innerHTML = html;
};
