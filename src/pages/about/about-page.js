class AboutPage extends HTMLElement {
	constructor(){
		super();
	}
	connectedCallback(){
		this.render();
	}

	render(){
		this.innerHTML = `<div class="bg-white min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12 py-10">
	<!-- Title -->
	<h2 class="font-montserrat font-bold text-pink-300 text-2xl sm:text-3xl md:text-4xl mb-16 text-center">
		About Us
	</h2>

	<!-- Section 1 -->
	<section class="w-full max-w-5xl ">
		<span class="inline-block bg-pink-300 text-white text-sm sm:text-base font-semibold rounded-full px-5 py-2 mb-3">
			Tentang
		</span>
		<h3 class="font-montserrat font-bold text-pink-300 text-lg sm:text-xl mb-3">
			Cek<span class="text-sky-400">Jerawat</span>
		</h3>
		<div class="bg-pink-300 rounded-xl h-24 sm:h-28 w-full max-w-md" aria-label="Decorative pink rounded rectangle"></div>
	</section>

	<!-- Tim Developer heading -->
	<div class="w-full max-w-5xl mb-6">
		<span class="inline-block bg-[var(--color-primary)] text-white text-sm sm:text-base font-semibold rounded-full px-5 py-2 mb-3">
			Tentang
		</span>
		<h3 class="font-montserrat font-bold text-pink-100 text-lg sm:text-xl">
			Tim<span class="text-sky-400">Developer</span>
		</h3>
	</div>

	<!-- Section 2 -->
	<section class="w-full max-w-5xl bg-pink-300 rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
		<!-- Loop team member card -->
		${[...Array(6)].map(() => `
		<div>
			<div class="flex items-center space-x-4 mb-4 sm:mb-6">
				<div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex-shrink-0" aria-label="Foto Developer"></div>
				<div class="flex flex-wrap items-center space-x-2 bg-white rounded-full px-4 sm:px-5 py-1 sm:py-2 text-sm font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-sm sm:text-base ml-16">Tugas</p>
		</div>
		`).join('')}
	</section>
</div>
`;
	}
}

customElements.define('about-page', AboutPage);