// Main Interactive Engine & Case Tracker
document.addEventListener('DOMContentLoaded', () => {
  console.log('SONSIK Official Engine Running');

  const trackBtn = document.getElementById('btn-track-scf');
  if (trackBtn) {
    trackBtn.addEventListener('click', () => {
      const caseIdInput = document.getElementById('scf-case-id');
      const statusBox = document.getElementById('scf-status-result');
      const caseId = caseIdInput ? caseIdInput.value.trim() : '';
      
      if (!caseId) {
        statusBox.innerHTML = '<p style="color:#dc2626; margin-top:1rem; font-weight:600;">Please enter a valid SCF Tracking Reference ID.</p>';
        return;
      }
      
      statusBox.innerHTML = `
        <div style="background:#f0f9ff; padding:1.2rem; border-radius:8px; border:1px solid #0284c7; margin-top:1rem;">
          <h4 style="color:#0369a1; margin-bottom:0.4rem;">Reference ID: ${caseId}</h4>
          <p><strong>Status:</strong> Case under confidential review by Student Care Committee.</p>
          <p style="font-size:0.88rem; color:#64748b; margin-top:0.3rem;">Last Status Update: October 2026</p>
        </div>
      `;
    });
  }
});
