(function () {
  // Run script after DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Select all tables on the page
    const tables = document.querySelectorAll('table');

    tables.forEach((table, index) => {
      // Create wrapper if necessary or position button before table
      const dbutton = document.createElement('button');
      dbutton.innerHTML = `<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="15"></line>
  <polyline points="19 12 12 19 5 12"></polyline><path d="M20 21H4"></path></svg>`;
      dbutton.classList="w-10 h-10 p-1 hover:bg-blue-400/50";
      // Basic inline styling for the download button itself
      dbutton.style.cssText = `
        margin-bottom: 10px;
        background-color: #2563eb;
        border-radius: 6px;
        font-family: system-ui, sans-serif;
        transition: background-color 0.2s;
      `;

      dbutton.addEventListener('mouseover', () => {
        dbutton.style.backgroundColor = '#1d4ed8';
      });
      dbutton.addEventListener('mouseout', () => {
        dbutton.style.backgroundColor = '#2563eb';
      });

      // Handle download action
      dbutton.addEventListener('click', () => {
        downloadTableAsHTML(table, index + 1);
      });

      // Insert button immediately before the table
      table.parentNode.insertBefore(dbutton, table);
    });
  });

  function downloadTableAsHTML(tableElement, tableIndex) {
    // Clone table to avoid mutating original DOM element
    const tableClone = tableElement.cloneNode(true);

    // Build the full HTML document string including Tailwind CDN
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exported Table</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body><div class="bg-gray-950 min-h-screen text-gray-200">
<div class="p-6 w-full mt-16 mb-16 mx-auto">
<div class="overflow-auto">
    ${tableClone.outerHTML}
  </div>
  </div>
  </div>
  <script src="https://hckrxyzz.github.io/js/scrollbutton.js"></script>
  <script src="https://hckrxyzz.github.io/js/note.js"></script>
</body>
</html>`;

    // Create a Blob and trigger the download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `table-export-${tableIndex}.html`;
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up temporary DOM node and object URL
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  }
})();
