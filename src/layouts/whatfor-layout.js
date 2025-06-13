class WhatforLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	 <div class="flex-grow max-w-full h-screen pb-5 flex flex-col shadow-lg justify-center items-center relative ">
  <div class="text-center ">
    <h2 class="text-[#FF90BB] text-3xl sm:text-4xl md:text-5xl font-semibold p-2">
      Apa yang Dapat Dilakukan AI untuk Anda?
    </h2>
    <p class="text-pink-300 text-base sm:text-lg md:text-xl mt-4">
      Proses Artificial Intelligence dalam mengatasi<br />
      permasalahan kamu:
    </p>

    <div class="flex flex-wrap justify-center items-center gap-10 mt-12">
      <!-- STEP: Upload Foto -->
      <div class="flex flex-col items-center text-center">
        <div class="bg-[#FF90BB] rounded-full w-32 h-32  sm:w-40 sm:h-40 md:w-48 md:h-48 flex justify-center items-center shadow-xl">
          <img alt="Upload Foto" class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" src="/images/icon-people.svg" />
        </div>
        <div class="mt-5 bg-[#8ACCD5] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg px-6 py-3 hover:bg-sky-600 transition-all">
          Upload Foto
        </div>
      </div>

      <!-- Arrow -->
      <div class="text-[#FF90BB] text-5xl sm:text-6xl md:text-7xl font-bold select-none hidden sm:flex">
        <i class="fas fa-arrow-right"></i>
      </div>

      <!-- STEP: Proses Otomatis -->
      <div class="flex flex-col items-center text-center">
        <div class="bg-[#FF90BB] rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex justify-center items-center shadow-xl">
          <img alt="Proses Otomatis" class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" src="/images/icon-deposito.svg" />
        </div>
        <div class="mt-5 bg-[#8ACCD5] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg px-6 py-3 hover:bg-sky-600 transition-all">
          Proses Otomatis
        </div>
      </div>

      <!-- Arrow -->
      <div class="text-[#FF90BB] text-5xl sm:text-6xl md:text-7xl font-bold select-none hidden sm:flex">
        <i class="fas fa-arrow-right"></i>
      </div>

      <!-- STEP: Rekomendasi Obat -->
      <div class="flex flex-col items-center text-center">
        <div class="bg-[#FF90BB] rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex justify-center items-center shadow-xl">
          <img alt="Rekomendasi Obat" class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" src="/images/icon-tablet.svg" />
        </div>
        <div class="mt-5 bg-[#8ACCD5] text-white text-sm sm:text-base md:text-lg font-bold rounded-lg px-6 py-3 hover:bg-sky-600 transition-all">
          Rekomendasi Obat
        </div>
      </div>
    </div>
  </div>
</div>


    
    `}
}

customElements.define('whatfor-layout', WhatforLayout)
