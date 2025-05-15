class QuestionLayout extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
	 <main class="flex flex-col items-center px-4">
		<h2 class="text-pink-400 font-bold text-lg mt-6 mb-4 text-center max-w-md ">
			Silahkan Jawab Pertanyaan dibawah ini untuk hasil yang lebih akurat
		</h2>

		<div class="relative bg-pink-300 shadow-customBox rounded-3xl pt-14 pb-12 px-12 max-w-3xl w-full mx-auto sm:px-6 mt-10"
			role="form" aria-labelledby="question-label">
			<div class="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10" role="list"
				aria-label="Steps">
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-pink-300 text-white"
					aria-current="step" tabindex="0">
					1
				</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">
					2
				</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">3</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">4</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">5</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">6</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">7</div>
				<div class="w-7 h-7 rounded-full shadow text-xs font-semibold flex items-center justify-center cursor-pointer bg-white text-pink-300"
					tabindex="0">8</div>
			</div>

			<p id="question-label" class="text-white font-semibold text-sm mb-1 text-center max-w-xl mx-auto">
				Warna jerawat apa yang paling sering Anda lihat di kulit Anda ?
			</p>
			<p class="text-white text-xs mb-6 text-center max-w-xl mx-auto">
				(bisa pilih lebih dari satu)
			</p>

			<div class="grid grid-cols-3 gap-6 text-pink-400 text-xs font-normal max-w-3xl mx-auto sm:grid-cols-2 sm:gap-4"
				role="group" aria-label="Options for acne colors">
				<label
					class="bg-white text-pink-400 rounded-full px-6 py-2 text-center hover:bg-pink-200 border-2 border-transparent transition cursor-pointer flex items-center justify-center">
					<input type="checkbox" name="acne_type" value="hitam" class="hidden peer" />
					<span class="peer-checked:font-semibold peer-checked:text-pink-600">Hitam di tengah</span>
				</label>

				<label
					class="bg-white text-pink-400 rounded-full px-6 py-2 text-center hover:bg-pink-200 border-2 border-transparent transition cursor-pointer flex items-center justify-center">
					<input type="checkbox" name="acne_type" value="putih" class="hidden peer" />
					<span class="peer-checked:font-semibold peer-checked:text-pink-600">Putih di Tengah</span>
				</label>

				<label
					class="bg-white text-pink-400 rounded-full px-6 py-2 text-center hover:bg-pink-200 border-2 border-transparent transition cursor-pointer flex items-center justify-center leading-tight">
					<input type="checkbox" name="acne_type" value="merah_tanpa_nanah" class="hidden peer" />
					<span class="peer-checked:font-semibold peer-checked:text-pink-600">Merah tanpa<br />Nanah</span>
				</label>

				<label
					class="bg-white text-pink-400 rounded-full px-6 py-2 text-center hover:bg-pink-200 border-2 border-transparent transition cursor-pointer flex items-center justify-center leading-tight">
					<input type="checkbox" name="acne_type" value="merah_putih" class="hidden peer" />
					<span class="peer-checked:font-semibold peer-checked:text-pink-600">Merah dengan titik<br />putih di
						atas</span>
				</label>

				<label
					class="bg-white text-pink-400 rounded-full px-6 py-2 text-center hover:bg-pink-200 border-2 border-transparent transition cursor-pointer flex items-center justify-center leading-tight">
					<input type="checkbox" name="acne_type" value="merah_bengkak" class="hidden peer" />
					<span class="peer-checked:font-semibold peer-checked:text-pink-600">Merah kebiruan,<br />membengkak
						besar</span>
				</label>

				<label
					class="bg-white text-pink-400 rounded-full px-6 py-2 text-center hover:bg-pink-200 border-2 border-transparent transition cursor-pointer flex items-center justify-center leading-tight">
					<input type="checkbox" name="acne_type" value="menonjol" class="hidden peer" />
					<span class="peer-checked:font-semibold peer-checked:text-pink-600">Kulit hanya<br />menonjol
						tanpa<br />warna jelas</span>
				</label>
			</div>

			<button
				class="bg-[#7bc1cc] hover:bg-[#6aa9b4] text-white font-bold rounded-xl py-3 px-12 mt-10 block mx-auto text-base"
				type="button" aria-label="Next step">
				Selanjutnya
			</button>
		</div>
	</main>`}
}

customElements.define('question-layout', QuestionLayout)
