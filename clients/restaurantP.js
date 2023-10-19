document.addEventListener('DOMContentLoaded', function() {
    const restaurantId = localStorage.getItem('restaurantId');
    if (restaurantId) {
        displayRestaurantDetails(restaurantId);
    } else {
        // Handle error - ID not found in local storage
    }
});

function displayRestaurantDetails(restaurantId) {
    axios.get(`http://localhost:3001/restaurants/${restaurantId}`)
        .then(response => {
            const restaurant = response.data;
            document.getElementById('restaurant-name').textContent = restaurant.name;
            document.getElementById('restaurant-description').textContent = restaurant.address;

            const dishesList = document.getElementById('dishes-list');
            dishesList.innerHTML = restaurant.dishes.map(dish => `
                <li>
                    <a href="dishP.html" onclick="saveToLocalStorage('${dish._id}', 'dishId')">${dish.name}</a>
                </li>
            `).join('');
        })
        .catch(err => {
            console.error('Error fetching restaurant details:', err);
        });
}

function saveToLocalStorage(id, key) {
    localStorage.setItem(key, id);
}

function goHome() {
    window.location.href = '/clients';  // Redirects to the homepage
}

function goBack() {
    window.history.back();  // Goes back to the previous page in the browser history
}

