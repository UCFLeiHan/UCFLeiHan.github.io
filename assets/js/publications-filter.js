/**
 * Publications Search and Filter
 * Handles search and filtering for publications page
 */

(function() {
  'use strict';

  // User's name - should match the name in author list
  const USER_NAME = 'Lei Han';

  function getUserRoleInPublication(authorsHTML) {
    if (!authorsHTML || !authorsHTML.trim()) {
      return null; // Return null if no author info, so it can be handled differently
    }
    
    // Parse HTML to extract individual authors
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = authorsHTML;
    
    // Get text content to split by comma
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    const authorStrings = textContent.split(',').map(s => s.trim()).filter(s => s.length > 0);
    
    // Split HTML by comma, but preserve HTML tags
    const htmlParts = splitHTMLByComma(authorsHTML);
    
    if (htmlParts.length === 0 && authorStrings.length > 0) {
      // Fallback: use text-based splitting if HTML splitting failed
      htmlParts.push(...authorStrings);
    }
    
    let userRole = null;
    let userFound = false;
    
    htmlParts.forEach(function(authorHTML, index) {
      if (userFound) return; // Already found user, skip
      
      // Get clean name for matching
      const tempAuthorDiv = document.createElement('div');
      tempAuthorDiv.innerHTML = authorHTML;
      const cleanName = (tempAuthorDiv.textContent || tempAuthorDiv.innerText || '').replace(/\*/g, '').trim();
      
      // Check if this is the user
      if (cleanName && isUserName(cleanName)) {
        userFound = true;
        // Check if this is corresponding author (has *)
        const isCorresponding = authorHTML.includes('*') || (authorStrings[index] && authorStrings[index].includes('*'));
        const isFirst = index === 0;
        
        // Priority: first > corresponding > other
        if (isFirst) {
          userRole = 'first';
        } else if (isCorresponding) {
          userRole = 'corresponding';
        } else {
          userRole = 'other';
        }
      }
    });
    
    // Return null if user not found (not 'other'), so caller can handle it appropriately
    return userFound ? userRole : null;
  }

  function isUserName(name) {
    // Case-insensitive comparison
    const normalizedName = name.toLowerCase().trim();
    const normalizedUserName = USER_NAME.toLowerCase().trim();
    
    // Check if the name contains the user's name
    return normalizedName.includes(normalizedUserName) || 
           normalizedUserName.includes(normalizedName) ||
           normalizedName === normalizedUserName;
  }

  function splitHTMLByComma(html) {
    if (!html || !html.trim()) {
      return [];
    }
    
    // Split HTML by comma while preserving HTML tags
    const parts = [];
    let current = '';
    let inTag = false;
    let tagDepth = 0; // Track nested tags
    
    for (let i = 0; i < html.length; i++) {
      const char = html[i];
      
      if (char === '<') {
        inTag = true;
        current += char;
        // Check if it's a closing tag
        if (i + 1 < html.length && html[i + 1] === '/') {
          tagDepth--;
        } else {
          tagDepth++;
        }
      } else if (char === '>') {
        inTag = false;
        current += char;
      } else if (char === ',' && !inTag && tagDepth === 0) {
        // Only split on comma if we're not inside a tag and no open tags
        const trimmed = current.trim();
        if (trimmed) {
          parts.push(trimmed);
        }
        current = '';
      } else {
        current += char;
      }
    }
    
    // Add the last part
    const trimmed = current.trim();
    if (trimmed) {
      parts.push(trimmed);
    }
    
    return parts.filter(p => p.length > 0);
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const searchInput = document.getElementById('publication-search');
    const yearFilter = document.getElementById('publication-year-filter');
    const journalFilter = document.getElementById('publication-journal-filter');
    const objectsFilter = document.getElementById('publication-objects-filter');
    const authorFilter = document.getElementById('author-format-filter');
    const publicationsList = document.getElementById('publications-list');

    if (!searchInput || !yearFilter || !publicationsList) {
      return; // Exit if elements don't exist
    }

    // Get all publication items - try multiple selectors
    let publicationItems = publicationsList.querySelectorAll('[data-publication-year]');
    
    // If no items found, try finding by class
    if (publicationItems.length === 0) {
      publicationItems = publicationsList.querySelectorAll('.list__item, .archive__item');
      console.log('Found', publicationItems.length, 'publication items by class');
    } else {
      console.log('Found', publicationItems.length, 'publication items by data attribute');
    }

      function filterPublications() {
        // Get all filter values - ensure we get fresh values each time
        const searchTerm = (searchInput && searchInput.value) ? searchInput.value.toLowerCase().trim() : '';
        const selectedYear = (yearFilter && yearFilter.value) ? yearFilter.value.trim() : '';
        const selectedJournal = (journalFilter && journalFilter.value) ? journalFilter.value.toLowerCase().trim() : '';
        const selectedObjects = (objectsFilter && objectsFilter.value) ? objectsFilter.value.toLowerCase().trim() : '';
        const selectedAuthorRole = (authorFilter && authorFilter.value) ? authorFilter.value : 'all';

        let visibleCount = 0;

        publicationItems.forEach(function(item) {
          // Get data attributes - ensure we get the actual values
          const yearAttr = item.getAttribute('data-publication-year');
          const year = yearAttr ? String(yearAttr).trim() : '';
          const title = (item.getAttribute('data-publication-title') || '').toLowerCase();
          const authors = (item.getAttribute('data-publication-authors') || '').toLowerCase();
          const venue = (item.getAttribute('data-publication-venue') || '').toLowerCase();

          // Check filters
          // Journal filter: if selected, venue must match (case-insensitive)
          let matchesJournal = !selectedJournal || venue.includes(selectedJournal);
          
          // Year filter: if no year selected (empty), show all; if selected, must match exactly
          // Convert both to string for comparison
          let matchesYear = !selectedYear || String(year) === String(selectedYear);
          
          // Search filter: if no search term, show all; if has term, must match in title, authors, or venue
          let matchesSearch = !searchTerm || 
            title.includes(searchTerm) || 
            authors.includes(searchTerm) || 
            venue.includes(searchTerm);
          
          // Objects filter: if no objects selected (empty), show all; if selected, objects string must contain the selected value
          const objectsAttr = item.getAttribute('data-publication-objects');
          const objects = objectsAttr ? String(objectsAttr).toLowerCase().trim() : '';
          let matchesObjects = !selectedObjects || objects.includes(selectedObjects);
          
          // Author role filter: check user's role in this publication
          let matchesAuthorRole = true;
          if (selectedAuthorRole !== 'all' && authorFilter) {
            const authorElement = item.querySelector('.archive__item-authors[data-authors-original]');
            if (authorElement) {
              const originalHTML = authorElement.getAttribute('data-authors-original');
              if (originalHTML && originalHTML.trim()) {
                const userRole = getUserRoleInPublication(originalHTML);
                // If userRole is null, user not found in this publication, so hide it
                // If userRole is not null, check if it matches the selected role
                matchesAuthorRole = (userRole !== null && userRole === selectedAuthorRole);
              } else {
                // If no original HTML, can't determine role, so hide
                matchesAuthorRole = false;
              }
            } else {
              // If no author element with data-authors-original, can't determine role, so hide
              matchesAuthorRole = false;
            }
          }

          // Show/hide item - all conditions must be true (AND logic)
          // All filter conditions must pass
          const shouldShow = matchesJournal && 
                            matchesYear && 
                            matchesSearch && 
                            matchesObjects && 
                            matchesAuthorRole;
          
          if (shouldShow) {
            item.style.display = '';
            visibleCount++;
          } else {
            item.style.display = 'none';
          }
        });

      // Update publications count
      const countElement = document.getElementById('publications-count-number');
      if (countElement) {
        countElement.textContent = visibleCount;
      }

      // Show message if no results
      let noResultsMsg = document.getElementById('no-results-message');
      if (visibleCount === 0) {
        if (!noResultsMsg) {
          noResultsMsg = document.createElement('p');
          noResultsMsg.id = 'no-results-message';
          noResultsMsg.className = 'no-results-message';
          noResultsMsg.textContent = 'No publications found matching your criteria.';
          publicationsList.appendChild(noResultsMsg);
        }
        noResultsMsg.style.display = 'block';
      } else {
        if (noResultsMsg) {
          noResultsMsg.style.display = 'none';
        }
      }
    }

    // Add event listeners
    searchInput.addEventListener('input', filterPublications);
    yearFilter.addEventListener('change', filterPublications);
    if (journalFilter) {
      journalFilter.addEventListener('change', filterPublications);
    }
    if (objectsFilter) {
      objectsFilter.addEventListener('change', filterPublications);
    }
    if (authorFilter) {
      authorFilter.addEventListener('change', filterPublications);
    }

    // Initialize count with total number of publications
    const countElement = document.getElementById('publications-count-number');
    if (countElement) {
      countElement.textContent = publicationItems.length;
    }

    // Don't run initial filter - show all publications by default
    // filterPublications();
    
    // Set sticky top position based on masthead height
    const masthead = document.querySelector('.masthead');
    const filterContainer = document.querySelector('.publications-filter-container');
    if (masthead && filterContainer) {
      const mastheadHeight = masthead.offsetHeight;
      filterContainer.style.top = mastheadHeight + 'px';
    }
  }
})();

