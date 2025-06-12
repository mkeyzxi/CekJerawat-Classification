class DevCard extends HTMLElement {
  #nama;
  #role;
  #tugas;
  #foto;

  constructor() {
    super();
  }

  connectedCallback() {
    this.#nama = this.getAttribute('nama') || 'Nama Tidak Ada';
    this.#role = this.getAttribute('role') || 'Role Tidak Ada';
    this.#foto = this.getAttribute('foto') || '';
    this.#tugas = this.innerHTML.trim() || 'Tugas Tidak Ada';

    this.render();
  }

  render() {
    this.innerHTML = `
      <article class="text-white bg-transparent">
        <header class="flex items-center space-x-4 mb-4 sm:mb-6">
          <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex-shrink-0 overflow-hidden" aria-label="Foto Developer">
  <img src="${this.#foto}" class="w-full h-full object-cover object-center" alt="foto profile ${this.#nama}" />
</div>

          <div class="flex flex-wrap items-center space-x-2 bg-white rounded-full px-4 sm:px-5 py-3 sm:py-2 text-sm font-semibold gap-0 md:gap-2">
            <h3 class="text-[#FF90BB]" ">${this.#nama}</h3>
            <span class="text-[#8ACCD5]">${this.#role}</span>
          </div>
        </header>
        <section class="ml-16" aria-label="Tugas Developer">
          <p class="text-sm sm:text-base leading-snug">
            ${this.#tugas}
          </p>
        </section>
      </article>
    `;
  }
}

customElements.define('dev-card', DevCard);
