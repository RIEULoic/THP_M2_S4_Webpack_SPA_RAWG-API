import {routes} from './js/routes.js';
import {PageList} from './js/PageList.js';
import './style/index.scss';

const form = document.getElementById('form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
  const searchInput = document.getElementById("searchInput").value;
  PageList(searchInput);
});

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split('/');

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || '';
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());