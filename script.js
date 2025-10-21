// WhatsApp booking links with optional vehicle context
const phone = "917870639642"; // India number without + or spaces
function buildWaLink(extraText = "") {
  const base =
    "Hi Unique Cab Services,\n\nI want to book a cab.\nPickup: \nDrop: \nDate/Time: \nPassengers: \nVehicle type: " +
    (extraText ? extraText : "") +
    "\n\nPlease confirm availability and fare. Thanks!";
  return `https://wa.me/${phone}?text=${encodeURIComponent(base)}`;
}

// Attach WA link to all elements with data-wa
document.querySelectorAll("[data-wa]").forEach((el) => {
  const extra = el.getAttribute("data-wa-text") || "";
  el.setAttribute("href", buildWaLink(extra));
  el.setAttribute("rel", "noopener");
});

// Current year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("show");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Close menu when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((lnk) =>
    lnk.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );
}
