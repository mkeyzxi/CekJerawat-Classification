class RetakeLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	<main class="flex-grow flex flex-col items-center justify-center px-4 sm:px-8 md:px-0 text-center max-w-md sm:max-w-lg mx-auto h-screen">
  <h2 class="text-[#FF90BB] text-xl sm:text-2xl font-bold mb-2 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
    Apakah Kamu Sudah Yakin dengan Gambar ini?
  </h2>
  <p class="text-[#8ACCD5] text-sm md:text-base mb-7 px-2 sm:px-0 leading-relaxed">
    Tampilkan foto terbaikmu demi hasil yang memuaskan
  </p>

  <div class="bg-[#FF90BB] rounded-3xl p-6 flex justify-center items-center  w-full sm:w-64 md:h-70 md:w-70 mb-8">
    <img
      alt="Close-up photo of a young woman with acne on her forehead lying on a white pillow, looking at the camera"
      class="rounded-full object-cover w-40 h-40 sm:w-52 sm:h-52"
     
      src="https://storage.googleapis.com/a1aa/image/ed643763-36ac-44e2-581c-6c0648586fd9.jpg"
      
    />
  </div>

  <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center w-full max-w-full sm:max-w-md">
    <button
      class="bg-[#8ACCD5] text-white font-semibold rounded-lg py-2 px-5 md:py-3 md:px-8 hover:bg-sky-500 transition-colors duration-300"
      type="button"
    >
      Ulangi
    </button>
    <button
      class="bg-[#8ACCD5] text-white font-semibold rounded-lg py-2 px-5 md:py-3 md:px-8 hover:bg-sky-500 transition-colors duration-300"
      type="button"
    >
      Proses
    </button>
  </div>
</main>

	`;
	}
}	

customElements.define('retake-layout', RetakeLayout)