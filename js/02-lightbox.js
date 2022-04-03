import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
  </div>`
  )
  .join(" ");

gallery.insertAdjacentHTML("afterbegin", markup);

function onImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    navText: ["<", ">"],
    captionsData: "alt",
    captionsPosition: "bottom",
    captionsDelay: 250,
  });
}

gallery.addEventListener("click", onImageClick);