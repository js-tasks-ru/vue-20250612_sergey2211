import {defineComponent} from 'vue'
import WeatherCardAlert from "./WeatherCardAlert.js";
import WeatherCardGeo from "./WeatherCardGeo.js";
import WeatherCardCondition from "./WeatherCardCondition.js";
import WeatherCardDetail from "./WeatherCardDetail.js";

export default defineComponent({
  name: 'WeatherCard',
  components: { WeatherCardDetail, WeatherCardCondition, WeatherCardGeo, WeatherCardAlert },

  props: {
    cardData: {
      type: Object,
      required: true,
    },

    icons: {
      type: Object,
      required: true,
    },
  },

  template: `
    <WeatherCardAlert
      v-if="cardData.alert"
      :alert-data="cardData.alert"
    />
    <WeatherCardGeo
      :name="cardData.geographic_name"
      :time="cardData.current.dt"
    />
    <WeatherCardCondition
      :weather="cardData.current.weather"
      :icons="icons"
      :temp="cardData.current.temp"
    />
    <WeatherCardDetail
      :pressure="cardData.current.pressure"
      :clouds="cardData.current.clouds"
      :humidity="cardData.current.humidity"
      :wind-speed="cardData.current.wind_speed"
    />
  `,
})
