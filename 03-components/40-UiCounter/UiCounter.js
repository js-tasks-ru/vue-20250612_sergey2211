import {computed, defineComponent} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true
    },

    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: Infinity
    }
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const isMaxCount = computed(() => props.count >= props.max)
    const isMinCount = computed(() => props.count <= props.min)

    const increment = () => {
      if (props.count < props.max) {
        emit('update:count', props.count + 1)
      }
    }

    const decrement = () => {
      if (props.count > props.min) {
        emit('update:count', props.count - 1)
      }
    }

    return {
      isMaxCount,
      isMinCount,
      increment,
      decrement
    }
  },

  template: `
    <div class="counter">
      <UiButton
        :disabled="isMinCount"
        aria-label="Decrement"
        @click="decrement"
      >
        ➖
      </UiButton>
      <span
        class="count"
        data-testid="count"
      >
        {{ count }}
      </span>
      <UiButton
        :disabled="isMaxCount"
        aria-label="Increment"
        @click="increment"
      >
        ➕
      </UiButton>
    </div>
  `,
})
