/* Load Font Awesome for social media icons */
if (!document.querySelector('link[href*="font-awesome"]')) {
  const fontAwesome = document.createElement('link');
  fontAwesome.rel = 'stylesheet';
  fontAwesome.href =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
  document.head.appendChild(fontAwesome);
}

// Dynamic Component Loader with Active State Highlighter
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      const html = await response.text();
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        targetElement.innerHTML = html;
        if (elementId === 'app-header') {
          setActiveNavLink();
        }
      }
    }
  } catch (error) {
    console.error(`Error loading ${filePath}:`, error);
  }
}

function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.nav-menu a');
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Adjust paths for subfolder pages (like admin/dashboard.html)
  const isSubfolder = window.location.pathname.includes('/admin/');
  const pathPrefix = isSubfolder ? '../' : '';

  loadComponent('app-header', `${pathPrefix}includes/header.html`);
  loadComponent('app-footer', `${pathPrefix}includes/footer.html`);
});
