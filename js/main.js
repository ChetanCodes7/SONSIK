/* Main Interactive Engine, Navigation & Case Tracker */
document.addEventListener('DOMContentLoaded', () => {
  console.log('SONSIK Official Engine Running');

  // 1. Mobile Navigation Toggle (Uses Event Delegation to work with dynamic header fetching)
  document.addEventListener('click', (event) => {
    const navToggle = event.target.closest('#navToggle');
    if (navToggle) {
      const navMenu = document.getElementById('navMenu');
      if (navMenu) {
        navMenu.classList.toggle('active');
      }
    }
  });

  // 2. SCF Case Tracker
  const trackBtn = document.getElementById('btn-track-scf');

  if (trackBtn) {
    trackBtn.addEventListener('click', () => {
      const caseIdInput = document.getElementById('scf-case-id');
      const statusBox = document.getElementById('scf-status-result');
      const caseId = caseIdInput ? caseIdInput.value.trim() : '';

      if (!statusBox) return;

      if (!caseId) {
        statusBox.innerHTML =
          '<p style="color:#dc2626; margin-top:1rem; font-weight:600;">Please enter a valid SCF Tracking Reference ID.</p>';
        return;
      }

      statusBox.innerHTML = `
        <div style="background:#f0f9ff; padding:1.2rem; border-radius:8px; border:1px solid #0284c7; margin-top:1rem;">
          <h4 style="color:#0369a1; margin-bottom:0.4rem;">Reference ID: ${caseId.replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
          })[char])}</h4>
          <p><strong>Status:</strong> Case under confidential review by Student Care Committee.</p>
          <p style="font-size:0.88rem; color:#64748b; margin-top:0.3rem;">Last Status Update: October 2026</p>
        </div>
      `;
    });
  }

  // 3. Back to Top Button
  const backToTopButton = document.getElementById('backToTop');

  if (backToTopButton) {
    const toggleBackToTop = () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop();

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
