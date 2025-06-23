import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'TodayApp',
  data() {
    return {
      currentDate: new Date().toLocaleDateString('en-US', { dateStyle: 'long' }) //странно что тест ждет june а не июль
    }
  },

  template: `<div>Сегодня {{ currentDate }}</div>`
})

createApp(App).mount('#app')
