import './style.css'
import './components/header.js';
import './components/Footer.js';
import './components/recommendation-product.js';
import './components/dev-card.js';
import './components/face-card.js';
import './components/result-prediction.js';
import './layouts/intro-layout.js'
import './layouts/question-layout.js'
import './layouts/whatfor-layout.js'
import './layouts/upload-layout.js'
import './layouts/retake-layout.js'
import './pages/about/about-page.js'
import './pages/home/home-page.js'
import { renderPage } from './routes/utils.js';

window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);

// setupCounter(document.querySelector('#counter'))
document.querySelector('#app').innerHTML = ""
