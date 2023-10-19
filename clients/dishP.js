// More complicated method of structuring the URL testing purposes.
document.addEventListener('DOMContentLoaded', function() {
    const dishId = localStorage.getItem('dishId');
    if (dishId) {
        displayDishDetails(dishId);
        localStorage.removeItem('dishId'); // Clear the ID from local storage
    } else {
        // Handle error - ID not found in local storage
    }
});

function displayDishDetails(dishId) {
    axios.get(`http://localhost:3001/dishes/${dishId}`)
        .then(response => {
            const dish = response.data;
            document.getElementById('dish-name').textContent = dish.name;
            document.getElementById('dish-description').textContent = dish.description;
            
            // Once the dish details are populated, display the reviews for the dish
            displayReviews(dishId);
        })
        .catch(err => {
            console.error('Error fetching dish details:', err);
        });
}


            // // If there are reviews, construct the reviews HTML
            // if (dish.reviews && dish.reviews.length > 0) {
            //     const reviewsHTML = dish.reviews.map(review => `
            //         <div class="review">
            //             <h4>${review.user.username}</h4> 
            //             <p>Rating: ${review.rating}</p>
            //             <p>${review.comment}</p>
            //         </div>
            //     `).join('');

            //     dishDetailsHTML += `<h3>Reviews:</h3>${reviewsHTML}`;
            // } else {
            //     dishDetailsHTML += `<p>No reviews yet for this dish.</p>`;
            // }

            // // Set the constructed HTML to the details div
            // detailsDiv.innerHTML = dishDetailsHTML;
//         })
//         .catch(err => {
//             console.error('Error fetching dish details:', err);
//         });
// }

// Fetch and display reviews when the page loads
function displayReviews(dishId) {
    axios.get(`http://localhost:3001/dishes/${dishId}/reviews`)
        .then(response => {
            const reviewsDiv = document.getElementById('reviews');
            reviewsDiv.innerHTML = response.data.map(review => `
                <div class="review">
                    <p>${review.comment}</p>
                    <button onclick="deleteReview('${review._id}')">Delete</button>
                </div>
            `).join('');
        })
        .catch(err => {
            console.error('Error fetching reviews:', err);
        });
}

document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const dishId = window.location.pathname.split('/')[4];
    axios.post(`http://localhost:3001/dishes/${dishId}/reviews`, { comment: reviewText })
        .then(response => {
            displayReviews(dishId);
        })
        .catch(err => {
            console.error('Error submitting review:', err);
        });
});

function deleteReview(reviewId) {
    const dishId = window.location.pathname.split('/')[4];
    axios.delete(`http://localhost:3001/dishes/${dishId}/reviews/${reviewId}`)
        .then(response => {
            displayReviews(dishId);
        })
        .catch(err => {
            console.error('Error deleting dish details:', err);
        });
    }

    function goHome() {
        window.location.href = '/clients';  // Redirects to the homepage
    }
    
    function goBack() {
        window.history.back();  // Goes back to the previous page in the browser history
    }
    