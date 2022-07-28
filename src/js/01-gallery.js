// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const imgGallery = document.querySelector('.gallery');

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('');
};

imgGallery.insertAdjacentHTML('beforeend', createGallery(galleryItems));
// console.log(galleryItems);
const gallery = new SimpleLightbox('.gallery__item', { captionSelector: 'img', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });
console.log(galleryItems);
