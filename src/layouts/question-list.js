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
 <main class="flex flex-col items-center px-4 py-8 min-h-screen bg-gradient-to-b from-[#fdf2f8] to-[#fce7f3] mt-15">
<h2 class="text-center text-[#FF90BB] text-xl sm:text-2xl font-bold mb-8 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
				Silahkan Jawab  
				<span class="text-[#8ACCD5] font-semibold">Pertanyaan</span>
			</h2>

  <form id="acneForm" class="bg-gradient-to-br from-[#FF90BB] to-pink-400 shadow-2xl rounded-3xl p-8 max-w-2xl w-full border border-white/30 backdrop-blur-md">
    ${img}
    <p class="text-white text-lg mb-6 text-center font-medium">
      Jawablah pertanyaan berikut dengan jujur
    </p>

    ${this.getQuestionsHtml()}

    <button
      type="submit"
      class="mt-8 bg-[#7bc1cc] hover:bg-[#63a9b3] transition-colors text-white text-sm font-semibold rounded-xl py-3 px-8 shadow-md hover:shadow-lg mx-auto block">
      Kirim
    </button>
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



