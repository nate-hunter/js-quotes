
// RANDOM SEINFELD QUOTE;
function getRandomSeinfeldQuote() {
    fetch("https://seinfeld-quotes.herokuapp.com/random")
        .then(resp => resp.json())
        .then(data => console.log(data))
}


// ZEN QUOTES:
function getRandomZenQuote() {
    const url = 'https://zenquotes.io/api/random'
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: {}
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
}

// getRandomSeinfeldQuote();
// getRandomZenQuote();