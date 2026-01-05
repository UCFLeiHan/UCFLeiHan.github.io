/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Determine the expected state of the theme toggle, which can be "dark", "light", or
// "system". Default is "system".
let determineThemeSetting = () => {
  let themeSetting = localStorage.getItem("theme");
  return (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;
};

// Determine the computed theme, which can be "dark" or "light". If the theme setting is
// "system", the computed theme is determined based on the user's system preference.
let determineComputedTheme = () => {
  let themeSetting = determineThemeSetting();
  if (themeSetting != "system") {
    return themeSetting;
  }
  return (userPref && userPref("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// detect OS/browser preference
const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Set the theme on page load or when explicitly called
let setTheme = (theme) => {
  const use_theme =
    theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    "system";

  // Save theme preference
  if (use_theme !== "system") {
    localStorage.setItem("theme", use_theme);
  } else {
    localStorage.setItem("theme", "system");
  }

  // Apply theme
  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon, #theme-icon-mobile").removeClass("fa-sun fa-circle-half-stroke").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon, #theme-icon-mobile").removeClass("fa-moon fa-circle-half-stroke").addClass("fa-sun");
  } else {
    // system/auto mode - follow system preference
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (systemPref === "dark") {
      $("html").attr("data-theme", "dark");
    } else {
      $("html").removeAttr("data-theme");
    }
    $("#theme-icon, #theme-icon-mobile").removeClass("fa-sun fa-moon").addClass("fa-circle-half-stroke");
  }
};

// Toggle the theme manually (cycles through system -> light -> dark -> system)
var toggleTheme = () => {
  const current_setting = determineThemeSetting();
  let new_theme;
  if (current_setting === "system") {
    new_theme = "light";
  } else if (current_setting === "light") {
    new_theme = "dark";
  } else {
    new_theme = "system";
  }
  console.log("Toggling theme from", current_setting, "to", new_theme);
  setTheme(new_theme);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
// Theme layouts are loaded via separate script tag (theme.js), available as window.plotlyDarkLayout and window.plotlyLightLayout

// CV PDF Button
(function() {
  function initCVPDFButton() {
    const pageTitle = document.querySelector('.archive .page__title');
    if (pageTitle && !pageTitle.querySelector('.cv-pdf-button') && window.location.pathname.includes('/cv')) {
      // Get the original text content
      let titleText = '';
      const childNodes = Array.from(pageTitle.childNodes);
      childNodes.forEach(function(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          titleText += node.textContent;
        }
      });
      titleText = titleText.trim();
      
      // Clear all child nodes
      while (pageTitle.firstChild) {
        pageTitle.removeChild(pageTitle.firstChild);
      }
      
      // Create title span
      if (titleText) {
        const titleSpan = document.createElement('span');
        titleSpan.textContent = titleText.toUpperCase();
        pageTitle.appendChild(titleSpan);
      }
      
      // Create PDF button
      const pdfButton = document.createElement('a');
      pdfButton.href = '/files/LH_Academic_CV.pdf';
      pdfButton.target = '_blank';
      pdfButton.rel = 'noopener noreferrer';
      pdfButton.className = 'cv-pdf-button';
      
      // Create SVG
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '12');
      svg.setAttribute('height', '12');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.style.flexShrink = '0';
      
      const paths = [
        'M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z',
        'M14 2V8H20',
        'M16 13H8',
        'M16 17H8',
        'M10 9H9H8'
      ];
      
      paths.forEach(function(pathD) {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathD);
        path.setAttribute('stroke', 'currentColor');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        svg.appendChild(path);
      });
      
      pdfButton.appendChild(svg);
      
      const pdfSpan = document.createElement('span');
      pdfSpan.textContent = 'PDF';
      pdfButton.appendChild(pdfSpan);
      
      pageTitle.appendChild(pdfButton);
    }
  }
  
  // Try multiple times to ensure it runs after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initCVPDFButton, 100);
    });
  } else {
    setTimeout(initCVPDFButton, 100);
  }
  
  // Also try on window load as backup
  window.addEventListener('load', function() {
    setTimeout(initCVPDFButton, 50);
  });
})();
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? window.plotlyDarkLayout : window.plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

/* ==========================================================================
   Title Case Conversion Function
   ========================================================================== */

function toTitleCase(str) {
  if (!str) return str;
  
  // Words that should remain lowercase (unless first or last word)
  const lowercaseWords = [
    'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'in', 'into',
    'nor', 'of', 'on', 'or', 'the', 'to', 'with', 'is', 'are', 'was', 'were',
    'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did',
    'doing', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can',
    'cannot', 'shall', 'ought', 'need', 'dare', 'used'
  ];
  
  // Words/phrases that should preserve their original casing (case-insensitive match)
  const preserveCaseWords = [
    'zfighting', 'ai', 'fps', 'cv', 'api', 'ui', 'ux', 'html', 'css', 'js', 
    'json', 'xml', 'http', 'https', 'url', 'uri', 'id', 'pdf', 'gif', 'png',
    'jpg', 'jpeg', 'svg', 'ai-human', 'human-ai'
  ];
  
  // Split by spaces and process each word
  const words = str.split(/\s+/);
  
  return words.map((word, index) => {
    // Skip empty words
    if (!word) return word;
    
    // Check if word contains special characters (like colons, hyphens)
    const hasSpecialChars = /[:\-]/.test(word);
    
    if (hasSpecialChars) {
      // Handle words with colons or hyphens
      // Split and process each part, but preserve casing for acronyms
      return word.split(/([:\-])/).map((part, partIndex) => {
        if (/[:\-]/.test(part)) return part; // Keep separator as is
        // For parts after colon/hyphen, treat as not first/last word
        const isFirstPart = partIndex === 0;
        return convertWord(part, isFirstPart && index === 0, lowercaseWords, preserveCaseWords);
      }).join('');
    }
    
    return convertWord(word, index === 0 || index === words.length - 1, lowercaseWords, preserveCaseWords);
  }).join(' ');
}

function convertWord(word, isFirstOrLast, lowercaseWords, preserveCaseWords) {
  // Remove any trailing punctuation for processing
  const match = word.match(/^([\w']*)(.*)$/);
  if (!match) return word;
  
  const coreWord = match[1];
  const punctuation = match[2];
  
  if (!coreWord) return word;
  
  // Check if word should preserve its original casing
  const lowerCore = coreWord.toLowerCase();
  if (preserveCaseWords.includes(lowerCore)) {
    // Find the original word in the preserveCaseWords list to get its casing
    // For now, we'll use a simple heuristic: if it's in the list, preserve original
    return coreWord + punctuation;
  }
  
  // Check if word contains multiple consecutive uppercase letters (like "ZFighting", "AI", "FPS")
  // Also check if word is all uppercase (like "FPS", "AI")
  // If so, preserve the original casing
  const hasConsecutiveUppercase = /[A-Z]{2,}/.test(coreWord);
  const isAllUppercase = coreWord === coreWord.toUpperCase() && coreWord.length > 1;
  const hasMixedCaseWithUppercase = coreWord.length > 1 && 
    coreWord[0] === coreWord[0].toUpperCase() && 
    coreWord[1] === coreWord[1].toUpperCase() &&
    /[A-Z]/.test(coreWord.slice(1));
  
  if (hasConsecutiveUppercase || isAllUppercase || hasMixedCaseWithUppercase) {
    return coreWord + punctuation;
  }
  
  // Always capitalize first and last words
  if (isFirstOrLast) {
    return capitalizeFirst(coreWord) + punctuation;
  }
  
  // Check if word should be lowercase
  if (lowercaseWords.includes(lowerCore)) {
    return lowerCore + punctuation;
  }
  
  // Capitalize other words
  return capitalizeFirst(coreWord) + punctuation;
}

function capitalizeFirst(word) {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Apply Title Case to publication page titles
  $('.page__title').each(function() {
    const $title = $(this);
    const originalText = $title.text();
    if (originalText) {
      const titleCaseText = toTitleCase(originalText);
      $title.text(titleCaseText);
    }
  });

  // Initialize theme (default to "system" if not set)
  const currentTheme = determineThemeSetting();
  setTheme(currentTheme);
  
  // Listen for system theme changes when in "system" mode
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          const themeSetting = determineThemeSetting();
          if (themeSetting === "system") {
            setTheme("system");
          }
        });

  // Enable the theme toggle (desktop and mobile - both use same toggle function)
  $('#theme-toggle, #theme-toggle-mobile').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
    return false;
  });

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("padding-bottom", "0");
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  if (typeof fitvids !== 'undefined') {
    fitvids();
  }

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function (e) {
    e.stopPropagation(); // Prevent event from bubbling to document
    const $menu = $(".author__urls");
    const $button = $(this);
    
    if ($menu.is(":visible")) {
      // Hide menu
      $menu.fadeOut("fast");
      $button.removeClass("open");
    } else {
      // Show menu - calculate position using fixed positioning
      const buttonRect = $button[0].getBoundingClientRect();
      const menuWidth = $menu.outerWidth() || 150; // Default width if not calculated
      
      // Calculate right position: align menu right edge with button right edge
      const menuRight = $(window).width() - buttonRect.right;
      
      // Position menu below button, closer (reduce margin from 15px to 8px)
      $menu.css({
        'position': 'fixed',
        'top': (buttonRect.bottom + 8) + 'px',
        'right': menuRight + 'px',
        'left': 'auto',
        'z-index': '999999'
      });
      
      // Update arrow position to point to button center
      // Arrow should be positioned relative to menu's left edge
      const menuLeft = buttonRect.right - menuWidth;
      const arrowLeft = buttonRect.left + (buttonRect.width / 2) - menuLeft - 10;
      $menu[0].style.setProperty('--arrow-left', arrowLeft + 'px');
      
      $menu.fadeIn("fast");
      $button.addClass("open");
    }
  });

  // Close Follow menu when clicking outside (mobile only)
  $(document).on("click", function (e) {
    const $button = $(".author__urls-wrapper button");
    const $menu = $(".author__urls");
    const $wrapper = $(".author__urls-wrapper");
    
    // Only handle if button is visible (mobile mode) and menu is open
    if ($button.is(":visible") && $menu.is(":visible")) {
      // Check if click is outside the wrapper and menu
      const target = $(e.target);
      if (!$wrapper.is(target) && $wrapper.has(target).length === 0 && 
          !$menu.is(target) && $menu.has(target).length === 0) {
        $menu.fadeOut("fast");
        $button.removeClass("open");
      }
    }
  });

  // Update menu position on scroll/resize when menu is open
  $(window).on('scroll resize', function() {
    const $menu = $(".author__urls");
    const $button = $(".author__urls-wrapper button");
    
    if ($menu.is(":visible") && $button.is(":visible")) {
      const buttonRect = $button[0].getBoundingClientRect();
      const menuWidth = $menu.outerWidth() || 150;
      const menuRight = $(window).width() - buttonRect.right;
      const menuLeft = buttonRect.right - menuWidth;
      const arrowLeft = buttonRect.left + (buttonRect.width / 2) - menuLeft - 10;
      
      $menu.css({
        'top': (buttonRect.bottom + 8) + 'px',
        'right': menuRight + 'px',
        '--arrow-left': arrowLeft + 'px'
      });
    }
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  if (typeof $.fn.smoothScroll !== 'undefined') {
    $("a").smoothScroll({
      offset: -scssMastheadHeight,
      preventDefault: false,
    });
  }

  // Handle citation modal - use event delegation
  $(document).on("click", ".citation-btn", function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $btn = $(this);
    const bibtex = $btn.data("bibtex");
    const title = $btn.data("title");
    const authors = $btn.data("authors");
    const venue = $btn.data("venue");
    const year = $btn.data("year");
    const doi = $btn.data("doi");
    
    // Generate BibTeX if not provided
    const bibtexText = bibtex || generateBibTeX(title, authors, venue, year, doi);
    
    // Show modal with BibTeX
    showCitationModal(bibtexText);
  });

  // Close modal handlers - use event delegation
  $(document).on("click", ".citation-modal__close, .citation-modal__overlay", function() {
    closeCitationModal();
  });

  // Copy button - use event delegation
  $(document).on("click", "#citation-copy-btn", function() {
    const bibtexText = $("#citation-bibtex").text();
    copyToClipboard(bibtexText, $(this));
  });

  // Download button - use event delegation
  $(document).on("click", "#citation-download-btn", function() {
    const bibtexText = $("#citation-bibtex").text();
    downloadBibTeX(bibtexText);
  });

  // Close modal on Escape key
  $(document).on("keydown", function(e) {
    if (e.key === "Escape" && $("#citation-modal").hasClass("is-active")) {
      closeCitationModal();
    }
  });

});

/* ==========================================================================
   Citation Modal Functions
   ========================================================================== */

function showCitationModal(bibtexText) {
  const $modal = $("#citation-modal");
  const $bibtex = $("#citation-bibtex");
  
  if ($modal.length === 0 || $bibtex.length === 0) {
    console.error("Citation modal elements not found");
    return;
  }
  
  $bibtex.text(bibtexText);
  $modal.addClass("is-active");
  $("body").addClass("modal-open");
}

function closeCitationModal() {
  $("#citation-modal").removeClass("is-active");
  $("body").removeClass("modal-open");
}

function generateBibTeX(title, authors, venue, year, doi) {
  // Generate entry key from first author and year
  const firstAuthor = authors ? authors.split(",")[0].trim().split(" ").pop().toLowerCase() : "author";
  const entryKey = firstAuthor + year + (title ? title.toLowerCase().replace(/[^a-z0-9]/g, "").substring(0, 15) : "");
  
  let bibtex = `@article{${entryKey},\n`;
  
  if (title) {
    bibtex += `  title={${title}},\n`;
  }
  
  if (authors) {
    // Remove HTML tags and clean authors
    const cleanAuthors = authors.replace(/<[^>]*>/g, "").replace(/\*/g, "");
    bibtex += `  author={${cleanAuthors}},\n`;
  }
  
  if (venue) {
    bibtex += `  journal={${venue}},\n`;
  }
  
  if (year) {
    bibtex += `  year={${year}},\n`;
  }
  
  if (doi) {
    // Extract DOI number from URL if it's a full URL
    const doiNumber = doi.includes("doi.org/") ? doi.split("doi.org/")[1] : doi;
    bibtex += `  doi={${doiNumber}},\n`;
  }
  
  bibtex += `  publisher={Elsevier}\n`;
  bibtex += `}`;
  
  return bibtex;
}

function copyToClipboard(text, $button) {
  const originalText = $button.html();
  
  // Try modern Clipboard API first
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      $button.html('<i class="fas fa-check" aria-hidden="true"></i> Copied!');
      setTimeout(() => {
        $button.html(originalText);
      }, 2000);
    }).catch(() => {
      copyWithExecCommand(text, $button, originalText);
    });
  } else {
    copyWithExecCommand(text, $button, originalText);
  }
}

function copyWithExecCommand(text, $button, originalText) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    $button.html('<i class="fas fa-check" aria-hidden="true"></i> Copied!');
    setTimeout(() => {
      $button.html(originalText);
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
  document.body.removeChild(textarea);
}

function downloadBibTeX(bibtexText) {
  // Generate filename from first line (entry key)
  const entryMatch = bibtexText.match(/@article\{([^,]+),/);
  const filename = entryMatch ? entryMatch[1] + ".bib" : "citation.bib";
  
  // Create blob and download
  const blob = new Blob([bibtexText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
