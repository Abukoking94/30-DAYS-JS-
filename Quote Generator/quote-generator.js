const quote = document.querySelector(".main-quote");
const quoteAuthor = document.querySelector(".main-author");
const quoteBtn = document.querySelector(".quote-btn");

let quoteArray = [
  {
    quote: `'sss'`,
    person: `ss`,
  },
  {
    quote: `'ddd'`,
    person: `ddd`,
  },

  {
    quote: `'ddd'`,
    person: `ddd`,
  },

  {
    quote: `'ddd'`,
    person: `ddd`,
  },

  {
    quote: `'ddd'`,
    person: `ddd`,
  },
];

quoteBtn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quoteArray.length);

  quote.innerHTML = quoteArray[random].quote;
  person.innerHTML = quoteArray[random].person;
});
