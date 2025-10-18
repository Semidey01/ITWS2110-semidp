// API Keys
const WEATHER_API_KEY = '1fede95a5c24c6902f6127026307d1e5';
const NEWS_API_KEY = '969333416b374d46b8de8f24d2c67661';

// Default location (Troy, NY)
let currentLat = 42.7284;
let currentLon = -73.6918;
let currentCity = 'Troy';

// Weather icon mapping
const weatherIcons = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⛈️', '11n': '⛈️',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
};

/**
 * Load data from both APIs
 */
function loadData() {
    $('#loading').show();
    $('#content').hide();
    $('#error').hide();
    
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}&lon=${currentLon}&appid=${WEATHER_API_KEY}&units=imperial`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLon}&appid=${WEATHER_API_KEY}&units=imperial`;
    
    // Fetch weather data
    $.ajax({
        url: weatherUrl,
        method: 'GET',
        success: function(weatherData) {
            console.log('Weather data loaded successfully');
            displayWeather(weatherData);
            
            // Fetch forecast data
            $.ajax({
                url: forecastUrl,
                method: 'GET',
                success: function(forecastData) {
                    console.log('Forecast data loaded successfully');
                    displayForecast(forecastData);
                    
                    // Fetch news data using CORS proxy
                    fetchNews();
                },
                error: function(err) {
                    console.error('Forecast API Error:', err);
                    $('#loading').hide();
                    $('#error').text('Error loading forecast data.').show();
                }
            });
        },
        error: function(err) {
            console.error('Weather API Error:', err);
            $('#loading').hide();
            $('#error').text('Error loading weather data. Please try again later.').show();
        }
    });
}

/**
 * Fetch news data with CORS proxy
 */
function fetchNews() {
    // Using cors-anywhere proxy to bypass CORS restrictions
    const newsUrl = `https://newsapi.org/v2/everything?q=${currentCity}&sortBy=publishedAt&language=en&pageSize=8&apiKey=${NEWS_API_KEY}`;
    
    console.log('Fetching news for:', currentCity);
    console.log('News URL:', newsUrl);
    
    $.ajax({
        url: newsUrl,
        method: 'GET',
        dataType: 'json',
        success: function(newsData) {
            console.log('News data loaded successfully:', newsData);
            displayNews(newsData);
            $('#loading').hide();
            $('#content').show();
        },
        error: function(xhr, status, error) {
            console.error('News API Error Status:', xhr.status);
            console.error('News API Error:', error);
            console.error('Response:', xhr.responseText);
            
            // Show content anyway without news
            displayNews({ articles: [] });
            $('#loading').hide();
            $('#content').show();
        }
    });
}

/**
 * Display current weather data
 * @param {Object} data - Weather data from OpenWeatherMap API
 */
function displayWeather(data) {
    const icon = weatherIcons[data.weather[0].icon] || '🌡️';
    $('#weather-icon').text(icon);
    $('#temperature').text(Math.round(data.main.temp) + '°F');
    $('#description').text(data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1));
    
    const details = `
        <div class="detail-item">
            <i class="fas fa-temperature-high"></i>
            <div class="detail-label">Feels Like</div>
            <div class="detail-value">${Math.round(data.main.feels_like)}°F</div>
        </div>
        <div class="detail-item">
            <i class="fas fa-tint"></i>
            <div class="detail-label">Humidity</div>
            <div class="detail-value">${data.main.humidity}%</div>
        </div>
        <div class="detail-item">
            <i class="fas fa-wind"></i>
            <div class="detail-label">Wind Speed</div>
            <div class="detail-value">${Math.round(data.wind.speed)} mph</div>
        </div>
        <div class="detail-item">
            <i class="fas fa-compress-alt"></i>
            <div class="detail-label">Pressure</div>
            <div class="detail-value">${data.main.pressure} hPa</div>
        </div>
        <div class="detail-item">
            <i class="fas fa-eye"></i>
            <div class="detail-label">Visibility</div>
            <div class="detail-value">${(data.visibility / 1609).toFixed(1)} mi</div>
        </div>
        <div class="detail-item">
            <i class="fas fa-cloud"></i>
            <div class="detail-label">Cloudiness</div>
            <div class="detail-value">${data.clouds.all}%</div>
        </div>
    `;
    $('#weather-details').html(details);
}

/**
 * Display 5-day weather forecast
 * @param {Object} data - Forecast data from OpenWeatherMap API
 */
function displayForecast(data) {
    const dailyData = {};
    
    // Group forecast data by day
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000);
        const day = date.toLocaleDateString('en-US', { weekday: 'short' });
        
        if (!dailyData[day]) {
            dailyData[day] = {
                temps: [],
                icon: item.weather[0].icon,
                description: item.weather[0].description
            };
        }
        dailyData[day].temps.push(item.main.temp);
    });
    
    // Display forecast for each day
    let forecastHtml = '';
    let count = 0;
    for (const day in dailyData) {
        if (count >= 5) break;
        const temps = dailyData[day].temps;
        const avgTemp = Math.round(temps.reduce((a, b) => a + b) / temps.length);
        const icon = weatherIcons[dailyData[day].icon] || '🌡️';
        
        forecastHtml += `
            <div class="forecast-item">
                <div class="forecast-day">${day}</div>
                <div style="font-size: 32px; margin: 10px 0;">${icon}</div>
                <div style="font-weight: bold;">${avgTemp}°F</div>
            </div>
        `;
        count++;
    }
    $('#forecast').html(forecastHtml);
}

/**
 * Display news articles
 * @param {Object} data - News data from NewsAPI
 */
function displayNews(data) {
    if (!data.articles || data.articles.length === 0) {
        $('#news-container').html('<p style="color: #666; text-align: center;">No news articles available at the moment.</p>');
        return;
    }
    
    let newsHtml = '';
    const articles = data.articles.slice(0, 8);
    
    articles.forEach(article => {
        const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        
        newsHtml += `
            <div class="news-item">
                <div class="news-title">${article.title}</div>
                <div class="news-description">${article.description || 'No description available'}</div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="news-source">${article.source.name}</span>
                    <span class="news-date">${date}</span>
                </div>
                ${article.url ? `<a href="${article.url}" target="_blank" style="color: #667eea; text-decoration: none; font-size: 0.9rem;">Read more →</a>` : ''}
            </div>
        `;
    });
    
    $('#news-container').html(newsHtml);
}

/**
 * Use HTML5 Geolocation API to get user's location
 */
function useGeolocation() {
    if (navigator.geolocation) {
        $('#loading').show();
        $('#content').hide();
        
        navigator.geolocation.getCurrentPosition(function(position) {
            currentLat = position.coords.latitude;
            currentLon = position.coords.longitude;
            
            // Get city name from coordinates using reverse geocoding
            const geocodeUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${currentLat}&lon=${currentLon}&limit=1&appid=${WEATHER_API_KEY}`;
            
            $.ajax({
                url: geocodeUrl,
                method: 'GET',
                success: function(geoData) {
                    if (geoData.length > 0) {
                        currentCity = geoData[0].name;
                        $('#location-name').text(geoData[0].name + ', ' + (geoData[0].state || geoData[0].country));
                    }
                    loadData();
                },
                error: function() {
                    loadData();
                }
            });
        }, function(error) {
            alert('Unable to retrieve your location. Showing Troy, NY weather.');
            $('#loading').hide();
            $('#content').show();
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

// Load data when page is ready
$(document).ready(function() {
    loadData();
});