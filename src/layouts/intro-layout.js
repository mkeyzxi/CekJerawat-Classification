class IntroLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	   <main class="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-0 md:py-24 max-w-7xl mx-auto h-[85vh]">
    <div class="max-w-xl md:max-w-lg order-2 md:order-1">
      <h1 class="text-pink-400 font-extrabold text-3xl md:text-4xl leading-tight mb-4">
        Kenali Jerawatmu,
        <br />
        Temukan Solusinya
      </h1>
      <p class="text-pink-300 text-sm md:text-base mb-8 max-w-md">
        Upload foto, dapatkan jenis jerawat dan rekomendasi obat totol secara cepat dan gratis.
      </p>
      <button class="bg-pink-400 text-white text-xs font-semibold rounded-full px-5 py-2 hover:bg-pink-500 transition">
        Mulai Sekarang
      </button>
    </div>
    <div class="mt-12 md:mt-0 md:ml-12 flex-shrink-0 order-1 md:order-2">
      <img alt="Smiling woman with clear skin touching her face" class="w-72 md:w-96 rounded-none" height="400"
        src="https://storage.googleapis.com/a1aa/image/f4b34302-887e-4131-325d-f9e639bd4a86.jpg" width="400" />
    </div>
  </main>
	`;
	}
}	

customElements.define('intro-layout', IntroLayout)