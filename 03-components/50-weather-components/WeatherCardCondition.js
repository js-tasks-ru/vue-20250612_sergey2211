import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WeatherCardCondition',

  props: {
    icons: {
      type: Object,
      required: true
    },

    weather: {
      type: Object,
      required: true
    },

    temp: {
      type: Number,
      default: -273.15
    }
  },

  setup() {
    const tempConv = temp => {
      return (temp - 273.15).toFixed(1)
    }
    return {
      tempConv
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="weather.description">
        {{ icons[weather.id] }}
      </div>
      <div class="weather-conditions__temp">{{ tempConv(temp) }} °C</div>
    </div>
  `,
})
