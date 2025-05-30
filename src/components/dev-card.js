class DevCard extends HTMLElement {
  constructor() {
	super();
  }
  connectedCallback() {
	this.render();
  }
  render() {
	this.innerHTML = `<div>
			<div class="flex items-center space-x-4 mb-4 sm:mb-6">
				<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex-shrink-0" aria-label="Foto Developer"></div>
				<div class="flex flex-wrap items-center space-x-2 bg-white rounded-full px-4 sm:px-5 py-1 sm:py-2 text-sm font-semibold">
					<span class="text-[#FF90BB]">Nama</span>
					<span class="text-[#8ACCD5]">Role</span>
				</div>
			</div>
			<p class="text-white text-sm sm:text-base ml-16">Tugas</p>
		</div>`
  }
}

customElements.define('dev-card', DevCard);