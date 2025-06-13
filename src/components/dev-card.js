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
        <header class="flex items-center space-x-4 mb-2 sm:mb-4">
          <div class="w-15 h-15 sm:w-22 sm:h-22 rounded-full bg-white flex-shrink-0 overflow-hidden" aria-label="Foto Developer">
  <img src="${this.#foto}" class="w-full h-full object-cover object-center" alt="foto profile ${this.#nama}" />
</div>

          <div class="flex flex-wrap items-center space-x-2 bg-white rounded-full px-4 sm:px-5 py-3 sm:py-2 text-sm font-semibold gap-0 md:gap-2 w-full fles justify-items-start">
            <h3 class="text-[#FF90BB] ">${this.#nama}</h3>
            <span class="text-[#8ACCD5]">${this.#role}</span>
          </div>
        </header>
        <section class="md:ml-16" aria-label="Tugas Developer">
          <p class="text-sm sm:text-base leading-snug">
            ${this.#tugas}
          </p>
        </section>
      </article>
    `;
  }
}

customElements.define('dev-card', DevCard);
