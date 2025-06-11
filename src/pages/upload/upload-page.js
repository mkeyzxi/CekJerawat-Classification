import UploadLayout from '../../layouts/upload-layout.js';
import ConfirmationLayout from '../../layouts/confirmation-layout.js';
import QuestionLayoutList from '../../layouts/question-list.js';

export default class UploadPage {
  constructor(selector = '#app') {
    this.container = document.querySelector(selector);
    this.imageFile = null;
    this.imageSrc = null;
  }

  render() {
    this.renderUploadPage();
  }

  renderUploadPage() {
    const layout = new UploadLayout();
    const element = layout.render();
    this.container.replaceChildren(element);
    this.bindUploadEvents();
  }

  bindUploadEvents() {
    const input = document.querySelector('#inputGambar');
    const form = document.querySelector('#uploadForm');

    if (!input || !form) {
      console.error('Element input atau form tidak ditemukan');
      return;
    }

    input.addEventListener('change', (e) => {
      this.imageFile = e.target.files[0];
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!this.imageFile) {
        alert('Silakan pilih gambar terlebih dahulu!');
        return;
      }

      this.imageSrc = URL.createObjectURL(this.imageFile);
      this.renderConfirmationPage(this.imageSrc);
    });
  }

  renderConfirmationPage(imgSrc) {
    const layout = new ConfirmationLayout(imgSrc);
    const element = layout.render();
    this.container.replaceChildren(element);
    this.bindConfirmationEvents();
  }

  bindConfirmationEvents() {
    const ulangiBtn = document.querySelector('#ulangiBtn');
    const prosesBtn = document.querySelector('#prosesBtn');

    if (!ulangiBtn || !prosesBtn) {
      console.error('Tombol ulangi atau proses tidak ditemukan');
      return;
    }

    ulangiBtn.addEventListener('click', () => this.renderUploadPage());
    prosesBtn.addEventListener('click', () => this.renderQuestionPage());
  }

  renderQuestionPage() {
    const layout = new QuestionLayoutList(this.imageSrc);
    const element = layout.render();
    this.container.replaceChildren(element);
    layout.bindSubmit();
  }
}
