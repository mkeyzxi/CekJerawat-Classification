class Facecard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
	   <div class="mx-auto bg-pink-400 rounded-2xl w-40 h-40 flex items-center justify-center mb-6">
   <img alt="Close-up photo of a young woman with short black hair lying on a white pillow" class="rounded-full w-24 h-24 object-cover" height="100" src="https://storage.googleapis.com/a1aa/image/59843863-c364-4f34-0d6d-cb747e6a2bf2.jpg" width="100"/>
  </div>
	`;
	}
}	

customElements.define('face-card', Facecard);

// masih berfikir tidak berguna ni component