class FooterComponent extends HTMLElement {


	connectedCallback() {
		this.render();
	}
	
	render() {
		this.innerHTML = `
		<footer class="bg-[#FF90BB] text-white text-xs sm:text-sm md:text-base py-3 mt-6 rounded-t-3xl shadow-inner">
   <div class="flex items-center justify-center space-x-2 select-none px-8 max-w-screen-lg mx-auto">
	 <hr class="border-white border-t border-opacity-50 flex-grow"/>
	 <span class="flex items-center whitespace-nowrap">
	   &copy; 2025 CekJerawat | DBSdicoding
	 </span>
	 <hr class="border-white border-t border-opacity-50 flex-grow"/>
   </div>
 </footer>
	 `;
	}
}

customElements.define('footer-component', FooterComponent)