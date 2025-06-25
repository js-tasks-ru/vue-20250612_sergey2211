import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherCard from "./WeatherCard.js";

export default defineComponent({
  name: 'WeatherApp',
  components: { WeatherCard },

  setup() {
    const isNight = (currentStr, sunriseStr, sunsetStr) => {
      return currentStr > sunsetStr || currentStr < sunriseStr
    }

    return {
      weatherData: getWeatherData(),
      weatherConditionIcons: WeatherConditionIcons,
      isNight
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <ul class="weather-list unstyled-list">
        <li
          v-for="data in weatherData"
          :class="{'weather-card--night' : isNight(data.current.dt, data.current.sunrise, data.current.sunset)}"
          class="weather-card"
        >
          <WeatherCard
            :card-data="data"
            :icons="weatherConditionIcons"
          />
        </li>
      </ul>
    </div>
  `,
})
