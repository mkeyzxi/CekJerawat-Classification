// src/model/ImageStore.js
class ImageStore {
  static file = null;

  static set(file) {
    ImageStore.file = file;
  }

  static get() {
    return ImageStore.file;
  }

  static clear() {
    ImageStore.file = null;
  }
}

export default ImageStore;
