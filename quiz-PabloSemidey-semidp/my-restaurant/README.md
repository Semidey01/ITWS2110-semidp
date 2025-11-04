# Resturant Menu Application

A responsive web application that displays a restaurant menu with dish details, categories, and images. Used JSON for the menu data and Ajax to dynamically display the menu data in the webpage.

## Features

- Dynamic Menu Display: Loads menu items from a JSON data file
- Product Images: Displays thumbnail photos for each dish
- Category Badges: Color-coded badges for dietary categories (vegan, vegetarian, non-vegetarian)
- Detailed Information: Shows dish name, description, cuisine type, ingredients, and price
- Responsive Design: Clean, professional table layout with hover effects
- AJAX Loading: Asynchronously fetches menu data without page refresh

## File Structure

project/
├── index.html          # Main HTML file with page structure
├── resources/
│   ├── css             # Styling and layout
│   ├── js              # JavaScript for loading and displaying menu
│   └── img             # Stock photos for dishes
└── data/
    └── menu.json       # Menu data in JSON format
