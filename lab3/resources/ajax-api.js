// API Keys and Endpoints
const WEATHER_API_KEY = '1fede95a5c24c6902f6127026307d1e5';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const COUNTRY_API_URL = 'https://restcountries.com/v3.1/name/us';

// DOM Elements
const weatherContent = document.getElementById('weather-content');
const weatherLoading = document.getElementById('weather-loading');
const weatherError = document.getElementById('weather-error');

const countryContent = document.getElementById('country-content');
const countryLoading = document.getElementById('country-loading');
const countryError = document.getElementById('country-error');

const geolocationBtn = document.getElementById('geolocation-btn');
const geoStatus = document.getElementById('geo-status');

// Store countries data globally
let countriesData = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadWeatherData('Troy,NY,US');
    loadAllCountries();
    
    // Add geolocation event listener
    geolocationBtn.addEventListener('click', getLocationWeather);
});

// Weather API Functions
async function loadWeatherData(location) {
    try {
        // Show loading, hide content and error
        weatherLoading.style.display = 'block';
        weatherContent.style.display = 'none';
        weatherError.style.display = 'none';
        
        const response = await fetch(`${WEATHER_API_URL}?q=${location}&appid=${WEATHER_API_KEY}&units=imperial`);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        const data = await response.json();
        displayWeatherData(data);
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherError.textContent = `Failed to load weather data: ${error.message}`;
        weatherError.style.display = 'block';
        weatherLoading.style.display = 'none';
    }
}

function displayWeatherData(data) {
    document.getElementById('current-temp').textContent = Math.round(data.main.temp);
    document.getElementById('weather-desc').textContent = data.weather[0].description;
    document.getElementById('feels-like').textContent = `${Math.round(data.main.feels_like)}°F`;
    document.getElementById('humidity').textContent = `${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `${Math.round(data.wind.speed)} mph`;
    document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;
    
    weatherLoading.style.display = 'none';
    weatherContent.style.display = 'block';
}

// Country API Functions
async function loadAllCountries() {
    try {
        countryLoading.style.display = 'block';
        countryContent.style.display = 'none';
        countryError.style.display = 'none';
        
        const response = await fetch(COUNTRY_API_URL);
        
        if (!response.ok) {
            throw new Error(`Countries API error: ${response.status}`);
        }
        
        countriesData = await response.json();
        
        // Find and display US data (for Troy, NY)
        const usData = countriesData.find(country => 
            country.cca2 === 'US' || country.cca3 === 'USA'
        );
        
        if (usData) {
            displayCountryData(usData);
        } else {
            throw new Error('US data not found in countries API');
        }
        
    } catch (error) {
        console.error('Error fetching country data:', error);
        countryError.textContent = `Failed to load country data: ${error.message}`;
        countryError.style.display = 'block';
        countryLoading.style.display = 'none';
    }
}

function displayCountryData(data) {
    document.getElementById('country-name').textContent = data.name.common;
    document.getElementById('population').textContent = formatPopulation(data.population);
    document.getElementById('capital').textContent = data.capital ? data.capital[0] : 'N/A';
    document.getElementById('region').textContent = data.region;
    
    // Handle languages
    if (data.languages) {
        document.getElementById('languages').textContent = Object.values(data.languages).join(', ');
    } else {
        document.getElementById('languages').textContent = 'N/A';
    }
    
    // Handle currencies
    if (data.currencies) {
        const currency = Object.values(data.currencies)[0];
        document.getElementById('currency').textContent = `${currency.name} (${currency.symbol || 'N/A'})`;
    } else {
        document.getElementById('currency').textContent = 'N/A';
    }
    
    // Set flag
    document.getElementById('country-flag').src = data.flags.png;
    document.getElementById('country-flag').alt = `Flag of ${data.name.common}`;
    
    countryLoading.style.display = 'none';
    countryContent.style.display = 'block';
}

// Geolocation Functions (Bonus Feature)
function getLocationWeather() {
    if (!navigator.geolocation) {
        geoStatus.textContent = 'Geolocation is not supported by your browser';
        return;
    }
    
    geoStatus.textContent = 'Getting your location...';
    geolocationBtn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            geoStatus.textContent = 'Location found! Loading weather...';
            
            try {
                // Get weather by coordinates
                const weatherResponse = await fetch(
                    `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
                );
                
                if (!weatherResponse.ok) {
                    throw new Error('Failed to fetch location weather');
                }
                
                const weatherData = await weatherResponse.json();
                displayWeatherData(weatherData);
                
                // Try to find country data based on the country code from weather API
                const countryCode = weatherData.sys.country;
                const countryData = countriesData.find(country => 
                    country.cca2 === countryCode || country.cca3 === countryCode
                );
                
                if (countryData) {
                    displayCountryData(countryData);
                }
                
                geoStatus.textContent = `Weather updated for ${weatherData.name}, ${weatherData.sys.country}!`;
                document.getElementById('currentWeather').textContent = `${weatherData.name}, ${weatherData.sys.country}`;

            } catch (error) {
                geoStatus.textContent = 'Error loading data for your location';
                console.error('Geolocation data error:', error);
            }
            
            geolocationBtn.disabled = false;
        },
        (error) => {
            let errorMessage = 'Unable to retrieve your location';
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location access denied. Please allow location access.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out.';
                    break;
            }
            
            geoStatus.textContent = errorMessage;
            geolocationBtn.disabled = false;
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        }
    );
}

// Utility Functions
function formatPopulation(population) {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}