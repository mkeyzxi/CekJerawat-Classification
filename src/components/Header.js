// components/HeaderComponent.js


class HeaderComponent extends HTMLElement {


	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
		<header class="flex justify-between items-center px-6 md:px-12 py-3 relative z-20">
		  <div class="text-2xl font-bold">
			<span class="text-[#FF90BB]">Cek</span><span class="text-[#8ACCD5]">Jerawat</span>
		  </div>
		  <nav class="space-x-6 text-sm font-medium hidden md:flex">
			<a class="bg-[#FF90BB] text-white px-4 py-2 rounded-md hover:bg-pink-500 transition" href="#">
			  Beranda
			</a>
			<a class="text-pink-300 hover:text-[#FF90BB] transition flex justify-center items-center" href="#">
			  Unggah
			</a>
			<a class="text-pink-300 hover:text-[#FF90BB] transition flex justify-center items-center" href="#">
			  Testimoni
			</a>
			<a class="text-pink-300 hover:text-[#FF90BB] transition flex justify-center items-center" href="#" >
			  Tentang
			</a>
		  </nav>
		  <nav id="mobile-nav" class="flex items-center justify-between px-4 py-2 blur-6 backdrop-blur bg-white/30 shadow-md md:hidden fixed bottom-0 inset-x-0">
	<ul class="flex flex-row justify-around items-center space-x-6 w-full ">
		
		<li>
			<a href="#">
				<div class="w-[40px] flex justify-start items-center flex-col text-center text-xs/4">
					<div
						class="w-full rounded-sm py-1 px-2 bg-[#3D365C] text-white flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77"/></svg>
					</div>
					<span>Beranda</span>
				</div>
			</a>
		</li>
		<li>
			<a href="#">
				<div class="w-[40px] flex justify-start items-center flex-col text-center text-xs/4">
					<div
						class="w-full rounded-sm py-1 px-2 bg-[#7C4585] text-white flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f1ebeb" d="M11.5 15.577v-8.65l-2.33 2.33l-.708-.718L12 5l3.539 3.539l-.708.719L12.5 6.927v8.65zM6.616 19q-.691 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h10.77q.23 0 .423-.192t.192-.424v-2.423h1v2.423q0 .691-.462 1.153T17.384 19z" stroke-width="0.5" stroke="#f1ebeb"/></svg>
					</div>
					<span>Unggah </span>
				</div>
			</a>
		</li>
		<li>
			<a href="#">
				<div class="w-[40px] flex justify-start items-center flex-col text-center text-xs/4">
					<div
						class="w-full rounded-sm py-1 px-2 bg-[#C95792] text-white flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 56 56"><path fill="#f1ebeb" d="M28 27.66c3.485 0 6.326-3.105 6.326-6.883c0-3.735-2.826-6.693-6.326-6.693c-3.47 0-6.326 3.002-6.326 6.722c.014 3.764 2.855 6.853 6.326 6.853m-16.87.322c3.016 0 5.491-2.71 5.491-6.034c0-3.25-2.445-5.872-5.491-5.872c-3.017 0-5.507 2.665-5.492 5.901c.015 3.31 2.475 6.005 5.492 6.005m33.755 0c3.002 0 5.477-2.695 5.477-6.005c.015-3.236-2.475-5.901-5.477-5.901c-3.06 0-5.506 2.621-5.506 5.872c0 3.324 2.475 6.034 5.506 6.034M28 25.448c-2.138 0-3.969-2.05-3.969-4.642c0-2.548 1.802-4.51 3.97-4.51c2.181 0 3.968 1.933 3.968 4.48c0 2.593-1.802 4.672-3.969 4.672m-16.87.352c-1.787 0-3.31-1.714-3.31-3.823c0-2.064 1.508-3.72 3.31-3.72c1.845 0 3.324 1.626 3.324 3.691c0 2.138-1.523 3.852-3.324 3.852m33.755 0c-1.816 0-3.339-1.714-3.339-3.852c0-2.065 1.479-3.69 3.339-3.69c1.801 0 3.295 1.655 3.295 3.72c0 2.108-1.509 3.822-3.295 3.822M2.987 41.41h11.496c-.703-.395-1.245-1.274-1.142-2.167H2.621c-.293 0-.439-.117-.439-.395c0-3.632 4.144-7.03 8.933-7.03c1.845 0 3.5.44 4.92 1.274a7.6 7.6 0 0 1 1.655-1.552c-1.889-1.245-4.159-1.889-6.575-1.889C4.979 29.651 0 34.103 0 38.98c0 1.625.996 2.43 2.987 2.43m50.04 0c1.977 0 2.973-.805 2.973-2.43c0-4.877-4.98-9.329-11.115-9.329c-2.416 0-4.672.644-6.575 1.89c.659.453 1.2.966 1.67 1.551c1.405-.834 3.074-1.274 4.905-1.274c4.789 0 8.933 3.398 8.933 7.03c0 .278-.132.395-.425.395h-10.72c.088.893-.439 1.772-1.142 2.167Zm-34.224 0h18.394c2.43 0 3.588-.732 3.588-2.343c0-3.837-4.848-9.387-12.785-9.387c-7.952 0-12.8 5.55-12.8 9.387c0 1.611 1.158 2.343 3.603 2.343M18.1 39.2c-.38 0-.541-.103-.541-.41c0-2.403 3.72-6.898 10.441-6.898c6.707 0 10.427 4.495 10.427 6.897c0 .308-.147.41-.527.41Z" stroke-width="1.5" stroke="#f1ebeb"/></svg>
					</div>
					<span>Testimoni </span>
				</div>
			</a>
		</li>
		<li>
			<a href="#">
				<div class="w-[40px] flex justify-start items-center flex-col text-center text-xs/4">
					<div
						class="w-full rounded-sm py-1 px-2 bg-[#F8B55F] text-white flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"/></svg>
					</div>
					<span>Tentang</span>
				</div>
			</a>
		</li>
		
	</ul>
</nav>
		  
		</header>
	  `;
	}
}

customElements.define('header-component', HeaderComponent);



