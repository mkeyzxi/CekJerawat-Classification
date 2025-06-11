import ImageStore from '../model/ImageStore.js';
import { postData } from '../model/ApiModel.js';

export default class QuestionLayoutList {
  render() {
    const wrapper = document.createElement('main');
    wrapper.className = 'flex flex-col items-center px-4';

    wrapper.innerHTML = `
      <h2 class="text-pink-400 font-bold text-lg mt-6 mb-4 text-center max-w-md">
        Silahkan Jawab Pertanyaan dibawah ini untuk hasil yang lebih akurat
      </h2>

      <form id="acneForm" class="bg-pink-300 shadow-customBox rounded-3xl pt-14 pb-12 px-6 max-w-3xl w-full mx-auto mt-10">
        <p class="text-white font-semibold text-sm mb-6 text-center max-w-xl mx-auto">
          Jawablah pertanyaan berikut dengan jujur
        </p>

        <div class="space-y-6 text-white text-sm">
          ${this.renderQuestions()}
        </div>

        <button type="submit"
          class="bg-[#7bc1cc] hover:bg-[#6aa9b4] text-white font-bold rounded-xl py-3 px-12 mt-10 block mx-auto text-base"
        >
          Kirim
        </button>
      </form>
    `;

    this.initEvent(wrapper);

    return wrapper;
  }

  bindSubmit() {
    const form = this.main.querySelector('#acneForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const file = ImageStore.get();
      if (!file) return alert("Gambar tidak tersedia.");

      const formData = new FormData(form);
      const data = {};
      formData.forEach((val, key) => data[key] = val);

      try {
        await postData(file, data); // kirim file asli
        alert('Data berhasil dikirim!');
        ImageStore.clear();
      } catch (err) {
        alert('Gagal mengirim data.');
        console.error(err);
      }
    });
  }
}
