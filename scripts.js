// Fetch news data from your API and render it in the news container
// For now, we use a placeholder array of news items
const newsData = [
  {
    title: "Sample News 1",
    content:
      "This is a **Markdown** and LaTeX example: $x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$",
  },
  {
    title: "Sample News 2",
    content: "Another **Markdown** and LaTeX example: $\\int_{a}^{b} x^2 dx$",
  },
];

const newsContainer = document.getElementById("news-container");

newsData.forEach((newsItem) => {
  const newsTitle = document.createElement("h2");
  newsTitle.textContent = newsItem.title;

  const newsContent = document.createElement("div");
  newsContent.innerHTML = marked(newsItem.content);

  newsContainer.appendChild(newsTitle);
  newsContainer.appendChild(newsContent);
});

MathJax.typesetPromise();
