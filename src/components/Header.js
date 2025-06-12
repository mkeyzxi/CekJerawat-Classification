// components/HeaderComponent.js

class HeaderComponent extends HTMLElement {
	#header;
	#menuButton;
	#mobileNav;

	connectedCallback() {
		this.render();
		this.#header = document.getElementById('header');
		this.#menuButton = this.querySelector('#menu-humburger');
		this.#mobileNav = this.querySelector('#mobile-nav');
		this.menuToggle();
		this.onScroll();
		this.handleActive();
		
	}

	render() {
		this.innerHTML = `
		<header id="header" class="flex justify-between items-center px-7 md:px-12 py-3 z-20 bg-white fixed top-0">
	
		  <div class="text-2xl font-bold flex">
			<div class="text-[#FF90BB]">Cek</div><div class="text-[#8ACCD5]">Jerawat</div>
		  </div>
		  	<div class="flex gap-4">

			<div class="md:hidden mr-2 group relative">
  <a href="#/faq">
    <div class="w-[30px] h-[30px] flex justify-center items-center bg-[#8ACCD5] rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 15H6l-4 4V3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1m5-6v14l-4-4H8a1 1 0 0 1-1-1v-1h14V8h1a1 1 0 0 1 1 1M8.19 4c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91C7.11 9.08 7 9.5 7 10h2c0-.31.04-.56.13-.74s.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82C9.85 4.23 9.12 4 8.19 4M7 11v2h2v-2zm6 2h2v-2h-2zm0-9v6h2V4z"/>
      </svg>
    </div>
    <!-- Label muncul saat hover -->
    <span class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      Tentang
    </span>
  </a>
</div>


		  	<button id="menu-humburger" class="md:hidden w-8 flex flex-col justify-center items-center gap-[4px] group ">
				<span
					class="block w-[70%] h-[2px] bg-gray-700 rounded transition-all duration-300 group-hover:bg-[#FF90BB]" ></span>
				<span
					class="block w-full h-[2px] bg-gray-700 rounded transition-all duration-300 group-hover:bg-[#FF90BB]"></span>
				<span
					class="block w-full h-[2px] bg-gray-700 rounded transition-all duration-300 group-hover:bg-[#FF90BB]"></span>
				<span
					class="block w-[70%] h-[2px] bg-gray-700 rounded transition-all duration-300 group-hover:bg-[#FF90BB]"></span>
			</button></div>
		  <nav class="space-x-2 text-sm font-medium hidden md:flex">
			<a class=" text-pink-300 px-4 py-2 rounded-md transition" href="#/" >
			  Beranda
			</a>
			<a class="text-pink-300 px-4 py-2 rounded-md transition" href="#/unggah">
			  Unggah
			</a>
			<a class="text-pink-300 px-4 py-2 rounded-md transition" href="#/testimoni">
			Testimoni
			</a>
			<a class="text-pink-300 px-4 py-2 rounded-md transition" href="#/faq" >
			FAQ
			</a>
			<a class="text-pink-300 px-4 py-2 rounded-md transition" href="#/tentang" >
			Tentang
			</a>
			
		  </nav>
		  <nav id="mobile-nav" class="hidden  bg-white/30 items-center justify-between px-4 py-2 blur-6 backdrop-blur  shadow-md md:hidden fixed bottom-0 inset-x-0 text-gray-800">
	<ul class="flex flex-row justify-around items-center space-x-6 w-full ">
		
		 <li>
    <a href="#/">
      <div class="tooltip-group relative w-[40px] flex flex-col items-center text-center text-xs/4">
        <div class="tooltip-label absolute bottom-full mb-1 px-2 py-1 rounded text-white bg-gray-700 text-[10px] opacity-0 transition-all duration-200">
          Beranda
        </div>
        <div class="w-full rounded-sm py-1 px-2 bg-[#3D365C] text-white flex justify-center items-center">
          <!-- ICON BERANDA -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"/></svg>
        </div>
      </div>
    </a>
  </li>

  <li>
    <a href="#/unggah">
      <div class="tooltip-group relative w-[40px] flex flex-col items-center text-center text-xs/4">
        <div class="tooltip-label absolute bottom-full mb-1 px-2 py-1 rounded text-white bg-gray-700 text-[10px] opacity-0 transition-all duration-200">
          Unggah
        </div>
        <div class="w-full rounded-sm py-1 px-2 bg-[#7C4585] text-white flex justify-center items-center">
          <!-- ICON UNGGAH -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f1ebeb" d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.718L12 5l3.539 3.539l-.708.719L12.5 6.927v8.65zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z"/></svg>
        </div>
      </div>
    </a>
  </li>

  <li>
    <a href="#/testimoni">
      <div class="tooltip-group relative w-[40px] flex flex-col items-center text-center text-xs/4">
        <div class="tooltip-label absolute bottom-full mb-1 px-2 py-1 rounded text-white bg-gray-700 text-[10px] opacity-0 transition-all duration-200">
          Testimoni
        </div>
        <div class="w-full rounded-sm py-1 px-2 bg-[#C95792] text-white flex justify-center items-center">
         		<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 56 56"><path fill="#f1ebeb" d="M28 27.66c3.485 0 6.326-3.105 6.326-6.883c0-3.735-2.826-6.693-6.326-6.693c-3.47 0-6.326 3.002-6.326 6.722c.014 3.764 2.855 6.853 6.326 6.853m-16.87.322c3.016 0 5.491-2.71 5.491-6.034c0-3.25-2.445-5.872-5.491-5.872c-3.017 0-5.507 2.665-5.492 5.901c.015 3.31 2.475 6.005 5.492 6.005m33.755 0c3.002 0 5.477-2.695 5.477-6.005c.015-3.236-2.475-5.901-5.477-5.901c-3.06 0-5.506 2.621-5.506 5.872c0 3.324 2.475 6.034 5.506 6.034M28 25.448c-2.138 0-3.969-2.05-3.969-4.642c0-2.548 1.802-4.51 3.97-4.51c2.181 0 3.968 1.933 3.968 4.48c0 2.593-1.802 4.672-3.969 4.672m-16.87.352c-1.787 0-3.31-1.714-3.31-3.823c0-2.064 1.508-3.72 3.31-3.72c1.845 0 3.324 1.626 3.324 3.691c0 2.138-1.523 3.852-3.324 3.852m33.755 0c-1.816 0-3.339-1.714-3.339-3.852c0-2.065 1.479-3.69 3.339-3.69c1.801 0 3.295 1.655 3.295 3.72c0 2.108-1.509 3.822-3.295 3.822M2.987 41.41h11.496c-.703-.395-1.245-1.274-1.142-2.167H2.621c-.293 0-.439-.117-.439-.395c0-3.632 4.144-7.03 8.933-7.03c1.845 0 3.5.44 4.92 1.274a7.6 7.6 0 0 1 1.655-1.552c-1.889-1.245-4.159-1.889-6.575-1.889C4.979 29.651 0 34.103 0 38.98c0 1.625.996 2.43 2.987 2.43m50.04 0c1.977 0 2.973-.805 2.973-2.43c0-4.877-4.98-9.329-11.115-9.329c-2.416 0-4.672.644-6.575 1.89c.659.453 1.2.966 1.67 1.551c1.405-.834 3.074-1.274 4.905-1.274c4.789 0 8.933 3.398 8.933 7.03c0 .278-.132.395-.425.395h-10.72c.088.893-.439 1.772-1.142 2.167Zm-34.224 0h18.394c2.43 0 3.588-.732 3.588-2.343c0-3.837-4.848-9.387-12.785-9.387c-7.952 0-12.8 5.55-12.8 9.387c0 1.611 1.158 2.343 3.603 2.343M18.1 39.2c-.38 0-.541-.103-.541-.41c0-2.403 3.72-6.898 10.441-6.898c6.707 0 10.427 4.495 10.427 6.897c0 .308-.147.41-.527.41Z" stroke-width="1.5" stroke="#f1ebeb"/></svg>
        </div>
      </div>
    </a>
  </li>

  <li>
    <a href="#/tentang">
      <div class="tooltip-group relative w-[40px] flex flex-col items-center text-center text-xs/4">
        <div class="tooltip-label absolute bottom-full mb-1 px-2 py-1 rounded text-white bg-gray-700 text-[10px] opacity-0 transition-all duration-200">
          Tentang
        </div>
        <div class="w-full rounded-sm py-1 px-2 bg-[#F8B55F] text-white flex justify-center items-center">
          <!-- ICON TENTANG -->
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"/></svg>
        </div>
      </div>
    </a>
  </li>
		
	</ul>
</nav>
		  
		</header>
	  `;
	}
	handleActive() {
  const links = this.querySelectorAll('a[href^="#"]');
  const currentHash = location.hash || '#/';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentHash) {
      link.classList.add('navActive');
    } else {
      link.classList.remove('navActive');
    }
  });

  window.addEventListener('hashchange', () => {
    const newHash = location.hash || '#/';
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === newHash) {
        link.classList.add('navActive');
      } else {
        link.classList.remove('navActive');
      }
    });
  });
}
	menuToggle() {
		// const mobileUl = this.querySelector('#mobile-nav');

		this.#menuButton.addEventListener('click', () => {
			this.#mobileNav.classList.toggle('hidden');
			this.#mobileNav.classList.toggle('flex');
			this.classList.toggle('menu-humburger');
			// console.log(this.#mobileNav);
			// console.log('Menu toggled');
		});
	}

	onScroll() {
	let previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

	document.addEventListener('scroll', () => {
		let currentScrollPosition = window.pageYOffset;
		if(currentScrollPosition > 50){
			this.#header.classList.add('shadow-custom');
		}else{
			this.#header.classList.remove('shadow-custom');
		}
		if (previousScrollPosition > currentScrollPosition) {
			this.#header.style.top = "0";
			// this.#header.classList.add('bg-white/30');
			
		} else {
			this.#header.style.top = "-75px";
			// this.#header.classList.remove('bg-white/30');
			
		}

		previousScrollPosition = currentScrollPosition;
	});


}


}

customElements.define('header-component', HeaderComponent);


	// <button class="md:hidden w-8 h-8 flex justify-center items-center text-gray-700 hover:text-[#FF90BB] transition duration-300">
			// 	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#000" d="M232.13 143.64a6 6 0 0 0-6-1.49a90.07 90.07 0 0 1-112.27-112.3a6 6 0 0 0-7.49-7.48a102.88 102.88 0 0 0-51.89 36.31a102 102 0 0 0 142.84 142.84a102.88 102.88 0 0 0 36.31-51.89a6 6 0 0 0-1.5-5.99m-42 48.29a90 90 0 0 1-126-126a90.9 90.9 0 0 1 35.52-28.27a102.06 102.06 0 0 0 118.69 118.69a90.9 90.9 0 0 1-28.24 35.58Z"/></svg>
			// </button>