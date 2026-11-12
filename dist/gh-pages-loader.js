(function () {
  var isBuiltEntry = document.querySelector('script[src*="assets/index"]');
  if (!isBuiltEntry && window.location.hostname.endsWith('github.io')) {
    var prefix = window.location.pathname.startsWith('/file-station')
      ? '/file-station/dist/'
      : './dist/';

    var icons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    for (var i = 0; i < icons.length; i++) {
      icons[i].setAttribute('href', prefix + 'favicon.svg');
    }

    var manifest = document.querySelector('link[rel="manifest"]');
    if (manifest) {
      manifest.setAttribute('href', prefix + 'site.webmanifest');
    }

    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = prefix + 'assets/index.css';
    document.head.appendChild(style);

    var script = document.createElement('script');
    script.type = 'module';
    script.src = prefix + 'assets/index.js';
    document.body.appendChild(script);
  }
})();
