// components/HeaderComponent.js
class HeaderComponent extends HTMLElement {


	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<header class="flex justify-between items-center px-6 md:px-12 py-6">
		  <div class="text-2xl font-bold">
			<span class="text-pink-400">Cek</span><span class="text-sky-400">Jerawat</span>
		  </div>
		  <nav class="space-x-6 text-sm font-medium hidden md:flex">
			<a class="bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-500 transition" href="#">
			  Beranda
			</a>
			<a class="text-pink-300 hover:text-pink-400 transition flex justify-center items-center" href="#">
			  Unggah
			</a>
			<a class="text-pink-300 hover:text-pink-400 transition flex justify-center items-center" href="#">
			  Testimoni
			</a>
			<a class="text-pink-300 hover:text-pink-400 transition flex justify-center items-center" href="#" >
			  Tentang
			</a>
		  </nav>
		</header>
	  `;
	}
}

customElements.define('header-component', HeaderComponent)
