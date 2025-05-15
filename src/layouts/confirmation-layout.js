class ConfirmationLayout extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
	 <main class="flex-grow flex flex-col items-center px-6 text-center mt-12 max-w-xl mx-auto" >
   <h2 class="text-center text-pink-400 text-lg font-bold mb-4 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
    Apakah Kamu Sudah Yakin dengan Gambar ini ?
   </h2>
   <p class="text-[#8ACCD5] text-sm md:text-base mb-8">
    Tampilkan foto terbaikmu demi hasil yang memuaskan
   </p>
   <div class="bg-pink-300 rounded-3xl p-6 flex justify-center items-center w-64 h-64w-64 mb-8">
    <img alt="Close-up photo of a young woman with acne on her forehead lying on a white pillow, looking at the camera" class="rounded-full object-cover w-44 h-44" height="200" src="https://storage.googleapis.com/a1aa/image/ed643763-36ac-44e2-581c-6c0648586fd9.jpg" width="200"/>
   </div>
   <div class="flex space-x-8 w-full max-w-xs justify-center">
    <button class="bg-[#8ACCD5] text-white font-semibold rounded-lg py-2 px-5 md:py-3 md:px-8 hover:bg-sky-500 transition">
     Ulangi
    </button>
    <button class="bg-[#8ACCD5] text-white font-semibold rounded-lg py-2 px-5 md:py-3 md:px-8 hover:bg-sky-500 transition">
     Proses
    </button>
   </div>
  </main>
	`;
	}
}	

customElements.define('confirmation-layout', ConfirmationLayout)