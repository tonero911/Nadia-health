document.querySelectorAll(".left-faq > div").forEach((faqItem) => {
  const header = faqItem.querySelector("h3");
  const paragraph = faqItem.querySelector("p");
  if (header && paragraph) {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      const isOpen = paragraph.style.display === "block";
      paragraph.style.display = isOpen ? "none" : "block";
      header.classList.toggle("active-faq", !isOpen);
    });
    paragraph.style.display = "none";
  }
});
document.querySelectorAll(".drop-down").forEach((drop) => {
  drop.addEventListener("mouseenter", () => {
    const content = drop.querySelector(".drop-down-content");
    if (content) content.style.display = "block";
  });
  drop.addEventListener("mouseleave", () => {
    const content = drop.querySelector(".drop-down-content");
    if (content) content.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navIcon = document.querySelector(".nav-icon");
  const navbars = document.getElementById("navbars");
  const closeBtn = document.querySelector(".close-sidebar");

  navIcon.addEventListener("click", function () {
    navbars.classList.toggle("sidebar");
    document.body.classList.toggle(
      "no-scroll",
      navbars.classList.contains("sidebar")
    );
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      navbars.classList.remove("sidebar");
      document.body.classList.remove("no-scroll");
    });
  }
});
