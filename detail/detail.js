import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

button.addEventListener('click', () => {
    // get the id from URL
    const id = new URLSearchParams(window.location.search);

    // use the id to fetch the dog
    const dog = await getDog(id);

    // render the dog detail
    const dogDetailEl = renderDogDetail();
    dogDetailContainer.append(dogDetailEl);
});