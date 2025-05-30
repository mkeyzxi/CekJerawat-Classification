// import AboutPage from '../pages/about/about-page.js';
// import UploadPage from '../pages/upload/upload-page.js';
import HomePage from '../pages/home/home-page.js';
import AboutPage from '../pages/about/about-page.js';
import UploadLayout from '../layouts/upload-layout.js';
import '../pages/about/about-page.js';
// import '../layouts/upload-layout.js';
// C:\belajarku\Semester 6\DBS Foundation FEBE\acne-clasification-app\src\layouts\upload-layout.js
export const routes = {
	'/': () => new HomePage(),
	// '/beranda': () => new HomePage(),
	'/unggah': () => new UploadLayout(),
	// '/unggah': () => `<upload-layout></upload-layout>`,
	// '/testimoni': () => new ,
	'/tentang': () => new AboutPage(),
	// '/tentang': () => `<about-page></about-page>`,
	// '*': () => new NotFoundPage(), ,
}