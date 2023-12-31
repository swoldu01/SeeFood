//Search functionality

//Listens for the form submission event.
document.getElementById('searchForm').addEventListener('submit', function(e) {

    //Prevents the default form submission behavior (which is to reload the page).
    e.preventDefault();
    // Retrivesd input value
    const query = document.getElementById('searchInput').value;
    const type = document.getElementById('searchType').value;
//Makes an Axios GET request to the backend to fetch the search results.
    axios.get(`http://localhost:3001/search?type=${type}&q=${query}`)
        .then(response => {
            //Calls the displayResults function to display the search results.
            displayResults(response.data, type);
        })
        .catch(err => {
            console.error('Error fetching search results:', err);
        });
});

//Display search results

//The displayResults function takes the data returned from the backend and maps over it to create a list of links. Each link corresponds to a restaurant dish, and the link's href attribute points to the restaurant's unique ID. Then displayed in `results` div
function displayResults(data, type) {
    const resultsDiv = document.getElementById('results');
    // if (type === 'restaurant') {
    //     resultsDiv.innerHTML = data.map(item => `<a href="restaurantP.html">${item.name}</a>`).join('<br>');
    // } else if (type === 'dish') {
    //     resultsDiv.innerHTML = data.map(item => `<a href="dishP.html">${item.name}</a>`).join('<br>');
    // }
        // if (type === 'restaurant') {
        //     resultsDiv.innerHTML = data.map(item => `<a href="/restaurants/${item._id}" class="result-link">${item.name}</a>`).join('<br>');
        // } else if (type === 'dish') {
        //     resultsDiv.innerHTML = data.map(item => `<a href="/restaurants/${item.restaurantId}/dishes/${item._id}" class="result-link">${item.name}</a>`).join('<br>');
        // }
        if (type === 'restaurant') {
            resultsDiv.innerHTML = data.map(item => `<a href="restaurantP.html" onclick="saveToLocalStorage('${item._id}', 'restaurantId')">${item.name}</a>`).join('<br>');
        } else if (type === 'dish') {
            resultsDiv.innerHTML = data.map(item => `<a href="dishP.html" onclick="saveToLocalStorage('${item._id}', 'dishId')">${item.name}</a>`).join('<br>');
        }
    }
    
    function saveToLocalStorage(id, key) {
        localStorage.setItem(key, id);
    }
    


// document.getElementById('results').addEventListener('click', function(e) {
//     if (e.target.tagName === 'A') {
//         e.preventDefault();
//         const restaurantId = e.target.getAttribute('href').split('/')[2];
//         displayRestaurantDetails(restaurantId);
//     }
// });

