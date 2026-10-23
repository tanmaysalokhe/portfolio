// =========================================================
// Tanmay Salokhe — Portfolio scripts
// =========================================================
(function () {
  const root = document.documentElement;

  // ---------- Theme toggle (remembers choice) ----------
  const THEME_KEY = "ts-theme";
  const getSaved = () => { try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; } };
  const save = (v) => { try { localStorage.setItem(THEME_KEY, v); } catch (e) { /* ignore */ } };

  const initial = getSaved() ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    save(next);
  });

  // ---------- Mobile menu ----------
  const burger = document.getElementById("burger");
  const links = document.getElementById("navLinks");
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    })
  );

  // ---------- Nav shadow, back-to-top, active link ----------
  const nav = document.getElementById("nav");
  const toTop = document.getElementById("toTop");
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = links.querySelectorAll("a");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 10);
    toTop.classList.toggle("show", y > 500);

    let current = "";
    sections.forEach((s) => { if (y >= s.offsetTop - 120) current = s.id; });
    navAnchors.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + current)
    );
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // ---------- Typing effect ----------
  const roles = ["Data Analyst", "Power BI Developer", "SQL Enthusiast", "Python Programmer"];
  const typed = document.getElementById("typed");
  let r = 0, c = roles[0].length, deleting = true;
  function type() {
    const word = roles[r];
    typed.textContent = word.slice(0, c);
    if (deleting) {
      c--;
      if (c < 0) { deleting = false; r = (r + 1) % roles.length; c = 0; }
    } else {
      c++;
      if (c > roles[r].length) { deleting = true; setTimeout(type, 1600); return; }
    }
    setTimeout(type, deleting ? 45 : 90);
  }
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setTimeout(type, 2000);

  // ---------- Scroll reveal + counters ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("visible");
      e.target.querySelectorAll("[data-count]").forEach((el) => {
        const target = +el.dataset.count;
        let n = 0;
        const step = () => { el.textContent = n; if (n++ < target) setTimeout(step, 120); };
        step();
      });
      io.unobserve(e.target);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();
})();
