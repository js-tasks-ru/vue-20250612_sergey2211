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
</script>

<template>
  <component
    :is="type"
    :to="to"
    :href="href"
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
