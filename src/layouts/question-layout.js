// import { postData } from '../model/ApiModel.js';

// export default class QuestionLayoutList {
//   render() {
//     return `
//       <main class="flex flex-col items-center px-4">
//         <h2 class="text-pink-400 font-bold text-lg mt-6 mb-4 text-center max-w-md">
//           Silahkan Jawab Pertanyaan dibawah ini untuk hasil yang lebih akurat
//         </h2>

//         <form id="acneForm" class="relative bg-pink-300 shadow-customBox rounded-3xl pt-14 pb-12 px-12 max-w-3xl w-full mx-auto sm:px-6 mt-10">
//           <p class="text-white font-semibold text-sm mb-6 text-center max-w-xl mx-auto">
//             Jawablah pertanyaan berikut dengan jujur
//           </p>

//           <div class="space-y-6 text-white text-sm">
//             ${this.createQuestion("komedo_hitam", "1. Apakah terlihat komedo hitam di permukaan kulit?")}
//             ${this.createQuestion("titik_putih", "2. Apakah terdapat titik putih kecil?")}
//             ${this.createQuestion("berisi_nanah", "3. Apakah jerawat berisi nanah?")}
//             ${this.createQuestion("benjolan_merah", "4. Apakah muncul benjolan merah tanpa nanah?")}
//             ${this.createQuestion("benjolan_besar", "5. Apakah benjolan cukup besar atau dalam?")}
//             ${this.createQuestion("nyeri", "6. Apakah terasa nyeri saat disentuh?")}
//             ${this.createQuestion("merah", "7. Apakah area sekitar jerawat terlihat kemerahan?")}
//             ${this.createQuestion("menyatu", "8. Apakah jerawat menyatu membentuk area luas?")}
//             ${this.createQuestion("tekstur_keras", "9. Apakah tekstur jerawat terasa keras saat disentuh?")}
//           </div>

//           <button type="submit"
//             class="bg-[#7bc1cc] hover:bg-[#6aa9b4] text-white font-bold rounded-xl py-3 px-12 mt-10 block mx-auto text-base"
//           >
//             Kirim
//           </button>
//         </form>
//       </main>
//     `;
//   }

//   createQuestion(name, label) {
//     return `
//       <div>
//         <p class="mb-2">${label}</p>
//         <div class="flex gap-6">
//           <label class="flex items-center gap-2">
//             <input type="radio" name="${name}" value="ya" required />
//             Ya
//           </label>
//           <label class="flex items-center gap-2">
//             <input type="radio" name="${name}" value="tidak" />
//             Tidak
//           </label>
//         </div>
//       </div>
//     `;
//   }

//   initEvent() {
//     const form = document.getElementById("acneForm");

//     if (!form) return;

//     form.addEventListener("submit", async function (event) {
//       event.preventDefault();
//       const formData = new FormData(form);
//       const pertanyaan = {};

//       formData.forEach((value, key) => {
//         pertanyaan[key] = value;
//       });

//       const dummyImage = "base64-atau-url-placeholder";

//       try {
//         const result = await postData(dummyImage, pertanyaan);
//         alert("Data berhasil dikirim!");
//         console.log(result);
//       } catch (error) {
//         alert("Gagal mengirim data.");
//         console.error(error);
//       }
//     });
//   }
// }


// layouts/question-list.js
// import { postData } from '../model/ApiModel.js';

// export default class QuestionLayoutList {
//   constructor(imgBase64) {
//     this.imgBase64 = imgBase64;
//   }

//   render() {
//     const wrapper = document.createElement('main');
//     wrapper.className = 'flex flex-col items-center px-4';

//     wrapper.innerHTML = `
//       <h2 class="text-pink-400 font-bold text-lg mt-6 mb-4 text-center max-w-md">
//         Silahkan Jawab Pertanyaan dibawah ini untuk hasil yang lebih akurat
//       </h2>

//       <form id="acneForm" class="bg-pink-300 shadow-customBox rounded-3xl pt-14 pb-12 px-6 max-w-3xl w-full mx-auto mt-10">
//         <p class="text-white font-semibold text-sm mb-6 text-center max-w-xl mx-auto">
//           Jawablah pertanyaan berikut dengan jujur
//         </p>

//         <div class="space-y-6 text-white text-sm">
//           ${this.renderQuestions()}
//         </div>

//         <button type="submit"
//           class="bg-[#7bc1cc] hover:bg-[#6aa9b4] text-white font-bold rounded-xl py-3 px-12 mt-10 block mx-auto text-base"
//         >
//           Kirim
//         </button>
//       </form>
//     `;

//     this.initEvent(wrapper);

//     return wrapper;
//   }

//   renderQuestions() {
//     const questions = [
//       { name: "komedo_hitam", text: "1. Apakah terlihat komedo hitam di permukaan kulit?" },
//       { name: "titik_putih", text: "2. Apakah terdapat titik putih kecil?" },
//       { name: "berisi_nanah", text: "3. Apakah jerawat berisi nanah?" },
//       { name: "benjolan_merah", text: "4. Apakah muncul benjolan merah tanpa nanah?" },
//       { name: "benjolan_besar", text: "5. Apakah benjolan cukup besar atau dalam?" },
//       { name: "nyeri", text: "6. Apakah terasa nyeri saat disentuh?" },
//       { name: "merah", text: "7. Apakah area sekitar jerawat terlihat kemerahan?" },
//       { name: "menyatu", text: "8. Apakah jerawat menyatu membentuk area luas?" },
//       { name: "tekstur_keras", text: "9. Apakah tekstur jerawat terasa keras saat disentuh?" },
//     ];

//     return questions.map(q => `
//       <div>
//         <p class="mb-2">${q.text}</p>
//         <div class="flex gap-6">
//           <label class="flex items-center gap-2">
//             <input type="radio" name="${q.name}" value="ya" required />
//             Ya
//           </label>
//           <label class="flex items-center gap-2">
//             <input type="radio" name="${q.name}" value="tidak" />
//             Tidak
//           </label>
//         </div>
//       </div>
//     `).join('');
//   }

//   initEvent(wrapper) {
//     const form = wrapper.querySelector("#acneForm");

//     form.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       const formData = new FormData(form);
//       const answers = {};
//       formData.forEach((value, key) => {
//         answers[key] = value;
//       });

//       try {
//         const result = await postData(this.imgBase64 || "no-image", answers);
//         alert("Data berhasil dikirim!");
//         console.log("Hasil server:", result);
//         window.location.hash = '/'; // atau ke halaman hasil
//       } catch (error) {
//         alert("Gagal mengirim data.");
//         console.error("Error saat submit:", error);
//       }
//     });
//   }
// }

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
