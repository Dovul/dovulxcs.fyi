// Add any JavaScript functionality you want to include in your blog here
// Function to render LaTeX and Markdown
function renderContent() {
  const markdownContainer = document
    .getElementById("markdown-content")
    .querySelector(".container");
  const rawMarkdown = `
# Markdown and LaTeX Example

This is an example of **Markdown** text with some *LaTeX*:

$$
\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
$$

You can customize this content and add your own Markdown and LaTeX.
`;

  const md = window.markdownit({
    html: true,
    linkify: true,
    typographer: true,
  });
  md.use(window.markdownitKatex);

  markdownContainer.innerHTML = md.render(rawMarkdown);
}

// Call the function to render content
renderContent();
