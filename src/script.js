const quoteTag = document.getElementById('quote')
const authorTag = document.getElementById('author');
const newQuoteBtn = document.querySelector('.new-quote')


let inspirationalQuotes = []

// FUNCTIONS:
function pickRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function displayNewQuote() {
    const quote = pickRandomQuote(inspirationalQuotes);
    if (quote.author) {
        authorTag.innerHTML = quote.author;
    } else {
        authorTag.innerHTML = 'Unkown';
    }
    quoteTag.innerHTML = quote.text;
}


// Get Quotes From API
async function getInspirationalQuotes() {
    const url = 'https://type.fit/api/quotes';
    try {
        const resp = await fetch(url);
        inspirationalQuotes = await resp.json();
        displayNewQuote();

    } catch (error) {
        console.log(`Error fetching quotes from ${url}\n`, error);
    }
}

getInspirationalQuotes();


// EVENT LISTENERS:
newQuoteBtn.addEventListener('click', displayNewQuote)