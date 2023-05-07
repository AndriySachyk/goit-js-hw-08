// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/01-gallery.css"


const listGalleryUl = document.querySelector('.gallery');
const itemsGallery = createGalleryItem(galleryItems);

listGalleryUl.insertAdjacentHTML('beforeend', itemsGallery);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join('');
}

let sliderGallery = new SimpleLightbox('.gallery li a', {
  captionsData: 'alt',
  captionDelay: 250,
});


listGalleryUl.style.listStyle = "none"