const filters = {
  country: 'all',
  industry: 'all',
  nameOrder: 'none',
  employeesOrder: 'none',
};

const onNameOrderChange = ({ target }) => {
  filters.nameOrder = target.value;
  filters.employeesOrder = 'none';
  makeList();
};

const onEmployeesOrderChange = ({ target }) => {
  filters.employeesOrder = target.value;
  filters.nameOrder = 'none';
  makeList();
};

document.getElementById('name').addEventListener('change', onNameOrderChange);
document
  .getElementById('employees')
  .addEventListener('change', onEmployeesOrderChange);

const getData = async () => {
  const response = await fetch(
    'https://dujour.squiz.cloud/developer-challenge/data'
  );
  const data = await response.json();
  return data;
};

const sortName = (data) => {
  if (filters.nameOrder === 'none') return data;

  if (filters.nameOrder === 'asc') {
    return data.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  }
  return data.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
  });
};
const sortEmployees = (data) => {
  if (filters.employeesOrder === 'none') return data;

  if (filters.employeesOrder === 'asc') {
    return data.sort((a, b) => a.numberOfEmployees - b.numberOfEmployees);
  }
  return data.sort((a, b) => b.numberOfEmployees - a.numberOfEmployees);
};

const makeList = async () => {
  const data = await getData();
  const filteredData = data.filter(
    (item) =>
      (item.country === filters.country || filters.country === 'all') &&
      (item.industry === filters.industry || filters.industry === 'all')
  );

  let html = '<ul>';
  sortEmployees(sortName(filteredData)).map((item) => {
    html =
      html +
      `<li key=${item.id}>
      name: ${item.name},&nbsp;
      country: ${item.country},&nbsp;
      industry: ${item.industry},&nbsp;
      numberOfEmployees: ${item.numberOfEmployees}
      </li>`;
  });
  let html = html + '</ul>';
  updateDOM({ id: 'data', html });
  collectCountries(data);
  collectIndustries(data);
  document.getElementById('name').value = filters.nameOrder;
  document.getElementById('employees').value = filters.employeesOrder;
};
makeList();

const updateDOM = ({ id, html }) => {
  const element = document.getElementById(id);
  element.innerHTML = html;
};

const collectCountries = (data) => {
  const countries = new Set();
  data.map((item) => {
    countries.add(item.country);
  });
  let html = `<option value="all"> </option>`;
  Array.from(countries)
    .sort()
    .map((country) => {
      html = html + `<option value="${country}">${country}</option>`;
    });
  const element = document.getElementById('countries');
  element.innerHTML = html;
  element.removeEventListener('change', onCountryChange);
  element.addEventListener('change', onCountryChange);
  element.value = filters.country;
};
const onCountryChange = ({ target }) => {
  filters.country = target.value;
  makeList();
};

const collectIndustries = (data) => {
  const industries = new Set();
  data.map((item) => {
    industries.add(item.industry);
  });
  let html = `<option value="all"> </option>`;
  Array.from(industries)
    .sort()
    .map((industry) => {
      html = html + `<option value="${industry}">${industry}</option>`;
    });
  const element = document.getElementById('industries');
  element.innerHTML = html;
  element.removeEventListener('change', onIndustryChange);
  element.addEventListener('change', onIndustryChange);
  element.value = filters.industry;
};
const onIndustryChange = ({ target }) => {
  filters.industry = target.value;
  makeList();
};
