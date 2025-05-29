class ResultPrediction extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4" aria-label="Hasil Prediksi Kondisi Kulit">
        <article class="flex flex-col items-center text-center">
          <h3 class="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Blackhead</h3>
          <p class="bg-white text-pink-400 rounded-full px-3 py-1 text-xs md:text-sm font-normal">
            (skor: 85%)
          </p>
        </article>
        <article class="flex flex-col items-center text-center">
          <h3 class="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Postula</h3>
          <p class="bg-white text-pink-400 rounded-full px-3 py-1 text-xs md:text-sm font-normal">
            (skor: 76%)
          </p>
        </article>
        <article class="flex flex-col items-center text-center">
          <h3 class="text-cyan-300 font-semibold text-xs md:text-sm mb-1">Nodul</h3>
          <p class="bg-white text-pink-400 rounded-full px-3 py-1 text-xs md:text-sm font-normal">
            (skor: 65%)
          </p>
        </article>
      </section>
    `;
  }
}

customElements.define('result-prediction', ResultPrediction);
