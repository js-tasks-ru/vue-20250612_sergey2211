<script setup>
import {computed} from "vue";

const props = defineProps({
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  }
})

const type = computed(() => props.to ? 'RouterLink' : 'a');

const link = computed(() => {
  if(props.to) {
    return {to: props.to}
  }
  else {
    return {href: props.href}
  }
})

</script>

<template>
  <component
    :is="type"
    v-bind="link"
    class="link"
  >
    <slot>
      Link
    </slot>
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
