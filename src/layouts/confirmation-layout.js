import ImageStore from '../model/ImageStore.js';
import QuestionLayoutList from './question-list.js';

export default class ConfirmationLayout {
  render() {
    setTimeout(() => this.bindEvents(), 0); // Pastikan setelah render
    const file = ImageStore.get();
    const imgUrl = file ? URL.createObjectURL(file) : '';
    return `
     <main class="flex-grow flex flex-col items-center px-6 text-center  max-w-xl mx-auto h-screen justify-center">
       <h2 class="text-center text-pink-400 text-lg font-bold mb-4 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
        Apakah Kamu Sudah Yakin dengan Gambar ini ?
       </h2>
       <p class="text-[#8ACCD5] text-sm md:text-base mb-8">
        Tampilkan foto terbaikmu demi hasil yang memuaskan
       </p>
       <div class="bg-pink-300 rounded-3xl p-6 flex justify-center items-center w-64 h-64 mb-8">
         <img src="${imgUrl}" alt="Close-up photo..." class="rounded-full object-cover w-44 h-44" height="200"  width="200"/>
       </div>
       <div class="flex space-x-8 w-full max-w-xs justify-center">
        <button id="buttonUlangi" class="bg-[#8ACCD5] text-white font-semibold rounded-lg py-2 px-5 md:py-3 md:px-8 hover:bg-sky-500 transition">
         Ulangi
        </button>
        <button id="buttonProses" class="bg-[#8ACCD5] text-white font-semibold rounded-lg py-2 px-5 md:py-3 md:px-8 hover:bg-sky-500 transition">
         Proses
        </button>
       </div>
     </main>
    `;
  }

  bindEvents() {
    // const [btnUlangi, btnProses] = document.querySelectorAll('button');
    const btnUlangi = document.getElementById('buttonUlangi')
    const btnProses = document.getElementById('buttonProses')
    console.log( btnUlangi,btnProses)
    btnUlangi.addEventListener('click', () => {
      ImageStore.clear();
      window.location.hash = '#/unggah';
    });

    btnProses.addEventListener('click', () => {
      window.location.hash = '#/pertanyaan';
    });
  }
}
