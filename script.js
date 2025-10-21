// WhatsApp booking link with optional vehicle context
const phone = "917870639642"; // India number without + or spaces

function buildWaLink(extraText = "") {
  const base =
    "Hi Unique Cab Services,\n\nI want to book a cab.\nPickup: \nDrop: \nDate/Time: \nPassengers: \nVehicle type: " +
    (extraText ? extraText : "") +
    "\n\nPlease confirm availability and fare. Thanks!";
  const waText = encodeURIComponent(base);
  return `https://wa.me/${phone}?text=${waText}`;
}

// Wire up all buttons/links marked with data-wa
document.querySelectorAll("[data-wa]").forEach((el) => {
  const extra = el.getAttribute("data-wa-text") || "";
  el.setAttribute("href", buildWaLink(extra));
  el.setAttribute("rel", "noopener");
});

// Current year in footer
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// Smooth scroll for same-page anchors
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
