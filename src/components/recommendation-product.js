class RecommendationComponent extends HTMLElement {
	constructor() {
		super();
		
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	 <div class="flex flex-col justify-center items-center ">
    <h3 class="text-[#8ACCD5] font-semibold text-lg mb-6">
    Rekomendasi Produk
  </h3>
  <div class="mx-auto bg-[#FF90BB] rounded-2xl w-40 h-40 flex items-center justify-center mb-6">
    <img alt="Tube of Wardah Acnederm Acne Spot Treatment Gel with white and blue label on white background"
      class="object-contain w-20 h-30" height="120"
      src="https://storage.googleapis.com/a1aa/image/01b9a41f-602c-4f39-792b-7be38e1dae09.jpg" width="80" />
  </div>
  <p class="text-[#8ACCD5] font-semibold text-xs mb-1 max-w-xs mx-auto leading-tight">
    Wardah Acnederm Acne Spot Treatment Gel
  </p>
  <p class="text-[#FF90BB] text-[9px] max-w-xs mx-auto mb-1 leading-tight">
    Deskripsi :
    <span class="text-[#8ACCD5] font-normal">
      Wardah Acnederm Acne Spot Treatment Gel bantu atasi masalah jerawat di wajah dengan kandungan Derma Treat Actives
      dengan BHA &amp; Willowherb Extract.
    </span>
  </p>
  <p class="text-[#FF90BB] text-[9px] max-w-xs mx-auto leading-tight">
    Link :
    <a class="text-[#8ACCD5] font-normal hover:underline" href="#">
      Klik Disini
    </a>
  </p></div>
	`;
	}
}	

customElements.define('recommendation-component', RecommendationComponent)