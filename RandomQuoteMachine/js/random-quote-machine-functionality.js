function parseQuote(response) {
	document.getElementById("the-quote").innerHTML = response.quoteText;
	document.getElementById("the-author").innerHTML = response.quoteAuthor;
}