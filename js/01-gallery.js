import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const newLink = galleryItems
  .map(
    (item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", newLink);

function showModal(event) {
  event.preventDefault();
  const imageValue = event.target.dataset.source;
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${imageValue}">
    </div>
`);

  instance.show();
}

gallery.addEventListener("click", showModal);

function closeModal(event) {
  if (event.code === "Escape") {
    const instance = basicLightbox.create((gallery.innerHTML = newLink));
    instance.close();
  }
}

document.addEventListener("keydown", closeModal);
