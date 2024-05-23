document.addEventListener('DOMContentLoaded', () => {
    const quoteBox = document.getElementById('quoteBox');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const newQuoteBtn = document.getElementById('newQuoteBtn');

    const apiUrl = 'https://api.quotable.io/random';

    async function fetchQuote() {
        try {
            quoteText.textContent = 'Loading...';
            authorText.textContent = '';

            const response = await fetch(apiUrl);
            const data = await response.json();

            quoteText.textContent = `"${data.content}"`;
            authorText.textContent = `- ${data.author}`;
        } catch (error) {
            quoteText.textContent = 'Oops, something went wrong. Please try again.';
            authorText.textContent = '';
            console.error('Error fetching quote:', error);
        }
    }

    newQuoteBtn.addEventListener('click', fetchQuote);

    // Load a quote when the page is first loaded
    fetchQuote();
});
