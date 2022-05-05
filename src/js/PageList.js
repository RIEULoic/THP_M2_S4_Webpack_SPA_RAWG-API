import {APIKey} from './apikey.js';

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      const resultsContent = articles.map((article) => (
        `<article class="cardGame">
          <img src='${article.background_image}'>
          <h1>${article.name}</h1>
          <h4>${article.released}</h4>
          <h4>Score metacritic : ${article.metacritic}</h4>
          <p src='${article.platforms[0,1]}'></p>
          <p>Voir la page de <a href="#pagedetail/${article.id}">${article.name}</a>
          </p>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${APIKey}&page_size=9`, cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};


export { PageList };