(function () {
  // Run script after DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Select all tables on the page
    const tables = document.querySelectorAll('table');

    tables.forEach((table, index) => {
      // Create wrapper if necessary or position button before table
      const button = document.createElement('button');
      button.innerText = 'Download Table as HTML';
      
      // Basic inline styling for the download button itself
      button.style.cssText = `
        margin-bottom: 10px;
        padding: 8px 16px;
        background-color: #2563eb;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-family: system-ui, sans-serif;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
      `;

      button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#1d4ed8';
      });
      button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#2563eb';
      });

      // Handle download action
      button.addEventListener('click', () => {
        downloadTableAsHTML(table, index + 1);
      });

      // Insert button immediately before the table
      table.parentNode.insertBefore(button, table);
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
<body class="p-8 bg-gray-50 flex justify-center items-start min-h-screen">
  <div class="overflow-x-auto shadow-md rounded-lg max-w-full">
    ${tableClone.outerHTML}
  </div>
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
