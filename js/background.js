(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  // ── Config ──────────────────────────────────────────────────
  const PARTICLE_COUNT = 172;
  const MAX_DIST       = 145;
  const SPEED          = 0.35;
  const PARTICLE_RADIUS_MIN = 1;
  const PARTICLE_RADIUS_MAX = 3.2;

  // ── State ────────────────────────────────────────────────────
  let particles = [];
  let animId    = null;
  let W = 0, H = 0;

  // ── Color helpers ────────────────────────────────────────────
  function getColors() {
    const light = document.body.classList.contains('light-theme');
    return {
      particle: light ? 'rgba(0, 71, 204, 0.45)'   : 'rgba(26, 107, 255, 0.55)',
      lineBase: light ? 'rgba(0, 71, 204, '          : 'rgba(26, 107, 255, ',
    };
  }

  // ── Particle factory ─────────────────────────────────────────
  function mkParticle() {
    const angle = Math.random() * Math.PI * 2;
    const speed = (Math.random() * 0.5 + 0.2) * SPEED;
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r:  PARTICLE_RADIUS_MIN + Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN),
    };
  }

  // ── Init ─────────────────────────────────────────────────────
  function init() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(mkParticle());
    }
  }

  // ── Resize ───────────────────────────────────────────────────
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  // ── Draw loop ────────────────────────────────────────────────
  function draw() {
    ctx.clearRect(0, 0, W, H);
    const c = getColors();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0)  { p.x = 0;  p.vx *= -1; }
      if (p.x > W)  { p.x = W;  p.vx *= -1; }
      if (p.y < 0)  { p.y = 0;  p.vy *= -1; }
      if (p.y > H)  { p.y = H;  p.vy *= -1; }

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = c.particle;
      ctx.fill();

      // Draw connecting lines to nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q  = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        // Squared distance avoids sqrt until necessary
        const d2 = dx * dx + dy * dy;
        if (d2 < MAX_DIST * MAX_DIST) {
          const dist  = Math.sqrt(d2);
          const alpha = (1 - dist / MAX_DIST) * 0.38;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = c.lineBase + alpha + ')';
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    animId = requestAnimationFrame(draw);
  }

  // ── Resize handler (debounced) ───────────────────────────────
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      cancelAnimationFrame(animId);
      resize();
      init();
      draw();
    }, 150);
  });

  // ── Start ────────────────────────────────────────────────────
  resize();
  init();
  draw();

  // ── Expose theme-update hook called from main.js ─────────────
  // (no-op; colors are read live from document.body class each frame)
  window.bgCanvas = { ready: true };
}());
