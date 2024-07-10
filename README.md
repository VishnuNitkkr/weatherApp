
# WeatherApp

This project is a weather dashboard application that provides current weather information and forecasts for different cities. Users can search for cities to display the current weather and a 7-day forecast. The application is built with React for the front-end, styled using Material-UI, and fetches data from a weather API, such as OpenWeatherMap.


## Technologies Used
React: For building the user interface.

Material-UI: For styling and responsive design.

OpenWeatherMap API: For fetching weather data.

GeoDB Cities API: Searching Cities by Name Prefix.

Express: For building the user backend.

MongoDB: For creating the user database.

## Project Structure
weatherApp/

│

├── public/

│   ├── icons/                 # Directory for icon files

│   ├── weather.svg            # Weather SVG icon

│

├── src/

│   ├── components/

│   │   ├── chartInfo/

│   │   │   └── ForecastChart.jsx    # Component for displaying 

forecast chart

│   │   │

│   │   ├── currentWeatherInfo/

│   │   │   └── CurrentWeather.jsx   # Component for displaying 

current weather information

│   │   │

│   │   ├── forecast/

│   │   │   └── Forecast.jsx         # Component for displaying

7-day forecast

│   │   │

│   │   ├── navbar/

│   │   │   └── Navbar.jsx           # Navigation bar component

│   │   │

│   │   ├── search/

│   │   │   └── Search.jsx           # Search component for city

 input

│   │   │

│   │   └── user/

│   │       ├── Login.jsx            # Login component 

│   │       ├── ProtectedRoute.jsx   # Protected route component

│   │       ├── PublicRoute.jsx      # Public route component

│   │       ├── Register.jsx         # Register component

│   │       └── WeatherData.jsx      # Main weather data component

│   │

│   ├── Api.jsx                      # File for API configuration

│   ├── App.jsx                      # Main App component

│   ├── main.jsx                     # Entry point of the

application

│   ├── App.css                      # Main styles for the

 application
 
│   └── index.css                    # Index stylesheet

│

├── backend/

│   ├── databaseConnect/

│   │   └── db.js                    # Database connection file

│   │

│   ├── model/

│   │   └── userSchema.js            # User schema model

│   │

│   ├── routes/

│   │   └── userRoute.js             # Routes for user operations

│   │

│   ├── .env                         # Environment variables file

│   ├── .gitignore                   # Git ignore file

│   ├── package-lock.json            # Package lock file

│   ├── package.json                 # Package.json file

│   ├── server.js                    # Backend server file

│   └── vercel.json                  # Vercel deployment 

configuration

│

├── .gitignore                       # Global git ignore file

├── index.html                       # HTML entry point

├── package-lock.json                # Package lock file

├── package.json                     # Package.json file

├── vite.config.js                   # Vite.js configuration file

└── vercel.json                      # Vercel deployment 

configuration

## Setup Instructions
1.Clone the repository:

git clone https://github.com/VishnuNitkkr/weatherApp.git
cd weatherApp

2.Install dependencies:
npm install

3.Environment Variables:
Create a .env file in the backend/ directory.
Add your environment variables, 

4.Start the application:

for backend: npm run server

for react: npm run dev


## How to Run the Application
Open your terminal and navigate to the project directory (weatherApp).\

Run (npm run dev) to start the development server.

Run (npm run server) to start the backend server.

Open your browser and go to http://localhost:5173 to view the application.
## Deployment
Link of the application:https://weather-application-mu-ten.vercel.app/register