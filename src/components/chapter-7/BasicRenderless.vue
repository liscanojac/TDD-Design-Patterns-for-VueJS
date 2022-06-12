<template>
  <basic-renderless-password v-slot="{ complexity }">
    {{ complexity }}
  </basic-renderless-password>
</template>

<script>
import BasicRenderlessPassword from './basic-renderless-password.js'

export default {
  name: 'BasicRenderlessComponent',
  components: {
    BasicRenderlessPassword
  }
}
</script>
