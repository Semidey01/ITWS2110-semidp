const barItems = [
   { itemName: "Portfolio", ref: "#portfolio" },
   { itemName: "Our Team", ref: "#team" },
   { itemName: "Contact", ref: "#contact" }
]


document.addEventListener("DOMContentLoaded", function () {
   const navLinks = document.querySelector('.nav-links');
   navLinks.innerHTML = "";
   // Detect if we're in a subdirectory (e.g., /profiles/)
   const isProfilePage = window.location.pathname.includes('/profiles/');
   barItems.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      // If on a profile page, link to index.html with hash, else just hash
      if (isProfilePage) {
         a.href = `../index.html${item.ref}`;
      } else {
         a.href = item.ref;
      }
      a.textContent = item.itemName;
      li.appendChild(a);
      navLinks.appendChild(li);
   });

   // Year in footer
   const yearEl = document.getElementById("year");
   if (yearEl) yearEl.textContent = new Date().getFullYear();

   // Smooth-scroll for in-page anchors
   document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
         const id = a.getAttribute("href");
         if (id && id.length > 1) {
            const target = document.querySelector(id);
            if (target) {
               e.preventDefault();
               target.scrollIntoView({ behavior: "smooth" });
            }
         }
      });
   });
});