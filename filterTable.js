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
        newTable.classList ='filtered-data-table w-full bg-gray-800 text-gray-200 text-xs'; // Optional class for styling
        
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
        const sectionHeading = document.createElement('div');
        sectionHeading.innerHTML = `<div class="table-toolbar flex justify-between border-b-2 p-2 w-full mt-4 mb-4 bg-rose-400">
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold text-blue-300/70 uppercase tracking-wider flex items-center gap-1">
            <span class="material-icons text-sm">AlreadyFollow</span>
          </span>
          <button class="render-btn bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-1.5 rounded-xl text-sm font-medium flex items-center gap-1 shadow-lg shadow-cyan-900/30 transition">
            <span class="material-icons text-sm">play_arrow</span> Render
          </button>
          <button class="remove-btn text-gray-400 hover:text-rose-400 text-sm flex items-center gap-1 transition">
            <span class="material-icons text-sm">delete_outline</span>
          </button>
        </div>
        <div class="flex items-center gap-3">
          <div class="filter-bar flex items-center gap-1 bg-[#0d1628] px-2 py-1 rounded-full border border-[#1e2d42]">
            <span class="material-icons text-gray-400 text-sm">search</span>
            <input type="text" placeholder="Filter rows..." class="bg-transparent border-none outline-none focus:border-none focus:outline-none p-1 w-28 md:w-36 text-xs text-emerald-500">
          </div>
          <button class="sort-asc btn-ghost px-2 py-0.5 rounded-full text-xs flex items-center gap-1"><span class="material-icons text-sm">arrow_upward</span></button>
          <button class="sort-desc btn-ghost px-2 py-0.5 rounded-full text-xs flex items-center gap-1"><span class="material-icons text-sm">arrow_downward</span></button>
          <button class="export-csv btn-ghost px-2 py-0.5 rounded-full text-xs flex items-center gap-1"><span class="material-icons text-sm">file_download</span></button>
        </div>
      </div>`;
        document.body.append(sectionHeading,newTable);
    });
});
