
export default class AboutPage {

	render() {
		return `<div class=" min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 py-10 pt-[100px] ">
	<!-- Title -->
	<h2 class="font-montserrat font-bold text-[#FF90BB] text-2xl sm:text-3xl md:text-4xl mb-10 text-center">
		About Us
	</h2>

	<!-- Section 1 -->
	<section class="w-full max-w-5xl ">
		<span class="inline-block bg-[#FF90BB] text-white text-sm sm:text-base font-semibold rounded-full px-5 py-2 mb-3">
			Tentang
		</span>
		<h3 class="font-montserrat font-bold text-[#FF90BB] text-lg sm:text-xl mb-3">
			Cek<span class="text-[#8ACCD5]">Jerawat</span>
		</h3>
		<div class="bg-[#FF90BB] rounded-xl p-4 text-white w-full max-w-md" aria-label="Decorative pink rounded rectangle">
			<p>CekJerawat adalah solusi teknologi gratis untuk membantu masyarakat menangani jerawat secara mandiri dan akurat. Dengan pasar yang terus berkembang, CekJerawat berpotensi berkembang ke edukasi kulit, rekomendasi produk, hingga layanan konsultasi lanjutan.</p>
		</div>
	</section>

	<!-- Tim Developer heading -->
	<div class="w-full max-w-5xl mb-6">
		<span class="inline-block bg-[var(--color-primary)] text-white text-sm sm:text-base font-semibold rounded-full px-5 py-2 mb-3">
			Tentang
		</span>
		<h3 class="font-montserrat font-bold text-[#FF90BB] text-lg sm:text-xl">
			Tim<span class="text-[#8ACCD5]">Developer</span>
		</h3>
	</div>

	<!-- Section 2 -->
	<section class="w-full max-w-5xl bg-[#FF90BB] rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
		<!-- Loop team member card -->
	

		<dev-card nama="Galbi Nadifah" role="Integrasi API & DB" foto="/images/about/profile-galbi.jpg">
		Integrasi API ML, database produk, handle request-response
		</dev-card>

		<dev-card nama="Muhammad Makbul N" role="Front End Developer" foto="/images/about/profile-mbul.png">
  Implementasi responsive website, validasi input gambar
</dev-card>

		<dev-card nama="Muh. Ilham Akbar" role="UI/UX Designer">
		Desain UI/UX, halaman upload, tampilan hasil rekomendasi
		</dev-card>

		<dev-card nama="Al Isra Denk Rimakka" role="Data Engineer" foto="/images/about/profile-isra.png">
		Data preprocessing, image augmentation, cleaning dataset
		</dev-card>

		<dev-card nama="Amir Hamzah" role="ML Engineer">
		Machine Learning Model training, tuning parameter, evaluasi akurasi
		</dev-card>

		<dev-card nama="Timothy Gilbert Hadiwiyono" role="DevOps">
		Deployment model, integrasi dengan backend (API endpoint)
		</dev-card>

	</section>
</div>
`;
	}
}
