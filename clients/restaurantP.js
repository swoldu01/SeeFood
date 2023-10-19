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
            console.log(response.data)
            const restaurant = response.data;
            console.log('Restaurant Data:', restaurant);
            const detailsDiv = document.getElementById('restaurant-details');
            detailsDiv.innerHTML = `
                <h2>${restaurant.name}</h2>
                <p>${restaurant.address}</p>
                <ul>
                    ${restaurant.dishes.map(dish => `<li><a href="/restaurants/${restaurantId}/dishes/${dish._id}">${dish.name}</a></li>`).join('')}
                </ul>
            `;
        })
        .catch(err => {
            console.error('Error fetching restaurant details:', err);
        });
        
}

