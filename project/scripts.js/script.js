// DOM Elements
const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quote");

// Array of motivational eco-quotes
const quotes = [
  "The Earth is what we all have in common. – Wendell Berry",
  "Small acts, when multiplied by millions, can transform the world. – Howard Zinn",
  "Reduce, reuse, recycle. Repeat.",
  "Live simply so that others may simply live. – Mahatma Gandhi"
];

// Load quote from localStorage if available
window.addEventListener("DOMContentLoaded", () => {
  const savedQuote = localStorage.getItem("ecoQuote");
  if (savedQuote) {
    quoteDisplay.textContent = savedQuote;
  }
});

// Event listener for quote button
quoteBtn?.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  quoteDisplay.textContent = selectedQuote;
  localStorage.setItem("ecoQuote", selectedQuote);

});

const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last update: ${lastModified}`;
    }
