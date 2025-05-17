class AboutPage extends HTMLElement {
	constructor(){
		super();
	}
	connectedCallback(){
		this.render();
	}

	render(){
		this.innerHTML = `<div class="bg-white min-h-screen flex flex-col items-center px-6 py-10">
		<!-- Title -->
	<h2 class="font-montserrat font-bold text-pink-300 text-xl mb-16 ">
		About Us
	</h2>

	<!-- Section 1 -->
	<section class="w-full max-w-5xl mb-20">
		<span
			class="inline-block bg-pink-300 text-white text-xs font-semibold rounded-full px-4 py-1 mb-3">Tentang</span>
		<h3 class="font-montserrat font-bold text-pink-300 text-sm mb-3">
			Cek<span class="text-sky-400">Jerawat</span>
		</h3>
		<div class="bg-pink-300 rounded-xl h-20 w-full max-w-md" aria-label="Decorative pink rounded rectangle"></div>
	</section>

	<!-- Tim Developer heading and Tentang label above it -->
	<div class="w-full max-w-5xl mb-6 px-0">
		<span
			class="inline-block bg-[var(--color-primary)] text-white text-xs font-semibold rounded-full px-3 py-1 mb-3 ">Tentang</span>
		<h3 class="font-montserrat font-bold text-pink-100 text-sm">
			Tim<span class="text-sky-400">Developer</span>
		</h3>
	</div>

	<!-- Section 2 -->
	<section class="w-full max-w-5xl bg-pink-300 rounded-xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
		<div>
			<div class="flex items-center space-x-4 mb-6">
				<div class="w-10 h-10 rounded-full bg-white" aria-label="White circle placeholder for developer photo">
				</div>
				<div class="flex space-x-2 bg-white rounded-full px-4 py-1 text-xs font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-xs ml-14">Tugas</p>

			<div class="flex items-center space-x-4 mt-8 mb-6">
				<div class="w-10 h-10 rounded-full bg-white" aria-label="White circle placeholder for developer photo">
				</div>
				<div class="flex space-x-2 bg-white rounded-full px-4 py-1 text-xs font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-xs ml-14">Tugas</p>

			<div class="flex items-center space-x-4 mt-8 mb-6">
				<div class="w-10 h-10 rounded-full bg-white" aria-label="White circle placeholder for developer photo">
				</div>
				<div class="flex space-x-2 bg-white rounded-full px-4 py-1 text-xs font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-xs ml-14">Tugas</p>
		</div>

		<div>
			<div class="flex items-center space-x-4 mb-6">
				<div class="w-10 h-10 rounded-full bg-white" aria-label="White circle placeholder for developer photo">
				</div>
				<div class="flex space-x-2 bg-white rounded-full px-4 py-1 text-xs font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-xs ml-14">Tugas</p>

			<div class="flex items-center space-x-4 mt-8 mb-6">
				<div class="w-10 h-10 rounded-full bg-white" aria-label="White circle placeholder for developer photo">
				</div>
				<div class="flex space-x-2 bg-white rounded-full px-4 py-1 text-xs font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-xs ml-14">Tugas</p>

			<div class="flex items-center space-x-4 mt-8 mb-6">
				<div class="w-10 h-10 rounded-full bg-white" aria-label="White circle placeholder for developer photo">
				</div>
				<div class="flex space-x-2 bg-white rounded-full px-4 py-1 text-xs font-semibold">
					<span class="text-pink-300">Nama</span>
					<span class="text-sky-400">Role</span>
				</div>
			</div>
			<p class="text-white text-xs ml-14">Tugas</p>
		</div>
	</section></div>`;
	}
}

customElements.define('about-page', AboutPage);