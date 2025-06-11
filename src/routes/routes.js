// import AboutPage from '../pages/about/about-page.js';
// import UploadPage from '../pages/upload/upload-page.js';
import HomePage from '../pages/home/home-page.js';
import AboutPage from '../pages/about/about-page.js';
import UploadLayout from '../layouts/upload-layout.js';
import '../pages/about/about-page.js';
import FaqPage from '../pages/faq/faq-page.js';
// import UploadPage from '../pages/upload/upload-page.js';
import TestimoniPage from '../pages/testimoni/testimoni-page.js';
import QuestionLayoutList from '../layouts/question-list.js';
import ConfirmationLayout from '../layouts/confirmation-layout.js';
// import '../layouts/upload-layout.js';
// C:\belajarku\Semester 6\DBS Foundation FEBE\acne-clasification-app\src\layouts\upload-layout.js

// app.appendChild(); // ✅ Jangan pakai innerHTML
export const routes = {
	'/': () => new HomePage(),
	// '/beranda': () => new HomePage(),
	// '/unggah': () => new UploadLayout(),
	// '/unggah': () => new UploadLayout() ,
	// '/pertanyaan': () => new QuestionLayout(),
	// '/pertanyaan': () => new QuestionLayoutList(),
	// '/konfirmasi': () => new ConfirmationLayout(),
	// '/unggah': () => `<upload-layout></upload-layout>`,
	// '/testimoni': () => new ,
	'/testimoni': () => new TestimoniPage(),
	'/tentang': () => new AboutPage(),
	'/faq': () => new FaqPage(),
	 '/unggah': () => new UploadLayout(),
  '/konfirmasi': () => new ConfirmationLayout(),
  '/pertanyaan': () => new QuestionLayoutList(),
// '/pertanyaan': () => {
//   const layout = new QuestionLayoutList(localStorage.getItem('uploadedImageSrc') || '');
//   return layout.render(); 
// },

	// '/tentang': () => `<about-page></about-page>`,
	// '*': () => new NotFoundPage(), ,
}