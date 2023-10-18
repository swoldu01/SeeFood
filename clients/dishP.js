// More complicated method of structuring the URL testing purposes.
document.addEventListener('DOMContentLoaded', function() {
    const pathParts = window.location.pathname.split('/');
    const restaurantId = pathParts[2];
    const dishId = pathParts[4];
    displayDishDetails(restaurantId, dishId);
});

function displayDishDetails(restaurantId, dishId) {
    axios.get(`http://localhost:3001/restaurants/${restaurantId}/dishes/${dishId}`)
        .then(response => {
            const dish = response.data;
            const detailsDiv = document.getElementById('details');

            // Construct the dish details HTML
            let dishDetailsHTML = `
                <h2>${dish.name}</h2>
                <p>${dish.description}</p>
            `;

            // If there are reviews, construct the reviews HTML
            if (dish.reviews && dish.reviews.length > 0) {
                const reviewsHTML = dish.reviews.map(review => `
                    <div class="review">
                        <h4>${review.user.username}</h4> 
                        <p>Rating: ${review.rating}</p>
                        <p>${review.comment}</p>
                    </div>
                `).join('');

                dishDetailsHTML += `<h3>Reviews:</h3>${reviewsHTML}`;
            } else {
                dishDetailsHTML += `<p>No reviews yet for this dish.</p>`;
            }

            // Set the constructed HTML to the details div
            detailsDiv.innerHTML = dishDetailsHTML;
        })
        .catch(err => {
            console.error('Error fetching dish details:', err);
        });
}



