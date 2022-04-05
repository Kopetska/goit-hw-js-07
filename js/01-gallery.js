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

const instance = basicLightbox.create(
  `<img class="modal" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", closeModal);
    },
  },
  {
    onClose: (instance) => {
      window.removeEventListener("keydown", closeModal);
    },
  }
);

function showModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector(".modal").src = event.target.dataset.source;
  instance.show();
}

gallery.addEventListener("click", showModal);

function closeModal(event) {
  if (event.code === "Escape") {
    instance.close();
    return;
  }
}

window.addEventListener("keydown", closeModal);
