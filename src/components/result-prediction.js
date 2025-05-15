class ResultPrediction extends HTMLElement {


	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		 <div class="flex justify-between mb-3">
      <div class="flex flex-col items-center w-1/3">
        <span class="font-semibold text-cyan-300 text-[10px] mb-1">
          Blackhead
        </span>
        <span class="bg-white text-pink-400 rounded-full px-3 py-1 text-[10px] font-normal">
          (skor: 85%)
        </span>
      </div>
      <div class="flex flex-col items-center w-1/3">
        <span class="font-semibold text-cyan-300 text-[10px] mb-1">
          Postula
        </span>
        <span class="bg-white text-pink-400 rounded-full px-3 py-1 text-[10px] font-normal">
          (skor: 76%)
        </span>
      </div>
      <div class="flex flex-col items-center w-1/3">
        <span class="font-semibold text-cyan-300 text-[10px] mb-1">
          Nodul
        </span>
        <span class="bg-white text-pink-400 rounded-full px-3 py-1 text-[10px] font-normal">
          (skor: 65%)
        </span>
      </div>
    </div>
	 `;
	}
}

customElements.define('result-prediction', ResultPrediction)