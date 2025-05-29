
class IntroLayout extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	  <main class="flex flex-col-reverse md:flex-row items-center md:justify-between justify-center pt-10 md:pt-0 px-6 md:px-12 h-screen gap-10  max-w-7xl mx-auto">
  
  <div class="max-w-xl text-center md:text-left">
    <h1 class="text-[#FF90BB] font-extrabold text-3xl md:text-5xl leading-tight mb-4">
      Kenali Jerawatmu,<br />
      Temukan Solusinya
    </h1>
    <p class="text-pink-300 text-sm md:text-base mb-6 md:mb-8 max-w-md mx-auto md:mx-0">
      Upload foto, dapatkan jenis jerawat dan rekomendasi obat totol secara cepat dan gratis.
    </p>
    <button class="bg-[#FF90BB] text-white text-sm md:text-base w-full md:w-auto font-semibold rounded-full px-6 py-2 hover:bg-pink-500 transition">
      Mulai Sekarang
    </button>
  </div>

 
  <div class="w-full max-w-xs lg:max-w-md flex-shrink-0">
    <img 
      src="https://storage.googleapis.com/a1aa/image/f4b34302-887e-4131-325d-f9e639bd4a86.jpg" 
      alt="Smiling woman with clear skin touching her face" 
      class="w-full h-auto object-cover rounded-lg shadow-lg"
    />
  </div>
</main>

	`;
	}
}	

customElements.define('intro-layout', IntroLayout)