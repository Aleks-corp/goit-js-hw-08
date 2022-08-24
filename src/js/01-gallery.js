// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

function galleryContainerMarkupMaker(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
    )
    .join('');
}

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML(
  'beforeend',
  galleryContainerMarkupMaker(galleryItems)
);
const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  overlayOpacity: 0.75,
});
