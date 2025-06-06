export default class FaqPage {
  render() {
    return `
<div class="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 py-10 pt-[100px]">
  <h2 class="font-montserrat font-bold text-[#FF90BB] text-2xl sm:text-3xl md:text-4xl mb-16 text-center">
    Tanya Jawab
  </h2>

  <ul class="w-full max-w-5xl space-y-6">
    <li class="bg-white border border-[#FF90BB] rounded-xl p-5 shadow-sm">
      <button type="button" aria-expanded="false" aria-controls="faq1" class="w-full text-left text-[#FF90BB] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#FF90BB]">
        Apa itu CekJerawat?
      </button>
      <div id="faq1" class="mt-2 text-gray-700 hidden">
        CekJerawat adalah platform berbasis web yang membantu mendeteksi jenis jerawat melalui teknologi analisis gambar dan memberikan rekomendasi awal perawatan.
      </div>
    </li>

    <li class="bg-white border border-[#FF90BB] rounded-xl p-5 shadow-sm">
      <button type="button" aria-expanded="false" aria-controls="faq2" class="w-full text-left text-[#FF90BB] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#FF90BB]">
        Apakah layanan ini gratis?
      </button>
      <div id="faq2" class="mt-2 text-gray-700 hidden">
        Ya, layanan CekJerawat saat ini gratis untuk digunakan oleh siapa saja yang ingin memahami kondisi kulitnya lebih baik.
      </div>
    </li>

    <li class="bg-white border border-[#FF90BB] rounded-xl p-5 shadow-sm">
      <button type="button" aria-expanded="false" aria-controls="faq3" class="w-full text-left text-[#FF90BB] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#FF90BB]">
        Apakah data wajah saya aman?
      </button>
      <div id="faq3" class="mt-2 text-gray-700 hidden">
        Kami sangat menghargai privasi Anda. Data gambar tidak disimpan secara permanen dan hanya digunakan untuk keperluan analisis instan.
      </div>
    </li>

    <li class="bg-white border border-[#8ACCD5] rounded-xl p-5 shadow-sm">
      <button type="button" aria-expanded="false" aria-controls="faq4" class="w-full text-left text-[#8ACCD5] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#8ACCD5]">
        Jenis jerawat saya apa?
      </button>
      <div id="faq4" class="mt-2 text-gray-700 hidden">
        Dengan mengunggah foto wajah Anda, sistem kami akan mencoba mengidentifikasi apakah Anda memiliki jerawat komedo, papula, pustula, nodul, atau kistik.
      </div>
    </li>

    <li class="bg-white border border-[#8ACCD5] rounded-xl p-5 shadow-sm">
      <button type="button" aria-expanded="false" aria-controls="faq5" class="w-full text-left text-[#8ACCD5] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#8ACCD5]">
        Obat totol terbaik untuk jerawat saya?
      </button>
      <div id="faq5" class="mt-2 text-gray-700 hidden">
        Rekomendasi umum adalah obat berbasis bahan aktif seperti salicylic acid, benzoyl peroxide, atau sulfur. Namun, hasil dari CekJerawat bisa memberikan rekomendasi lebih spesifik sesuai jenis jerawat Anda.
      </div>
    </li>

    <li class="bg-white border border-[#8ACCD5] rounded-xl p-5 shadow-sm">
      <button type="button" aria-expanded="false" aria-controls="faq6" class="w-full text-left text-[#8ACCD5] font-semibold cursor-pointer outline-none focus:ring-2 focus:ring-[#8ACCD5]">
        Apakah hasilnya akurat?
      </button>
      <div id="faq6" class="mt-2 text-gray-700 hidden">
        Sistem kami menggunakan pendekatan AI dan data pelatihan terbatas, jadi hasil hanya sebagai referensi awal. Konsultasi ke dokter tetap disarankan.
      </div>
    </li>
  </ul>
</div>
    `;
  }
}
