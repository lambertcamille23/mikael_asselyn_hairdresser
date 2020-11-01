import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Bootstrap is ready", "Webpack too"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
