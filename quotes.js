document.getElementById('newQuoteButton').addEventListener('click', getRandomQuote);
document.getElementById('searchButton').addEventListener('click', searchQuote);

function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            displayQuote(data);
        });
}

function searchQuote() {
    const searchTerm = document.getElementById('searchInput').value;
    fetch(`https://api.quotable.io/search/quotes?query=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                displayQuote(data.results[0]);
            } else {
                displayMessage("No quotes found.");
            }
        });
}

function displayQuote(quoteData) {
    const quoteElement = document.getElementById('quoteDisplay');
    quoteElement.innerHTML = `"${quoteData.content}" - ${quoteData.author}`;
}

function displayMessage(message) {
    const quoteElement = document.getElementById('quoteDisplay');
    quoteElement.innerHTML = message;
}
getRandomQuote();
