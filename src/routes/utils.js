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
    app.innerHTML = '<h1>404 - Halaman tidak ditemukan</h1>';
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
