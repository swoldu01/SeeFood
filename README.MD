<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SeeFood README</title>
    <style>
    </style>
</head>
<body>

<h1>SeeFood</h1>

<h2>Features:</h2>
<ul>
    <li>Search functionality for specific dishes and or restaurants.</li>
    <li>Ability to see top-rated dishes in a particular area or cuisine.</li>
    <li>Filter reviews based on dish type, dietary restrictions.</li>
</ul>

<h2>Planning</h2>
<p>Github Repo: Create a new repository named <strong>SeeFood</strong>.</p>

<h3>ERD:</h3>
<p>Entities: User, Review, Restaurant, Dish, (maybe) Cuisine.</p>
<p>Relationships:</p>
<ul>
    <li>A user can write many reviews.</li>
    <li>A restaurant can have many dishes.</li>
    <li>A dish can have many reviews.</li>
</ul>
<img src="image.png" alt="ERD Image">

<h3>Wireframes:</h3>
<p>The following are the wireframe details for the Homepage, Restaurant Page, Dish Page, Review Form, and User Profile:</p>

<ol>
    <li><strong>Homepage:</strong>
        <ul>
            <li><strong>Header:</strong> Logo on the left, navigation links (Home, Browse Restaurants, My Reviews, Profile, Login/Signup) on the right.</li>
            <li><strong>Main Content:</strong>
                <ul>
                    <li>Large search bar in the center with placeholder text "Search for a dish or restaurant".</li>
                    <li>Below the search bar, display featured dishes or top-rated dishes with images, dish name, restaurant name, and average rating.</li>
                </ul>
            </li>
            <li><strong>Footer:</strong> Links to About, Contact, Terms of Service, etc.</li>
        </ul>
    </li>

    <li><strong>Restaurant Page:</strong>
        <ul>
            <li><strong>Header:</strong> Same as the homepage.</li>
            <li><strong>Main Content:</strong>
                <ul>
                    <li>Restaurant name, address, dietary accommodations, and a brief description at the top.</li>
                    <li>A list of dishes served by the restaurant. Each dish should have an image, name, average rating, and a link/button to view detailed reviews.</li>
                </ul>
            </li>
            <li><strong>Footer:</strong> Same as the homepage.</li>
        </ul>
    </li>

    <li><strong>Dish Page:</strong>
        <ul>
            <li><strong>Header:</strong> Same as the homepage.</li>
            <li><strong>Main Content:</strong>
                <ul>
                    <li>Dish name, image, dietary restrictions, and a brief description at the top.</li>
                    <li>Below, display user reviews for the dish. Each review should show the user's name, rating, and comment.</li>
                    <li>A button or link to "Write a Review" for the dish.</li>
                </ul>
            </li>
            <li><strong>Footer:</strong> Same as the homepage.</li>
        </ul>
    </li>

    <li><strong>Review Form:</strong>
        <ul>
            <li><strong>Header:</strong> Same as the homepage.</li>
            <li><strong>Main Content:</strong>
                <ul>
                    <li>Fields for rating (e.g., star selection or dropdown), comment box, and an optional field for uploading a photo of the dish.</li>
                    <li>Submit button to post the review.</li>
                </ul>
            </li>
            <li><strong>Footer:</strong> Same as the homepage.</li>
        </ul>
    </li>

    <li><strong>User Profile:</strong>
        <ul>
            <li><strong>Header:</strong> Same as the homepage.</li>
            <li><strong>Main Content:</strong>
                <ul>
                    <li>User details (name, email, profile picture) at the top.</li>
                    <li>Below, a list of the user's reviews. Each review should show the dish name, restaurant, rating, comment, and an option to edit or delete the review.</li>
                </ul>
            </li>
            <li><strong>Footer:</strong> Same as the homepage.</li>
        </ul>
    </li>
</ol>


<h3>User Stories:</h3>
<blockquote>
    "As a user, I want to search for a restaurant so that I can see their dishes."
</blockquote>
<blockquote>
    "As a user, I want to search for a dish so that I can see its reviews."
</blockquote>
<blockquote>
    "As a user, I want to write a review for a dish so that I can share my experience."
</blockquote>

<h3>MVP:</h3>
<p>Basic user registration, ability to add reviews for dishes, search functionality for dishes/restaurants.</p>

<h3>Stretch Goals:</h3>
<p>Advanced search filters, user profiles with their review history, top-rated dishes feature, integration with maps for restaurant or dish locations, dish recommendations based on user preferences.</p>

<h2>Development</h2>
<h3>Backend:</h3>
<ul>
    <li>Set up Node, Express, and MongoDB.</li>
    <li>Design MongoDB schemas based on ERD.</li>
    <li>Implement CRUD operations for each model.</li>
</ul>

<h3>Frontend:</h3>
<ul>
    <li>Design pages based on wireframes.</li>
    <li>Use Axios for making requests to my backend.</li>
    <li>Implement user interactions like adding reviews, and searching for dishes/restaurants.</li>
    <li>Styling: Use tasty visuals and ensure mobile-responsive.</li>
</ul>

</body>
</html>





