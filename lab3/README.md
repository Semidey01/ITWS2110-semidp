# Weather & Location Dashboard

## Project Description:

A dynamic web application that displays real-time weather information and country data for Troy, NY, with support for geolocation-based weather updates. This project demonstrates the integration of multiple REST APIs to create an interactive, data-driven web experience with visual feedback through dynamic color-changing temperature displays.

## Features:

- **Real-time Weather Data**: Current temperature, weather conditions, humidity, wind speed, and atmospheric pressure
- **Dynamic Temperature Colors**: Temperature display changes color based on the current temperature
- **Country Information**: Flag, population, capital, region, languages, and currency
- **Geolocation Support**: Get weather data for your current location with one click
- **Responsive Design**: Adapts to different screen sizes for optimal viewing on any device

## APIs Used:

### OpenWeatherMap API

**Endpoint**: `https://api.openweathermap.org/data/2.5/weather`

**Purpose**: Provides current weather data for specified locations

**Information Retrieved**:
- Current temperature (°F)
- "Feels like" temperature
- Weather description (e.g., "clear sky", "light rain")
- Humidity percentage
- Wind speed (mph)
- Atmospheric pressure (hPa)
- Location name and country code

**Usage**: 
- Default location: Troy, NY, US
- Supports both city name queries and coordinate-based queries (for geolocation feature)
- Temperature units set to imperial (Fahrenheit)

### REST Countries API

**Endpoint**: `https://restcountries.com/v3.1/name/us`

**Purpose**: Provides comprehensive country information

**Information Retrieved**:
- Country name (common and official)
- Population
- Capital city
- Region and subregion
- Languages spoken
- Currency name and symbol
- Country flag (PNG format)
- Country codes (cca2, cca3)

**Usage**: 
- Displays information about the United States (default for Troy, NY)
- Updates dynamically when using geolocation to show the country of the detected location

## Temperature Color Feature:

The application includes a visual temperature indicator that changes the color of the temperature display based on the current temperature reading. This provides an intuitive, at-a-glance understanding of the weather conditions.

### Temperature Color Scale:

- **0-20°F**: Bright blue (#4dabf5) - Freezing
- **21-40°F**: Light blue (#74c0fc) - Cold
- **41-60°F**: Very light blue (#a5d8ff) - Cool
- **61-70°F**: Light green (#b2f2bb) - Mild
- **71-80°F**: Peach (#ffd8a8) - Warm
- **81-90°F**: Orange (#ffa94d) - Hot
- **91+°F**: Red (#ff6b6b) - Very Hot

The color transition is smooth (0.5s ease) and updates automatically whenever the temperature data is refreshed.

## Geolocation Feature:

The application includes a bonus geolocation feature that allows users to:
- Request weather data for their current location
- Automatically update country information based on detected location
- Receive clear feedback about the location detection process

## File Structure:

```
lab3/
├── index.html              # Main HTML structure
├── resources/
│   ├── ajax-api.js        # JavaScript for API calls and functionality
│   └── style.css          # Styling and responsive design
```

## Error Handling:

The application includes comprehensive error handling for:
- Failed API requests
- Network connectivity issues
- Geolocation permission denials
- Invalid location data
- API response errors

Error messages are displayed clearly to the user with specific information about what went wrong.

## Credits:

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Country data provided by [REST Countries API](https://restcountries.com/)