const quoteTag = document.getElementById('quote')
const authorTag = document.getElementById('author');
const newQuoteBtn = document.querySelector('.new-quote')


// FUNCTIONS:
function pickRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

function displayNewQuote() {

}


// Get Quotes From API
async function getInspirationalQuotes() {
    const url = 'https://type.fit/api/quotes';
    try {
        const resp = await fetch(url);
        const quotes = await resp.json()
        const quote = pickRandomQuote(quotes)
        quoteTag.innerHTML = quote.text;
        authorTag.innerHTML = quote.author;

    } catch (error) {
        console.log(`Error fetching quotes from ${url}\n`, error);
    }
}

getInspirationalQuotes();


// EVENT LISTENERS:
newQuoteBtn.addEventListener('click', e => console.log('click', e.target))