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
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
};

// Toggle the theme manually
var toggleTheme = () => {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
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
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
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
  
  // Split by spaces and process each word
  const words = str.split(/\s+/);
  
  return words.map((word, index) => {
    // Skip empty words
    if (!word) return word;
    
    // Check if word contains special characters (like colons, hyphens)
    const hasSpecialChars = /[:\-]/.test(word);
    
    if (hasSpecialChars) {
      // Handle words with colons or hyphens
      return word.split(/([:\-])/).map((part, partIndex) => {
        if (/[:\-]/.test(part)) return part; // Keep separator as is
        return convertWord(part, index === 0 || index === words.length - 1, lowercaseWords);
      }).join('');
    }
    
    return convertWord(word, index === 0 || index === words.length - 1, lowercaseWords);
  }).join(' ');
}

function convertWord(word, isFirstOrLast, lowercaseWords) {
  // Remove any trailing punctuation for processing
  const match = word.match(/^([\w']*)(.*)$/);
  if (!match) return word;
  
  const coreWord = match[1];
  const punctuation = match[2];
  
  if (!coreWord) return word;
  
  // Always capitalize first and last words
  if (isFirstOrLast) {
    return capitalizeFirst(coreWord) + punctuation;
  }
  
  // Check if word should be lowercase
  const lowerCore = coreWord.toLowerCase();
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

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener("change", (e) => {
          if (!localStorage.getItem("theme")) {
            setTheme(e.matches ? "dark" : "light");
          }
        });

  // Enable the theme toggle
  $('#theme-toggle').on('click', toggleTheme);

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
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

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
