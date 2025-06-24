import {computed, defineComponent, onMounted, onUnmounted, ref} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(Date.now());
    const tick = ref();

    onMounted(() => {
      tick.value = setInterval(() => {
        currentTime.value = Date.now()
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(tick)
    })

    const time = computed(() => {
      return new Date(currentTime.value).toLocaleTimeString('en-US', { timeStyle: 'medium' })
    })

    return { time }
  },

  template: `<div class="clock"> {{ time }} </div>`,
})
