<script setup>

const props = defineProps({
  description: {
    type: String,
  },
})

</script>

<template>
  <div class="meetup-description">{{ props.description }}</div>
</template>

<style scoped>
/* _meetup-description.css */
.meetup-description {
  margin: var(--spacing-large) 0;
  white-space: pre-wrap;
}
</style>
