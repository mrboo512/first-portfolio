class GallerySlider {
    #length;
    #index;
    constructor(galleryEl) {
        this.galleryBoxes = [...galleryEl.querySelectorAll(".gallery-box")];
        this.gallerySlider = document.querySelector(".gallery-slider");
        this.indexEl = this.gallerySlider.querySelector("span.index");
        this.lengthEl = this.gallerySlider.querySelector("span.length");
        this.#length = this.galleryBoxes.length;
        this.#index = 0;
        this.init();
    }
    init() {
        this.galleryBoxes.forEach((box) => {
            box.addEventListener("click", () => {
                let img = box.querySelector("img");
                this.openGallery(img);
            });
        });
        this.gallerySlider.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "prev-btn":
                    this.prev();
                    break;

                case "next-btn":
                    this.next();
                    break;

                case "image":
                    this.next();
                    break;

                default:
                    this.closeGallery();
                    break;
            }
        });
    }
    openGallery(img) {
        this.showImage(img);
        this.gallerySlider.classList.add("active");
        document.body.classList.add("gallery-active");
    }
    showImage(img = this.galleryBoxes[this.#index].querySelector("img")) {
        this.gallerySlider.querySelector("img").src = img.src;
        this.showInfo();
    }
    next() {
        this.#index = this.#index === this.#length - 1 ? 0 : this.#index + 1;
        this.showImage();
    }
    prev() {
        this.#index = this.#index === 0 ? this.#length - 1 : this.#index - 1;
        this.showImage();
    }
    closeGallery() {
        this.gallerySlider.classList.remove("active");
        document.body.classList.remove("gallery-active");
    }
    showInfo() {
        this.indexEl.textContent = this.#index + 1;
        this.lengthEl.textContent = this.#length;
    }
}

const gallerySliderEl = document.querySelector(".projects");
let gallerySlider = new GallerySlider(gallerySliderEl);
console.log(gallerySlider);
