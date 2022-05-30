<template>
  <input type="number" v-model="amount">
  <div>Price {{ totalCost }}</div>
</template>

<script>
import { resistorPrice, resistorCost } from '@/utils/logic.js'

export default {
  name: 'InputComponent',
  data() {
    return {
      amount: 0,
      // resistorPrice
    }
  },
  computed: {
    totalCost() {
      return resistorCost(resistorPrice, this.amount);
    }
  }
}
</script>

<style>

</style>