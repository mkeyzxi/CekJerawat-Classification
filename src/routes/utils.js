import { routes } from './routes.js';

export function getActivePathname() {
  return location.hash.slice(1) || '/';
}

export function extractPathSegments(path) {
  return path.split('/').filter(Boolean);
}

export function matchRoute(pathname) {
  const currentSegments = extractPathSegments(pathname);

  for (const routePath in routes) {
    const routeSegments = extractPathSegments(routePath);

    if (routeSegments.length !== currentSegments.length) continue;

    const params = {};
    let isMatch = true;

    for (let i = 0; i < routeSegments.length; i++) {
      const routeSegment = routeSegments[i];
      const currentSegment = currentSegments[i];

      if (routeSegment.startsWith(':')) {
        const paramName = routeSegment.slice(1);
        params[paramName] = currentSegment;
      } else if (routeSegment !== currentSegment) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) {
      return {
        handler: routes[routePath],
        params,
      };
    }
  }

  return null;
}

export function renderPage() {
  const pathname = getActivePathname();
  const match = matchRoute(pathname);
  const app = document.getElementById('app');
  if (!app) return console.error("Element #app tidak ditemukan");

  if (!match) {
    app.innerHTML = `<section class="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
  <h1 class="text-9xl font-bold text-pink-400 mb-4">404</h1>
  <p class="text-xl text-gray-700 mb-2">Halaman tidak ditemukan</p>
  <p class="text-gray-500 mb-6">Sepertinya halaman yang kamu cari tidak tersedia.</p>
  <a href="#/" class="inline-block bg-pink-400 text-white px-6 py-2 rounded-xl hover:bg-pink-500 transition duration-300">
    <div class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24"><path fill="currentColor" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"/></svg>Kembali ke Beranda</div>
  </a>
</section>`;
    return;
  }

  try {
    const page = match.handler(match.params || {});

    if (typeof page.render === 'function') {
      // panggil render() yang return string HTML, lalu set ke innerHTML
      app.innerHTML = page.render();
    } else {
      app.innerHTML = '<h1>⚠️ Halaman tidak memiliki metode render()</h1>';
    }
  } catch (err) {
    console.error('Gagal me-render halaman:', err);
    app.innerHTML = '<h1>❌ Terjadi kesalahan saat menampilkan halaman</h1>';
  }
}

export function navigateTo(path) {
  window.location.hash = path;
}
