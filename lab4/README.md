# Lab 4 - Generative AI

## Lab Description:

The premise of this lab was to create the same website as in lab 3, but using only Gen AI to write all the code. We had to reflect on what limitations/difficulties we encountered during the development process of this website. 

## List of Prompts

- Create a web application using the instructions I have attached. Make sure to use a second API of your choice. Use the following key for the weather api: API-KEY

- Divide the HTML, CSS and JS code into different files

- Right now the two apis arent working. Use the following key for the weather api: API-KEY

- The structure of my project is index.html resources(script.js and styles.css)

- Update the api key with the new one: API-KEY

- You're new fix makes the website be stuck on loading data. Revert the change and try to find why the news api isnt working

## Limitations Writeup

Using Generative AI in this lab made me realize that AI experiences difficulty in implementing full-fledged websites, especially when it comes to API integration. I used Claude AI to complete this lab, and when I gave it the initial instructions, it had no problem creating the HTML and CSS, but it couldn’t manage to successfully implement the API data that was required. To get the AI to implement the API, I had to tell it that the current function it had for extracting the API data was faulty and that, although the key was right, no information was being displayed on the website. After the AI got the Weather API to work, it also had problems implementing the News API it decided on using. Turns out the AI tried to create its own API key to see if it worked, and that’s when I realized that I also had to get an API key for the News API, something the AI assumed. After this, the website was able to run successfully, and it was able to retrieve data asynchronously and use the Geolocation API. Aside from the API implementation, something that I also had problems with was the organization of the files that make up the website.  I normally set up my HTML, CSS, and JavaScript in different files and link them together, as it makes it easier for me to manage the code and make changes. On the contrary, Claude decided to implement HTML, CSS, and JavaScript all into the same file, making it extremely long and difficult to read/understand. Overall, using Generative sped up the development process, but it provided some limitations as to how efficiently it could implement API’s and their corresponding data into the website, and how that same website is structured.


## Credits:

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Country data provided by [News API](https://newsapi.org/)

