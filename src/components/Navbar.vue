<template>
  <button>
    {{ authenticated ? 'Logout' : 'Login' }}
  </button>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: {
    authenticated: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>