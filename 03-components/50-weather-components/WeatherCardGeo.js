import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WeatherCardGeo',

  props: {
    name: {
      type: String,
      default: ''
    },

    time: {
      type: String,
      default: '00:00'
    }
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ name }}
      </h2>
      <div class="weather-card__time">
        {{ time }}
      </div>
    </div>
  `,
})
