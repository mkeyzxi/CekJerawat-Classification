import { postData } from '../model/ApiModel.js';
import ImageStore from '../model/ImageStore.js'; // pastikan ini di-import

export default class QuestionLayoutList {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;
  }

  render() {
    const img = this.imgSrc ? `<img src="${this.imgSrc}" class="mx-auto rounded-full w-32 h-32 mb-6" alt="Foto Preview">` : '';
    setTimeout(() => this.bindSubmit(), 0);
    return `
      <main class="flex flex-col items-center px-4">
        <h2 class="text-pink-400 font-bold text-lg mt-6 mb-4 text-center">Silahkan Jawab Pertanyaan</h2>
        <form id="acneForm" class="bg-pink-300 rounded-3xl p-6 max-w-2xl w-full">
          ${img}
          <p class="text-white mb-6 text-center">Jawablah pertanyaan berikut dengan jujur</p>
          ${this.getQuestionsHtml()}
          <button type="submit" class="mt-6 bg-[#7bc1cc] text-white rounded-xl py-2 px-6 block mx-auto">Kirim</button>
        </form>
      </main>
    `;
  }

  getQuestionsHtml() {
    const pertanyaan = [
      ["komedo_hitam", "1. Apakah terlihat komedo hitam di permukaan kulit?"],
      ["titik_putih", "2. Apakah terdapat titik putih kecil?"],
      ["berisi_nanah", "3. Apakah jerawat berisi nanah?"],
      ["benjolan_merah", "4. Apakah muncul benjolan merah tanpa nanah?"],
      ["benjolan_besar", "5. Apakah benjolan cukup besar atau dalam?"],
      ["nyeri", "6. Apakah terasa nyeri saat disentuh?"],
      ["merah", "7. Apakah area sekitar jerawat terlihat kemerahan?"],
      ["menyatu", "8. Apakah jerawat menyatu membentuk area luas?"],
      ["tekstur_keras", "9. Apakah tekstur jerawat terasa keras saat disentuh?"]
    ];
    return pertanyaan.map(([name, label]) => `
      <div class="mb-4 text-white">
        <p>${label}</p>
        <label><input type="radio" name="${name}" value="ya" required /> Ya</label>
        <label class="ml-4"><input type="radio" name="${name}" value="tidak" /> Tidak</label>
      </div>
    `).join('');
  }

  bindSubmit() {
    const form = document.querySelector('#acneForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Ambil data dari form radio
      const formData = new FormData(form);
      const answers = {};
      formData.forEach((value, key) => {
        answers[key] = value;
      });

      // Ambil file dari ImageStore
      const imageFile = ImageStore.get();
      if (!imageFile) {
        alert('Gambar tidak ditemukan. Silakan unggah ulang.');
        return;
      }

      try {
        await postData(imageFile, answers);
        alert('Data berhasil dikirim!');
        window.location.hash = '#/hasil'; // arahkan ke halaman hasil jika ada
      } catch (err) {
        console.log(imageFile,answers )
        alert('Gagal mengirim data.');
        console.error(err);
      }
    });
  }
}



