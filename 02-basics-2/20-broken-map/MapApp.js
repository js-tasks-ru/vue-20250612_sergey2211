import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    let x = ref(0)
    let y = ref(0)

    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    return {
      handleClick,
      x,
      y,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span
        class="pin"
        :style="{ left: x + 'px', top: y + 'px' }"
      >📍</span>
    </div>
  `,
})
