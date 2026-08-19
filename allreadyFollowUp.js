document.addEventListener('DOMContentLoaded', () => {
    // 1. Create the button element
    const filterBtn = document.createElement('button');
    filterBtn.id = 'generateTableBtn';
    filterBtn.innerText = 'Filtered';
    
    // Optional: Add some basic styling to the button
    filterBtn.classList="fixed top-4 left-0 z-50 px-5 py-3 bg-gray-950 text-pink-700 border-4 border-pink-700 shadow-xl shadow-black transition-all duration-300 hover:scale-110";

    // 2. Append the button to the body of the document
    document.body.appendChild(filterBtn);

    // 3. Add the click event listener to the button
    filterBtn.addEventListener('click', function() {
        // Find the source table by its ID "dataTable"
        const sourceTable = document.querySelector('table');
        if (!sourceTable) {
            console.error('Table with ID "dataTable" not found.');
            return;
        }

        // Create the new table element
        const newTable = document.createElement('table');
        newTable.className = 'filtered-data-table w-full'; // Optional class for styling
        
        // Clone the thead from the old table
        const oldThead = sourceTable.querySelector('thead');
        if (oldThead) {
            const newThead = oldThead.cloneNode(true);
            newTable.appendChild(newThead);
        }

        // Create the new tbody
        const newTbody = document.createElement('tbody');
newTbody.classList = "divide-y-2 divide-blue-400";
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
    });
});
