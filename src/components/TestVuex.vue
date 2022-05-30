<template>
  <h2>{{ testStr }}</h2>
  <h2>{{ testProp }}</h2>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'TestVuex',
  computed: {
    ...mapState('userData', ['testProp']),
    testStr() {
      return this.testProp
    }
  }
}
</script>

<style>

</style>