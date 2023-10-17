document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    const type = document.getElementById('searchType').value;
    axios.get(`http://localhost:3001/search?type=${type}&q=${query}`)
        .then(response => {
            displayResults(response.data);
        })
        .catch(err => {
            console.error('Error fetching search results:', err);
        });
});

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = data.map(item => `<p>${item.name}</p>`).join('');
}
