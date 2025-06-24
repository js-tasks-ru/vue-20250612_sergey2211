import {computed, defineComponent, ref, watch} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const fistNumber = ref(0);
    const secondNumber = ref(0);
    const operationValue = ref('sum');
    const sum = computed(() => {
      switch (operationValue.value) {
        case 'sum':
          return fistNumber.value + secondNumber.value;
        case 'subtract':
          return  fistNumber.value - secondNumber.value;
        case 'multiply':
          return fistNumber.value * secondNumber.value;
        case 'divide':
          return  fistNumber.value / secondNumber.value;
      }
      return 0;
    });

    return {
      fistNumber,
      secondNumber,
      operationValue,
      sum
    }
  },

  template: `
    <div class="calculator">
      <input v-model="fistNumber" type="number" aria-label="First operand" />
      <div class="calculator__operators">
        <label><input v-model="operationValue" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="operationValue" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="operationValue" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="operationValue" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input v-model="secondNumber" type="number" aria-label="Second operand" />

      <div>=</div>

      <output> {{ sum }} </output>
    </div>
  `,
})
