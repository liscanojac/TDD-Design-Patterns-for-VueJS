<template>
  <SimpleLogin />
  <VuexLogin />
</template>

<script>
import SimpleLogin from '@/components/SimpleLogin.vue'
import VuexLogin from '@/components/VuexLogin.vue'

export default {
  name: 'LoginView',
  components: {
    SimpleLogin,
    VuexLogin
  }
}
</script>
