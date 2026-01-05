(function() {
  function getDataAttribute(element, name) {
    // Always return the attribute value as-is, don't try to get content
    return element.getAttribute('data-' + name) || '';
  }
  
  function showCitationModal(bibtexText) {
    try {
      var modal = document.getElementById('citation-modal');
      var bibtex = document.getElementById('citation-bibtex');
      
      if (!modal || !bibtex) {
        console.error("Citation modal elements not found");
        return;
      }
      
      if (!bibtexText) {
        console.error("BibTeX text is empty");
        return;
      }
      
      // Clean BibTeX text - only replace HTML entities, preserve ALL content exactly as in md file
      var formattedBibtex = String(bibtexText)
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&#10;/g, '\n')
        .replace(/&#13;/g, '')
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '');
      
      // Ensure closing brace is always on a new line with proper indentation (2 spaces)
      // First, remove any existing closing brace(s) at the very end of the string
      // Match closing brace that is at the end, possibly with whitespace before it
      formattedBibtex = formattedBibtex.replace(/\s*\}+$/gm, ''); // Remove all closing braces at the end
      formattedBibtex = formattedBibtex.trim(); // Remove trailing whitespace
      
      // If text is compressed to single line, format it for readability
      // But preserve ALL fields exactly as they appear in the md file
      var lines = formattedBibtex.split('\n').filter(function(line) { return line.trim().length > 0; });
      if (lines.length < 3) {
        // Add line break after entry type and key
        formattedBibtex = formattedBibtex.replace(/@article\{([^,]+),/, '@article{$1,\n');
        // Add line breaks before each field - match ALL field names (title, author, journal, volume, pages, year, publisher, doi, number, etc.)
        formattedBibtex = formattedBibtex.replace(/,\s*([a-z]+)=/g, ',\n  $1=');
      }
      
      // Finally, ensure closing brace is on new line without indentation
      // Remove any closing brace that might still be there, then add one properly formatted
      formattedBibtex = formattedBibtex.replace(/\s*\}+$/gm, ''); // Remove any remaining closing braces
      formattedBibtex = formattedBibtex.trim(); // Remove trailing whitespace
      formattedBibtex = formattedBibtex + '\n}'; // Add closing brace on new line without indentation
      
      bibtex.textContent = formattedBibtex;
      modal.classList.add('is-active');
      document.body.classList.add('modal-open');
    } catch (error) {
      console.error("Error showing citation modal:", error);
    }
  }
  
  function closeCitationModal() {
    var modal = document.getElementById('citation-modal');
    if (modal) {
      modal.classList.remove('is-active');
      document.body.classList.remove('modal-open');
    }
  }
  
  function generateBibTeX(title, authors, venue, year, doi) {
    var firstAuthor = authors ? authors.split(",")[0].trim().split(" ").pop().toLowerCase() : "author";
    var entryKey = firstAuthor + year + (title ? title.toLowerCase().replace(/[^a-z0-9]/g, "").substring(0, 15) : "");
    var bibtex = "@article{" + entryKey + ",\n";
    if (title) { bibtex += "  title={" + title + "},\n"; }
    if (authors) {
      var cleanAuthors = authors.replace(/<[^>]*>/g, "").replace(/\*/g, "");
      bibtex += "  author={" + cleanAuthors + "},\n";
    }
    if (venue) { bibtex += "  journal={" + venue + "},\n"; }
    if (year) { bibtex += "  year={" + year + "},\n"; }
    if (doi) {
      var doiNumber = doi.indexOf("doi.org/") !== -1 ? doi.split("doi.org/")[1] : doi;
      bibtex += "  doi={" + doiNumber + "},\n";
    }
    // Do not add publisher automatically - only use what's in the BibTeX file
    bibtex += "}";
    return bibtex;
  }
  
  function copyToClipboard(text, button) {
    var originalHTML = button.innerHTML;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function() {
        button.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied!';
        setTimeout(function() { button.innerHTML = originalHTML; }, 2000);
      }).catch(function() { copyWithExecCommand(text, button, originalHTML); });
    } else {
      copyWithExecCommand(text, button, originalHTML);
    }
  }
  
  function copyWithExecCommand(text, button, originalHTML) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      button.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Copied!';
      setTimeout(function() { button.innerHTML = originalHTML; }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
    document.body.removeChild(textarea);
  }
  
  function downloadBibTeX(bibtexText) {
    var entryMatch = bibtexText.match(/@article\{([^,]+),/);
    var filename = entryMatch ? entryMatch[1] + ".bib" : "citation.bib";
    var blob = new Blob([bibtexText], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  function initCitationModal() {
    console.log("Initializing citation modal...");
    document.addEventListener('click', function(event) {
      var target = event.target;
      try {
        var citationBtn = target.closest('.citation-btn');
        if (citationBtn) {
          console.log("Cite button clicked!");
          event.preventDefault();
          event.stopPropagation();
          var bibtexId = getDataAttribute(citationBtn, 'bibtex-id');
          var bibtex = '';
          if (bibtexId) {
            console.log("Looking for BibTeX script with ID:", bibtexId);
            var scriptTag = document.getElementById(bibtexId);
            if (scriptTag) {
              bibtex = scriptTag.textContent || scriptTag.innerText;
              console.log("BibTeX found in script tag, length:", bibtex.length);
            } else {
              console.log("BibTeX script tag not found with ID:", bibtexId);
            }
          } else {
            console.log("No bibtex-id attribute found on button");
          }
          var title = getDataAttribute(citationBtn, 'title');
          var authors = getDataAttribute(citationBtn, 'authors');
          var venue = getDataAttribute(citationBtn, 'venue');
          var year = getDataAttribute(citationBtn, 'year');
          var doi = getDataAttribute(citationBtn, 'doi');
          console.log("BibTeX:", bibtex ? "Found (" + bibtex.length + " chars)" : "Not found, will generate");
          var bibtexText = bibtex || generateBibTeX(title, authors, venue, year, doi);
          showCitationModal(bibtexText);
          return;
        }
      } catch (error) {
        console.error("Error handling citation button click:", error);
        return;
      }
      try {
        if (target.classList.contains('citation-modal__close') || target.classList.contains('citation-modal__overlay')) {
          closeCitationModal();
          return;
        }
        if (target.id === 'citation-copy-btn' || target.closest('#citation-copy-btn')) {
          var copyBtn = target.id === 'citation-copy-btn' ? target : target.closest('#citation-copy-btn');
          var bibtexText = document.getElementById('citation-bibtex').textContent;
          copyToClipboard(bibtexText, copyBtn);
          return;
        }
        if (target.id === 'citation-download-btn' || target.closest('#citation-download-btn')) {
          var bibtexText = document.getElementById('citation-bibtex').textContent;
          downloadBibTeX(bibtexText);
          return;
        }
      } catch (error) {
        console.error("Error handling modal interaction:", error);
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === "Escape") {
        var modal = document.getElementById('citation-modal');
        if (modal && modal.classList.contains('is-active')) {
          closeCitationModal();
        }
      }
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCitationModal);
  } else {
    initCitationModal();
  }
})();

