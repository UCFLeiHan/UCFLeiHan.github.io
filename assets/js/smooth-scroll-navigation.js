// Smooth scroll to top when clicking navigation links for the current page
document.addEventListener('DOMContentLoaded', function() {
  // Get current page path
  function getCurrentPagePath() {
    const pathname = window.location.pathname;
    // Remove trailing slash for comparison (except root)
    if (pathname !== '/' && pathname.endsWith('/')) {
      return pathname.slice(0, -1);
    }
    return pathname;
  }
  
  // Get target path from href
  function getTargetPath(href) {
    try {
      const url = new URL(href, window.location.origin);
      let path = url.pathname;
      // Remove trailing slash for comparison (except root)
      if (path !== '/' && path.endsWith('/')) {
        path = path.slice(0, -1);
      }
      return path;
    } catch (e) {
      // If href is relative, parse it manually
      let path = href.split('#')[0]; // Remove hash
      if (path.startsWith('/')) {
        if (path !== '/' && path.endsWith('/')) {
          path = path.slice(0, -1);
        }
        return path;
      }
      return null;
    }
  }
  
  // Check if we're on the home page
  function isHomePage() {
    const pathname = window.location.pathname;
    return pathname === '/' || pathname === '/index.html' || pathname === '';
  }
  
  // Handle all navigation links in masthead
  const navLinks = document.querySelectorAll('.masthead__menu-item a[href]');
  
  navLinks.forEach(function(link) {
    // Skip theme toggle button
    if (link.querySelector('i#theme-icon')) {
      return;
    }
    
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      const currentPath = getCurrentPagePath();
      const targetPath = getTargetPath(href);
      
      // Special handling for News link (/#news)
      if (href === '/#news' || href.endsWith('/#news')) {
        if (isHomePage()) {
          // On home page: scroll to news section
          e.preventDefault();
          e.stopPropagation();
          const newsSection = document.getElementById('news');
          if (newsSection) {
            newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // If news section not found, scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
        // If not on home page, let browser navigate normally
        return;
      }
      
      // For other links, check if we're already on that page
      if (targetPath && currentPath === targetPath) {
        // We're already on this page: prevent default and scroll to top
        e.preventDefault();
        e.stopPropagation();
        if (window.scrollY > 0) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
      // If not on the same page, let browser navigate normally
    });
  });
});

