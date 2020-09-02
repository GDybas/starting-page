class Quote {
  constructor(quote, author) {
    this.quote = quote;
    this.author = author;
  }

  async getQuote() {
    const response = await fetch('https://type.fit/api/quotes');

    const responseData = await response.json();

    return responseData;
  }
}