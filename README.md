# 🎭 Random Meme Generator

A simple web app that fetches random memes from an API and displays them on the page. Users can click a button to load a new meme instantly.

# 🌐 Live Demo
[🔗 Click here to view the project](https://random-meme-generator-xi.vercel.app/)

#📌 Features
- Fetches memes from the [Meme API](https://meme-api.com/).
- Displays memes in an `<img>` element.
- Button click to generate a new meme.
- Loads a meme automatically when the page opens.
- Easy to customize and style.

# 🛠️ Technologies Used
- **HTML** – Structure of the web page
- **CSS** – Styling and layout (optional animations can be added)
- **JavaScript (ES6)** – Fetching data from the API and updating the DOM

# 🚀 How It Works
1. The page loads and fetches a meme using `fetch()` and `async/await`.
2. The meme URL is extracted from the JSON response.
3. The `src` attribute of the `<img>` element is updated to show the meme.
4. Clicking the "Generate Meme" button fetches another meme.

