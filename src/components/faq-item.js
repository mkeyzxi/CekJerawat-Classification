class FaqItem extends HTMLElement {
  #button;
  #content;
  #icon;

  connectedCallback() {
    this.render();

    this.#button = this.querySelector('button');
    this.#content = this.querySelector('.faq-answer');
    this.#icon = this.querySelector('svg');

    this.#button.addEventListener('click', () => {
      const isOpen = this.#content.classList.contains('max-h-0');
      this.#toggleContent(isOpen);
    });
  }

  #toggleContent(expand) {
    if (expand) {
      this.#content.classList.remove('max-h-0', 'opacity-0');
      this.#content.classList.add('max-h-96', 'opacity-100');
      this.#icon.classList.add('rotate-180', 'text-[#FF90BB]');
    } else {
      this.#content.classList.remove('max-h-96', 'opacity-100');
      this.#content.classList.add('max-h-0', 'opacity-0');
      this.#icon.classList.remove('rotate-180', 'text-[#FF90BB]');
    }
  }

  render() {
    const question = this.getAttribute('question') || 'Pertanyaan belum diisi';
    const answer = this.getAttribute('answer') || 'Jawaban belum diisi';

    this.className = 'faq-card w-full bg-white rounded-2xl shadow-lg transition-all duration-300 border border-[#FF90BB]/30';

    this.innerHTML = `
      <div class="flex flex-col overflow-hidden font-montserrat">
        <button class="w-full px-6 py-5 flex justify-between items-center text-left group hover:bg-[#FFF1F6] transition-colors">
          <span class="text-base sm:text-lg font-semibold text-[#FF90BB]">${question}</span>
          <svg class="w-6 h-6 text-[#8ACCD5] transform transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="faq-answer max-h-0 overflow-hidden opacity-0 px-6  text-[#8ACCD5] text-sm sm:text-base leading-relaxed transition-all duration-500 ease-in-out">
          ${answer}
        </div>
      </div>
    `;
  }
}

customElements.define('faq-item', FaqItem);
