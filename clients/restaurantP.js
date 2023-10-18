document.addEventListener('DOMContentLoaded', function() {
    const restaurantId = window.location.pathname.split('/')[2];
    displayRestaurantDetails(restaurantId);
});

function displayRestaurantDetails(restaurantId) {
    axios.get(`http://localhost:3001/restaurants/${restaurantId}`)
        .then(response => {
            const restaurant = response[0];
            const detailsDiv = document.getElementById('details');
            detailsDiv.innerHTML = `
                <h2>${restaurant.name}</h2>
                <p>${restaurant.description}</p>
                <ul>
                    ${restaurant.dishes.map(dish => `<li><a href="/restaurants/${restaurantId}/dishes/${dish._id}">${dish.name}</a></li>`).join('')}
                </ul>
            `;
        })
        .catch(err => {
            console.error('Error fetching restaurant details:', err);
        });
}
