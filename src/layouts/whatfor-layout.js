class WhatforLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	  <div class="flex-grow max-w-full p-10 flex flex-col shadow-lg justify-center items-center ">
    <div class="text-center pt-10">
      <h2 class="text-pink-400 text-2xl sm:text-3xl md:text-4xl font-semibold">
        Apa yang Dapat Dilakukan AI untuk Anda?
      </h2>
      <p class="text-pink-300 text-sm sm:text-base md:text-lg mt-2">
        Proses Artificial Intelligence dalam mengatasi<br/>
        permasalahan kamu:
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
      <!-- Upload Foto -->
      <div class="flex flex-col items-center">
        <div class="bg-pink-400 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-42 md:h-42 lg:w-52 lg:h-52 flex justify-center items-center">
          <img alt="Upload Foto" class="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-34 lg:h-34" src="https://storage.googleapis.com/a1aa/image/5b9e55fb-8b09-4afa-b158-a30270245d30.jpg"/>
        </div>
        <button class="mt-3 bg-sky-400 text-white text-xs sm:text-sm md:text-base font-bold rounded-md px-4 py-1 sm:px-5 sm:py-2">
          Upload Foto
        </button>
      </div>

      <!-- Arrow -->
      <div class="hidden sm:flex text-pink-400 text-3xl md:text-4xl font-bold select-none">
        <i class="fas fa-arrow-right"></i>
      </div>

      <!-- Proses Otomatis -->
      <div class="flex flex-col items-center">
        <div class="bg-pink-400 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-42 md:h-42 lg:w-52 lg:h-52 flex justify-center items-center">
          <img alt="Proses Otomatis" class="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-34 lg:h-34" src="https://storage.googleapis.com/a1aa/image/a4486b80-5cde-4ca3-b2d0-3eb5e61471af.jpg"/>
        </div>
        <button class="mt-3 bg-sky-400 text-white text-xs sm:text-sm md:text-base font-bold rounded-md px-4 py-1 sm:px-5 sm:py-2">
          Proses Otomatis
        </button>
      </div>

      <!-- Arrow -->
      <div class="hidden sm:flex text-pink-400 text-3xl md:text-4xl font-bold select-none">
        <i class="fas fa-arrow-right"></i>
      </div>

      <!-- Rekomendasi Obat -->
      <div class="flex flex-col items-center">
        <div class="bg-pink-400 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-42 md:h-42 lg:w-52 lg:h-52 flex justify-center items-center">
          <img alt="Rekomendasi Obat" class="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-34 lg:h-34" src="https://storage.googleapis.com/a1aa/image/7ad5ff45-de10-44c7-72c9-519b35b50958.jpg"/>
        </div>
        <button class="mt-3 bg-sky-400 text-white text-xs sm:text-sm md:text-base font-bold rounded-md px-4 py-1 sm:px-5 sm:py-2">
          Rekomendasi Obat
        </button>
      </div>
    </div>
  </div>
    </div>

    
    `}
}

customElements.define('whatfor-layout', WhatforLayout)
