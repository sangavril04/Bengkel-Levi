/* ===== Bengkel Levi – main.js ===== */
(function () {
  // GANTI nomor WhatsApp bengkel (format internasional, tanpa + atau 0 di depan)
  var WA = '6281234567890';
  var wa = function (t) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); };

  // Tombol WhatsApp (hero & mengambang)
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = wa('Halo Bengkel Levi, saya ingin bertanya tentang servis mobil.');
    a.target = '_blank'; a.rel = 'noopener';
  });

  // Menu mobile
  var bg = document.querySelector('.burger'), nav = document.getElementById('menu');
  function tog(v) { nav.classList.toggle('open', v); bg.setAttribute('aria-expanded', v); }
  bg.addEventListener('click', function () { tog(!nav.classList.contains('open')); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') tog(false); });

  // Penanda menu aktif saat menggulir
  var links = [].slice.call(nav.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) { var t = document.querySelector(a.getAttribute('href')); if (t) io.observe(t); });
  }

  // Galeri: klik untuk memperbesar
  var dlg = document.getElementById('lb'), cap = document.getElementById('lbcap'), box = document.getElementById('lbbox');
  document.querySelectorAll('.gal button').forEach(function (b) {
    b.addEventListener('click', function () {
      var im = b.querySelector('img');
      box.innerHTML = im ? '<img src="' + im.src + '" alt="' + im.alt + '">' : '<div class="ph">Foto segera hadir</div>';
      cap.textContent = b.dataset.cap;
      dlg.showModal();
    });
  });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });

  // Form kontak -> WhatsApp
  var f = document.getElementById('f'), st = document.getElementById('st');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(f), miss = ['nama', 'hp', 'pesan'].filter(function (k) { return !String(d.get(k)).trim(); });
    if (miss.length) { st.textContent = 'Lengkapi kolom yang masih kosong.'; f.elements[miss[0]].focus(); return; }
    st.textContent = 'Membuka WhatsApp…';
    window.open(wa('Halo Bengkel Levi,\nNama: ' + d.get('nama') + '\nTelepon: ' + d.get('hp') + '\nPesan: ' + d.get('pesan')), '_blank', 'noopener');
  });
})();
