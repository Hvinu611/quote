const quotes = [
  "Believe in yourself.",
  "Keep going. You’re closer than you think.",
  "You are capable of amazing things.",
  "Progress, not perfection.",
  "Stay soft, stay strong."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
