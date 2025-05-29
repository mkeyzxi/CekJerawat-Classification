class UploadLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	   <main class="flex-grow  flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full md:h-[81.8vh] py-10">
  <h2 class="text-center text-[#FF90BB] text-xl sm:text-2xl font-bold mb-8 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
    Mari Mulai Memprediksi Kulit  
    <span class="text-[#8ACCD5] font-semibold">Jerawat</span>
    <span class="text-[#8ACCD5] font-semibold">Anda</span>
  </h2>

  <section class="bg-[#FF90BB] rounded-2xl shadow-md px-4 sm:px-6 md:px-10 py-10 w-full relative">
    <p class="text-white font-semibold text-center mb-3 text-sm sm:text-base leading-tight">
      Setiap wajah punya cerita, termasuk soal jerawat.
    </p>
    <p class="text-white text-center text-xs sm:text-sm leading-tight mb-10 max-w-xl mx-auto">
      Cek <span class="text-[#8ACCD5] font-semibold">Jerawat</span> kami siap membantumu menemukan obat jerawat yang paling cocok untuk kulitmu.
      Kenali jenis jerawatmu, rawat dengan tepat, dan wujudkan kulit cantik, bersih, dan percaya diri setiap hari.
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 max-w-full mx-auto text-white text-[10px] sm:text-xs leading-tight">
      <!-- Item 1 -->
      <div class="flex flex-col items-center text-center px-2">
        <div class="bg-white text-[#FF90BB] rounded-full w-12 h-12 mb-2 flex justify-center items-center">
          <i class="fas fa-female text-xl sm:text-2xl"></i>
        </div>
        <p>Ikat rambut ke belakang dan lepas kacamata agar wajah terlihat jelas.</p>
      </div>
      <!-- Item 2 -->
      <div class="flex flex-col items-center text-center px-2">
        <div class="bg-white text-[#FF90BB] rounded-full w-12 h-12 mb-2 flex justify-center items-center">
          <i class="fas fa-mug-hot text-xl sm:text-2xl"></i>
        </div>
        <p>Pastikan wajah bebas dari makeup agar analisis kulit lebih akurat.</p>
      </div>
      <!-- Item 3 -->
      <div class="flex flex-col items-center text-center px-2">
        <div class="bg-white text-[#FF90BB] rounded-full w-12 h-12 mb-2 flex justify-center items-center">
          <i class="fas fa-lightbulb text-xl sm:text-2xl"></i>
        </div>
        <p>Ambil foto di tempat yang terang agar kondisi kulit mudah terdeteksi.</p>
    </div>
      <!-- Item 4 -->
      <div class="flex flex-col items-center text-center px-2">
        <div class="bg-white text-[#FF90BB] rounded-full w-12 h-12 mb-2 flex justify-center items-center">
          <i class="fas fa-meh text-xl sm:text-2xl"></i>
        </div>
        <p>Tampilkan ekspresi wajah yang netral, tanpa senyum atau kerutan.</p>
      </div>
    </div>

    <button
      onclick="alert('hellow')"
      class="absolute left-1/2 -translate-x-1/2 mt-10 sm:mt-0 sm:-bottom-6 bg-[#8ACCD5] text-white font-semibold rounded-md px-6 py-2 text-sm shadow-lg hover:bg-sky-400 transition-all z-10"
    >
      Unggah &amp; Prediksi
    </button>
  </section>
</main>

	`;
	}
}	

customElements.define('upload-layout', UploadLayout)