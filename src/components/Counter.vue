<template>
  <button id="increment" role="increment" @click="addToCount">Add</button>
  <button id="submit" role="submit" @click="submitCount">Submit</button>
  <div>{{ count }}</div>
</template>

<script>
import { submitValidator } from '@/utils/validators.js';

export default {
  name: 'CounterComponent',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addToCount() {
      this.count++
    },
    submitCount() {
      this.$emit('submit', this.count)
    }
  },
  emits: {
    submit: submitValidator
  }
}
</script>

<style>

</style>