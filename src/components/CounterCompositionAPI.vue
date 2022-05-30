<template>
  <button id="increment" @click="incrementCount">Add</button>
  <button id="submit" @click="submitCount">Submit</button>
  <div>{{ count }}</div>
</template>

<script>
import { submitValidator } from '@/utils/validators'
import { ref } from 'vue'

export default {
  name:'CounterCompositionAPIComponent',
  setup(props, { emit }) {

    const count = ref(0)

    const incrementCount = () => {
      count.value++;
    }

    const submitCount = () => {
      emit('submit', count.value)
    }

    return {
      count,
      incrementCount,
      submitCount
    }
  },
  emits: {
    submit: submitValidator
  }
}
</script>

<style>

</style>