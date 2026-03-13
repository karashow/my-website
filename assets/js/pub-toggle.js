document.addEventListener("DOMContentLoaded", () => {

  // Toggle function for any type of box
  function toggleBox(btnClass, boxClass) {
    document.querySelectorAll(btnClass).forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();

        const container = btn.closest('.pub-info');

        // First, close all other boxes inside this publication
        container.querySelectorAll('.abs-content, .bib-content').forEach(b => {
          if (!b.classList.contains(boxClass.substring(1))) { // leave the clicked one alone
            b.style.display = "none";
          }
        });

        // Then toggle the clicked box
        const box = container.querySelector(boxClass);
        if (box) {
          box.style.display = (box.style.display === "block") ? "none" : "block";
        }
      });
    });
  }

  // Toggle Abstract
  toggleBox('.toggle-abs', '.abs-content');

  // Toggle BibTeX
  toggleBox('.toggle-bib', '.bib-content');

  // Copy BibTeX
  document.querySelectorAll('.copy-bib').forEach(btn => {
    btn.addEventListener('click', () => {

      const container = btn.closest('.bib-content');
      const pre = container.querySelector('.bib-text');

      if (pre) {
        const text = pre.innerText;

        navigator.clipboard.writeText(text)
          .then(() => {
            const original = btn.innerText;
            btn.innerText = "Copied!";
            setTimeout(() => { btn.innerText = original; }, 1500);
          })
          .catch(err => alert("Failed to copy: " + err));
      }
    });
  });

});