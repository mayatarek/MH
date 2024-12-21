

// //copied from Travel sis
// function SearchBar(){

//     return(
//         <div>
//             <div class="search-section">
//             <h1 class="titles">Search for Your Dream Destination</h1>
//             <div class="search-container">
//                 <input type="text" id="searchBar" placeholder="Search for a destination..."/>
//                 <button class="search-button" onClick={filter()}>
//                     <i class="fas fa-search"></i>
//                 </button>
//             </div>
//             </div>
//         </div>
//     )
// }




// function filter() {
    //implementation needs many edits


    // const input = document.getElementById('searchBar').value.toUpperCase();
    // const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    // const container = document.getElementById('destList');

    // // Clear the existing content
    // container.innerHTML = '';

    // // Filter destinations based on input
    // const filteredDestinations = destinations.filter(destination => 
    //     destination.name.toUpperCase().includes(input) || 
    //     destination.description.toUpperCase().includes(input)
    // );

    // // Render the filtered destinations
    // filteredDestinations.forEach(destination => {
    //     const cardHtml = `
    //         <div class="col-md-6 mb-4">
    //             <div class="card shadow">
    //                 <img src="${destination.image}" class="card-img-top" height="300px" alt="${destination.name}">
    //                 <div class="card-body">
    //                     <h5 class="card-title">${destination.name}</h5>
    //                     <p class="card-text">${destination.description.substring(0, 100)}...</p>
    //                     <a href="details.html?destination=${encodeURIComponent(destination.name)}" class="btn">More details</a>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     container.innerHTML += cardHtml;
    // });

    // // Display a message if no destinations match the filter
    // if (filteredDestinations.length === 0) {
    //     container.innerHTML = `<p class="text-center">No destinations match your search criteria.</p>`;
    // }
//}

import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', width: '100%' }}
      />
    </div>
  );
};

export default SearchBar;
