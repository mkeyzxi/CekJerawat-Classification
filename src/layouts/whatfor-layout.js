class WhatforLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	 <div class="flex-grow max-w-full h-[100%] pb-5 flex flex-col shadow-lg justify-center items-center">
  <div class="text-center ">
    <h2 class="text-pink-400 text-3xl sm:text-4xl md:text-5xl font-semibold p-2">
      Apa yang Dapat Dilakukan AI untuk Anda?
    </h2>
    <p class="text-pink-300 text-base sm:text-lg md:text-xl mt-4">
      Proses Artificial Intelligence dalam mengatasi<br />
      permasalahan kamu:
    </p>

    <div class="flex flex-wrap justify-center items-center gap-10 mt-12">
      <!-- STEP: Upload Foto -->
      <div class="flex flex-col items-center text-center">
        <div class="bg-pink-400 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex justify-center items-center shadow-xl">
          <img alt="Upload Foto" class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" src="https://storage.googleapis.com/a1aa/image/5b9e55fb-8b09-4afa-b158-a30270245d30.jpg" />
        </div>
        <button class="mt-5 bg-sky-500 text-white text-sm sm:text-base md:text-lg font-bold rounded-lg px-6 py-3 hover:bg-sky-600 transition-all">
          Upload Foto
        </button>
      </div>

      <!-- Arrow -->
      <div class="text-pink-400 text-5xl sm:text-6xl md:text-7xl font-bold select-none hidden sm:flex">
        <i class="fas fa-arrow-right"></i>
      </div>

      <!-- STEP: Proses Otomatis -->
      <div class="flex flex-col items-center text-center">
        <div class="bg-pink-400 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex justify-center items-center shadow-xl">
          <img alt="Proses Otomatis" class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" src="https://storage.googleapis.com/a1aa/image/a4486b80-5cde-4ca3-b2d0-3eb5e61471af.jpg" />
        </div>
        <button class="mt-5 bg-sky-500 text-white text-sm sm:text-base md:text-lg font-bold rounded-lg px-6 py-3 hover:bg-sky-600 transition-all">
          Proses Otomatis
        </button>
      </div>

      <!-- Arrow -->
      <div class="text-pink-400 text-5xl sm:text-6xl md:text-7xl font-bold select-none hidden sm:flex">
        <i class="fas fa-arrow-right"></i>
      </div>

      <!-- STEP: Rekomendasi Obat -->
      <div class="flex flex-col items-center text-center">
        <div class="bg-pink-400 rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex justify-center items-center shadow-xl">
          <img alt="Rekomendasi Obat" class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" src="https://storage.googleapis.com/a1aa/image/7ad5ff45-de10-44c7-72c9-519b35b50958.jpg" />
        </div>
        <button class="mt-5 bg-sky-500 text-white text-sm sm:text-base md:text-lg font-bold rounded-lg px-6 py-3 hover:bg-sky-600 transition-all">
          Rekomendasi Obat
        </button>
      </div>
    </div>
  </div>
</div>


    
    `}
}

customElements.define('whatfor-layout', WhatforLayout)
