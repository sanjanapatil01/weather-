document.addEventListener('DOMContentLoaded', () => {
  const recommendationDiv = document.getElementById('recommendation');

  // Mock function to get current temperature and season
  function getWeatherData() {
      return {
          temperature: 35, // Example temperature in Celsius
          season: 'summer' // Example season
      };
  }

  function provideRecommendation(weatherData) {
      let recommendation = '';

      if (weatherData.temperature > 30) {
          recommendation += 'It\'s hot outside. Drink cold water and stay hydrated. ';
      } else if (weatherData.season === 'winter') {
          recommendation += 'It\'s winter. Wear a sweater and stay warm. ';
      }

      recommendationDiv.textContent = recommendation;
  }

  const weatherData = getWeatherData();
  provideRecommendation(weatherData);
});
