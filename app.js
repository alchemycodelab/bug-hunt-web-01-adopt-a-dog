import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list');

button.addEventListener('click', async() => {
    // fetch all dogs
    const dogs = getDogs();

    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);
      // render the dog detail
    }
});