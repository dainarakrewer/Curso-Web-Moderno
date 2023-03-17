<template>
  <button class="button" :class="{ double, triple, operation }">
    0
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean }
  }
}
</script>

<style>

</style>