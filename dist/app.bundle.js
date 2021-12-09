/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("const filters = {\r\n  country: 'all',\r\n  industry: 'all',\r\n  nameOrder: 'none',\r\n  employeesOrder: 'none',\r\n};\r\nconst onNameOrderChange = ({ target }) => {\r\n  filters.nameOrder = target.value;\r\n  filters.employeesOrder = 'none';\r\n  makeList();\r\n};\r\nconst onEmployeesOrderChange = ({ target }) => {\r\n  filters.employeesOrder = target.value;\r\n  filters.nameOrder = 'none';\r\n  makeList();\r\n};\r\n\r\ndocument.getElementById('name').addEventListener('change', onNameOrderChange);\r\ndocument\r\n  .getElementById('employees')\r\n  .addEventListener('change', onEmployeesOrderChange);\r\n\r\nconst getData = async () => {\r\n  const response = await fetch(\r\n    'https://dujour.squiz.cloud/developer-challenge/data'\r\n  );\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst sortName = (data) => {\r\n  if (filters.nameOrder === 'none') return data;\r\n\r\n  if (filters.nameOrder === 'asc') {\r\n    return data.sort((a, b) => {\r\n      if (a.name < b.name) return -1;\r\n      if (a.name > b.name) return 1;\r\n      return 0;\r\n    });\r\n  }\r\n  return data.sort((a, b) => {\r\n    if (a.name > b.name) return -1;\r\n    if (a.name < b.name) return 1;\r\n    return 0;\r\n  });\r\n};\r\nconst sortEmployees = (data) => {\r\n  if (filters.employeesOrder === 'none') return data;\r\n\r\n  if (filters.employeesOrder === 'asc') {\r\n    return data.sort((a, b) => a.numberOfEmployees - b.numberOfEmployees);\r\n  }\r\n  return data.sort((a, b) => b.numberOfEmployees - a.numberOfEmployees);\r\n};\r\n\r\nconst makeList = async () => {\r\n  const data = await getData();\r\n  const filteredData = data.filter(\r\n    (item) =>\r\n      (item.country === filters.country || filters.country === 'all') &&\r\n      (item.industry === filters.industry || filters.industry === 'all')\r\n  );\r\n\r\n  var html = '<ul>';\r\n  sortEmployees(sortName(filteredData)).map((item) => {\r\n    html =\r\n      html +\r\n      `<li key=${item.id}>\r\n      name: ${item.name},&nbsp;\r\n      country: ${item.country},&nbsp;\r\n      industry: ${item.industry},&nbsp;\r\n      numberOfEmployees: ${item.numberOfEmployees}\r\n      </li>`;\r\n  });\r\n  var html = html + '</ul>';\r\n  updateDOM('data', html);\r\n  collectCountries(data);\r\n  collectIndustries(data);\r\n  document.getElementById('name').value = filters.nameOrder;\r\n  document.getElementById('employees').value = filters.employeesOrder;\r\n};\r\nmakeList();\r\n\r\nconst updateDOM = (id, html) => {\r\n  const element = document.getElementById(id);\r\n  element.innerHTML = html;\r\n};\r\n\r\nconst collectCountries = (data) => {\r\n  const countries = new Set();\r\n  data.map((item) => {\r\n    countries.add(item.country);\r\n  });\r\n  var html = `<option value=\"all\"> </option>`;\r\n  Array.from(countries)\r\n    .sort()\r\n    .map((country) => {\r\n      html = html + `<option value=\"${country}\">${country}</option>`;\r\n    });\r\n  const element = document.getElementById('countries');\r\n  element.innerHTML = html;\r\n  element.removeEventListener('change', onCountryChange);\r\n  element.addEventListener('change', onCountryChange);\r\n  element.value = filters.country;\r\n};\r\nconst onCountryChange = ({ target }) => {\r\n  filters.country = target.value;\r\n  makeList();\r\n};\r\n\r\nconst collectIndustries = (data) => {\r\n  const industries = new Set();\r\n  data.map((item) => {\r\n    industries.add(item.industry);\r\n  });\r\n  var html = `<option value=\"all\"> </option>`;\r\n  Array.from(industries)\r\n    .sort()\r\n    .map((industry) => {\r\n      html = html + `<option value=\"${industry}\">${industry}</option>`;\r\n    });\r\n  const element = document.getElementById('industries');\r\n  element.innerHTML = html;\r\n  element.removeEventListener('change', onIndustryChange);\r\n  element.addEventListener('change', onIndustryChange);\r\n  element.value = filters.industry;\r\n};\r\nconst onIndustryChange = ({ target }) => {\r\n  filters.industry = target.value;\r\n  makeList();\r\n};\r\n\n\n//# sourceURL=webpack://squiz-challenge/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;