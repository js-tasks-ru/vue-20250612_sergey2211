import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const inputNumber = ref('0');
    const min = 0;
    const max = 5;

    return {
      inputNumber,
      min,
      max,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        :disabled="inputNumber<=min"
        type="button"
        aria-label="Decrement"
        @click="inputNumber--"
      >➖
      </button>

      <span class="count" data-testid="count"> {{ inputNumber }} </span>

      <button
        class="button button--secondary"
        :disabled="inputNumber>=max"
        type="button"
        aria-label="Increment"
        @click="inputNumber++"
      >➕
      </button>
    </div>
  `,
})
