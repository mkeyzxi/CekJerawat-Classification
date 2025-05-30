// src/pages/home/home-page.js
import '../../layouts/intro-layout.js';
import '../../layouts/whatfor-layout.js';

export default class HomePage {
	render() {
		return `
      <intro-layout></intro-layout>
      <whatfor-layout></whatfor-layout>
    `;
	}
}
