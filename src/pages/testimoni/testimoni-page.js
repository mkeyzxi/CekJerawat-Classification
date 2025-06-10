export default class TestimoniPage {
	render() {
		return `
    <main class="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full md:h-screen py-10 pt-[100px] md:pt-0">
      <h2 class="text-center text-[#FF90BB] text-xl sm:text-2xl font-bold mb-8 drop-shadow-[0_0_4px_rgba(255,182,193,0.7)]">
        Pendapat <span class="text-[#8ACCD5] font-semibold">Pengguna</span> Kami
      </h2>

      <section class="bg-[#FF90BB] rounded-2xl shadow-md px-4 sm:px-6 md:px-10 py-10 w-full relative text-white">
        <p class="font-semibold text-center mb-3 text-sm sm:text-base leading-tight">
          Karena pengalaman nyata itu berarti. Simak cerita mereka!
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <!-- Testimoni 1 -->
          <article class="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Siti Nurhaliza" class="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <h3 class="font-semibold text-[#FF90BB] text-sm">Siti Nurhaliza</h3>
                <p class="text-[#8ACCD5] text-xs">Mahasiswa</p>
              </div>
            </div>
            <p class="text-sm leading-snug">
              "Aplikasinya sangat membantu! UI-nya cantik dan mudah digunakan. Saya sangat merekomendasikan!"
            </p>
          </article>

          <!-- Testimoni 2 -->
          <article class="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="Rizky Ananda" class="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <h3 class="font-semibold text-[#FF90BB] text-sm">Rizky Ananda</h3>
                <p class="text-[#8ACCD5] text-xs">Freelancer</p>
              </div>
            </div>
            <p class="text-sm leading-snug">
              "Fiturnya lengkap dan sangat informatif. Terima kasih sudah membuat hidup saya lebih mudah."
            </p>
          </article>

          <!-- Testimoni 3 -->
          <article class="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Dewi Lestari" class="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <h3 class="font-semibold text-[#FF90BB] text-sm">Dewi Lestari</h3>
                <p class="text-[#8ACCD5] text-xs">Ibu Rumah Tangga</p>
              </div>
            </div>
            <p class="text-sm leading-snug">
              "Desainnya menarik, informasinya jelas, dan saya merasa lebih percaya diri setelah menggunakannya."
            </p>
          </article>
          <!-- Testimoni 3 -->
          <article class="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Dewi Lestari" class="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <h3 class="font-semibold text-[#FF90BB] text-sm">Dewi Lestari</h3>
                <p class="text-[#8ACCD5] text-xs">Ibu Rumah Tangga</p>
              </div>
            </div>
            <p class="text-sm leading-snug">
              "Desainnya menarik, informasinya jelas, dan saya merasa lebih percaya diri setelah menggunakannya."
            </p>
          </article>
          <!-- Testimoni 3 -->
          <article class="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Dewi Lestari" class="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <h3 class="font-semibold text-[#FF90BB] text-sm">Dewi Lestari</h3>
                <p class="text-[#8ACCD5] text-xs">Ibu Rumah Tangga</p>
              </div>
            </div>
            <p class="text-sm leading-snug">
              "Desainnya menarik, informasinya jelas, dan saya merasa lebih percaya diri setelah menggunakannya."
            </p>
          </article>
          <!-- Testimoni 3 -->
          <article class="bg-white text-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <div class="flex items-center mb-4">
              <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Dewi Lestari" class="w-10 h-10 rounded-full object-cover mr-3" />
              <div>
                <h3 class="font-semibold text-[#FF90BB] text-sm">Dewi Lestari</h3>
                <p class="text-[#8ACCD5] text-xs">Ibu Rumah Tangga</p>
              </div>
            </div>
            <p class="text-sm leading-snug">
              "Desainnya menarik, informasinya jelas, dan saya merasa lebih percaya diri setelah menggunakannya."
            </p>
          </article>
        </div>

		</section>
		</main>
		`;
	}
}

// <button
//   onclick="alert('Terima kasih telah membaca testimoni!')"
//   class="absolute left-1/2 -translate-x-1/2 mt-10 sm:mt-0 sm:-bottom-6 bg-[#8ACCD5] text-white font-semibold rounded-md px-6 py-2 text-sm shadow-lg hover:bg-sky-400 transition-all z-10"
// >
//   Lihat Selengkapnya
// </button>