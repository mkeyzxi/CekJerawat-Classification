import '../../layouts/intro-layout.js'
import '../../layouts/whatfor-layout.js'

class HomePage extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
	  <intro-layout></intro-layout>
    <whatfor-layout></whatfor-layout>`}
}

customElements.define('home-page', HomePage)
