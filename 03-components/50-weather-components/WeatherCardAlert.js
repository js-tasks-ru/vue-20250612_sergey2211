import {defineComponent} from 'vue'

export default defineComponent({
  name: 'WeatherCardAlert',

  props: {
    alertData: {
      type: Object,
      default: () => {}
    }
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description"> {{ alertData.sender_name }}: {{ alertData.description }}</span>
    </div>
  `,
})
