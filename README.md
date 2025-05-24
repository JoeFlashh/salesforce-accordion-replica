# Salesforce Accordion Replica

A responsive accordion component inspired by Salesforce’s Starter Suite UI.  
Built with HTML, CSS (Grid, Flexbox, media queries), and JavaScript.

## Features

- Responsive two-column layout on desktop, single column on mobile
- Accordion functionality powered by **native radio inputs** and enhanced with advanced CSS selectors:
  - `:checked` — styles the currently selected accordion input to show active state
  - Adjacent sibling combinator `+` — targets labels immediately after inputs for styling toggles
  - The relational pseudo-class `:has()` — applies styles to parent elements when a child input is checked, enabling dynamic border and content visibility without JavaScript
- Dynamic main image updates according to the active accordion item via JavaScript

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.

## Deployment

This project is ready for deployment on GitHub Pages or any static hosting service.  
Example URL: `https://your-username.github.io/your-repo-name/`

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, transitions, media queries, advanced selectors)
- JavaScript (vanilla)

---

Feel free to reach out if you'd like a live demo or further explanations of the implementation!
