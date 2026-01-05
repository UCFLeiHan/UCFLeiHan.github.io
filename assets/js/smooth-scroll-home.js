// Smooth scroll to top when clicking Home or site title on the home page
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're currently on the home page
  function checkIfHomePage() {
    const pathname = window.location.pathname;
    const hash = window.location.hash;
    // Remove hash for comparison
    const pathWithoutHash = pathname;
    const pathParts = pathWithoutHash.split('/').filter(function(part) {
      return part && part !== '';
    });
    
    // Home page is either "/" or "/index.html" or just the base path
    return pathWithoutHash === '/' || 
           pathWithoutHash === '/index.html' ||
           pathParts.length === 0;
  }
  
  // Handle Home link in navigation (masthead)
  const homeLinks = document.querySelectorAll('.masthead a[href="/"], .masthead a[href*="/index.html"]');
  homeLinks.forEach(function(link) {
    const linkText = link.textContent.trim();
    const href = link.getAttribute('href');
    
    // Check if this is a Home link (not the site title)
    const isHomeLink = linkText === 'Home' && (href === '/' || href.includes('/index.html'));
    
    if (isHomeLink) {
      link.addEventListener('click', function(e) {
        // Check at click time if we're on home page
        if (checkIfHomePage()) {
          // On home page: prevent default and smooth scroll
          e.preventDefault();
          e.stopPropagation();
          if (window.scrollY > 0) {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
        // If not on home page, do nothing - let browser navigate normally
      });
    }
  });
  
  // Handle site title link in masthead (the "Lei Han | Transportation Engineering" link)
  const siteTitleLink = document.querySelector('.masthead__menu-item--lg a');
  if (siteTitleLink) {
    const href = siteTitleLink.getAttribute('href');
    // Check if it points to home
    if (href === '/' || href.endsWith('/') || href.includes('/index.html')) {
      siteTitleLink.addEventListener('click', function(e) {
        // Check at click time if we're on home page
        if (checkIfHomePage()) {
          // On home page: prevent default and smooth scroll
          e.preventDefault();
          e.stopPropagation();
          if (window.scrollY > 0) {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
        // If not on home page, do nothing - let browser navigate normally
      });
    }
  }
});

