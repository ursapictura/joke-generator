// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getJoke from '../components/getJoke';
import renderToDom from '../utils/renderToDom';
import { showJoke, showPunchline } from './showJoke';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>HELLO! Welcome to the Joke Generator!</h1>
    <div id="joke-container">
      <div id="joke"></div>
      <div id="punchline"></div>
      <div id="btn-container">
        <button class="btn btn-danger" id="joke-btn">Get a Joke!</button><br />
      </div>
    </div>
    <hr />
  `;

  document
    .querySelector('#btn-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('joke-btn')) {
        renderToDom('#btn-container', '<button class="btn btn-danger" id="punchline-btn">Get the Punchline!</button><br />');
        getJoke().then((response) => {
          showJoke(response);
          showPunchline(response);
          console.warn(getJoke());
          document.querySelector('#punchline').style.display = 'none';
        });
      }
      if (e.target.id.includes('punchline-btn')) {
        document.querySelector('#punchline').style.display = 'block';
        renderToDom('#btn-container', '<button class="btn btn-danger" id="joke-btn">Next Joke!</button><br />');
      }
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
