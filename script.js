const messages = [
  "🌤️ Good morning! Start fresh today.",
  "💡 Keep learning something new!",
  "🔥 Stay motivated and work hard.",
  "🍀 Be kind and stay positive.",
  "📘 Read a page of a book today!",
  "🚶‍♂️ Take a short walk and breathe.",
  "🧘‍♀️ Relax your mind for 10 minutes."
];

function updateMessage() {
  const date = new Date();
  const index = date.getDate() % messages.length;
  document.getElementById("daily-message").textContent = messages[index];
}

// Load message when the page opens
updateMessage();
