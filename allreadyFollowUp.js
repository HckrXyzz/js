document.addEventListener('DOMContentLoaded', () => {
    // 1. Create the button element
    const filterBtn = document.createElement('button');
    filterBtn.id = 'generateTableBtn';
    filterBtn.innerText = 'Generate Filtered Table';
    
    // Optional: Add some basic styling to the button
    filterBtn.style.padding = '10px 15px';
    filterBtn.style.backgroundColor = '#007bff';
    filterBtn.style.color = 'white';
    filterBtn.style.border = 'none';
    filterBtn.style.borderRadius = '4px';
    filterBtn.style.cursor = 'pointer';
    filterBtn.style.margin = '20px 0';

    // 2. Append the button to the body of the document
    document.body.appendChild(filterBtn);

    // 3. Add the click event listener to the button
    filterBtn.addEventListener('click', function() {
        // Find the source table by its ID "dataTable"
        const sourceTable = document.getElementById('dataTable');
        if (!sourceTable) {
            console.error('Table with ID "dataTable" not found.');
            return;
        }

        // Create the new table element
        const newTable = document.createElement('table');
        newTable.className = 'filtered-data-table'; // Optional class for styling
        
        // Clone the thead from the old table
        const oldThead = sourceTable.querySelector('thead');
        if (oldThead) {
            const newThead = oldThead.cloneNode(true);
            newTable.appendChild(newThead);
        }

        // Create the new tbody
        const newTbody = document.createElement('tbody');

        // Find all rows in tbody with class "status-highlight"
        const highlightedRows = sourceTable.querySelectorAll('tbody tr.status-highlight');

        // Clone and append each highlighted row
        highlightedRows.forEach(row => {
            const clonedRow = row.cloneNode(true);
            newTbody.appendChild(clonedRow);
        });

        // Append tbody to the new table
        newTable.appendChild(newTbody);

        // Optional: Create a title for the new table
        const sectionHeading = document.createElement('h3');
        sectionHeading.innerText = 'Filtered Results';
        document.body.appendChild(sectionHeading);

        // Append the complete new table to the body
        document.body.appendChild(newTable);

        // Optional: Disable the button after generation to prevent duplicates
        this.disabled = true;
        this.style.backgroundColor = '#ccc';
        this.style.cursor = 'not-allowed';
    });
});
