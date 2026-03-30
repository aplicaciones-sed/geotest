function toggleMobileMenu() {
   const btn = document.getElementById('navHamburger');
   const menu = document.getElementById('navMobileMenu');
   btn.classList.toggle('open');
   menu.classList.toggle('open');
}

function closeMobileMenu() {
   document.getElementById('navHamburger').classList.remove('open');
   document.getElementById('navMobileMenu').classList.remove('open');
}

function showPage(name) {
   document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
   document.getElementById('page-' + name).classList.add('active');
   document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => a.classList.remove('active'));
   if (name === 'home') document.querySelector('.nav-links a:first-child').classList.add('active');
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderSimulacroBadges() {
   if (typeof getSimulacroSubjects !== 'function') return;
   [1, 2].forEach(simId => {
      const container = document.getElementById('sim-badges-' + simId);
      if (!container) return;
      const subjects = getSimulacroSubjects(simId);
      if (subjects.length > 0) {
         container.innerHTML = subjects.map(s =>
            '<span class="sim-badge">' + s.icon + ' ' + s.name + '</span>'
         ).join('');
      }
   });
}

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => { });
   });
}

(function () {
   var splash = document.getElementById('splashScreen');
   if (!splash) return;

   if (sessionStorage.getItem('splashShown')) {
      splash.style.display = 'none';
      renderSimulacroBadges();
      return;
   }

   function hideSplash() {
      splash.classList.add('sp-fade-out');
      setTimeout(function () {
         splash.style.display = 'none';
         renderSimulacroBadges();
      }, 650);
      sessionStorage.setItem('splashShown', '1');
   }

   var t = setTimeout(hideSplash, 3000);

   splash.addEventListener('click', function () {
      clearTimeout(t);
      hideSplash();
   });
   splash.addEventListener('touchstart', function () {
      clearTimeout(t);
      hideSplash();
   }, { passive: true });
})();
