// export default class ResultPage {
// 	render(){
// 		return `<div class="flex flex-col justify-center items-center h-screen">
//      <div class="flex flex-col justify-center items-center ">
//     <h3 class="text-[#8ACCD5] font-semibold text-lg mb-6">
//     Rekomendasi Produk
//   </h3>
//   <div class="mx-auto bg-[#FF90BB] rounded-2xl w-40 h-40 flex items-center justify-center mb-6">
//     <img alt="Tube of Wardah Acnederm Acne Spot Treatment Gel with white and blue label on white background"
//       class="object-contain w-20 h-30" height="120"
//       src="https://storage.googleapis.com/a1aa/image/01b9a41f-602c-4f39-792b-7be38e1dae09.jpg" width="80" />
//   </div>
//   <p class="text-[#8ACCD5] font-semibold text-xs mb-1 max-w-xs mx-auto leading-tight">
//     Wardah Acnederm Acne Spot Treatment Gel
//   </p>
//   <p class="text-[#FF90BB] text-[9px] max-w-xs mx-auto mb-1 leading-tight">
//     Deskripsi :
//     <span class="text-[#8ACCD5] font-normal">
//       Wardah Acnederm Acne Spot Treatment Gel bantu atasi masalah jerawat di wajah dengan kandungan Derma Treat Actives
//       dengan BHA &amp; Willowherb Extract.
//     </span>
//   </p>
//   <p class="text-[#FF90BB] text-[9px] max-w-xs mx-auto leading-tight">
//     Link :
//     <a class="text-[#8ACCD5] font-normal hover:underline" href="#">
//       Klik Disini
//     </a>
//   </p></div>
// 	      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4" aria-label="Hasil Prediksi Kondisi Kulit">
//         <article class="flex flex-col items-center text-center">
//           <h3 class="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Blackhead</h3>
//           <p class="bg-white text-pink-400 rounded-full px-3 py-1 text-xs md:text-sm font-normal">
//             (skor: 85%)
//           </p>
//         </article>
//         <article class="flex flex-col items-center text-center">
//           <h3 class="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Postula</h3>
//           <p class="bg-white text-pink-400 rounded-full px-3 py-1 text-xs md:text-sm font-normal">
//             (skor: 76%)
//           </p>
//         </article>
//         <article class="flex flex-col items-center text-center">
//           <h3 class="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Nodul</h3>
//           <p class="bg-white text-pink-400 rounded-full px-3 py-1 text-xs md:text-sm font-normal">
//             (skor: 65%)
//           </p>
//         </article>
//       </section>
//   </div>`
// 	}
// }


export default class ResultPage {
	render() {
		return `
<main class="flex flex-col justify-center items-center min-h-screen px-4 py-8 mt-10">
  <section class="text-center w-full max-w-sm">
    <header>
      <h3 class="text-[#8ACCD5] font-semibold text-lg sm:text-xl md:text-2xl mb-6">
        Rekomendasi Produk
      </h3>
    </header>
    <div class="bg-[#FF90BB] rounded-2xl w-40 h-40 flex items-center justify-center mx-auto mb-6 shadow-lg">
      <img 
        src="https://storage.googleapis.com/a1aa/image/01b9a41f-602c-4f39-792b-7be38e1dae09.jpg" 
        alt="Tube of Wardah Acnederm Acne Spot Treatment Gel" 
        class="object-contain rounded-md" width="80%" />
    </div>
    <p class="text-[#8ACCD5] font-semibold text-xs sm:text-sm md:text-base mb-2 leading-tight">
      Wardah Acnederm Acne Spot Treatment Gel
    </p>
    <p class="text-[#FF90BB] text-xs sm:text-sm md:text-base mb-1 leading-snug">
      Deskripsi: 
      <span class="text-[#464949] font-normal">
        Wardah Acnederm Acne Spot Treatment Gel bantu atasi masalah jerawat di wajah dengan kandungan Derma Treat Actives, BHA, & Willowherb Extract.
      </span>
    </p>
    <p class="text-[#FF90BB] text-xs sm:text-sm md:text-base leading-snug">
      Link:
      <a href="https://www.wardahbeauty.com/id/product/skincare/wardah-acnederm-acne-spot-treatment-gel" target="__blank" class="text-[#8ACCD5] font-normal hover:underline">
        Klik Di Sini
      </a>
    </p>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-3xl px-4" aria-label="Hasil Prediksi Kondisi Kulit">
    <article class="flex flex-col items-center text-center">
      <h4 class="text-[#8ACCD5] font-semibold text-xs sm:text-sm md:text-base mb-2">Blackhead</h4>
      <p class="bg-white text-pink-400 rounded-full px-4 py-1 text-xs sm:text-sm md:text-base font-normal shadow">
        Skor: 85%
      </p>
    </article>
    <article class="flex flex-col items-center text-center">
      <h4 class="text-[#8ACCD5] font-semibold text-xs sm:text-sm md:text-base mb-2">Postula</h4>
      <p class="bg-white text-pink-400 rounded-full px-4 py-1 text-xs sm:text-sm md:text-base font-normal shadow">
        Skor: 76%
      </p>
    </article>
    <article class="flex flex-col items-center text-center">
      <h4 class="text-[#8ACCD5] font-semibold text-xs sm:text-sm md:text-base mb-2">Nodul</h4>
      <p class="bg-white text-pink-400 rounded-full px-4 py-1 text-xs sm:text-sm md:text-base font-normal shadow">
        Skor: 65%
      </p>
    </article>
  </section>
</main>`;
	}
}
