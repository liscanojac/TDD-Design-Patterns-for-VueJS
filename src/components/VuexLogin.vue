<template>
  <h1 id="vuex-greeting" v-if="user">Hello, {{ user }}</h1>
  <form id="login-vuex-form" @submit.prevent="handleAuth">
    <input type="text" id="username-vuex-input" v-model="formData.username">
    <input type="password" id="password-vuex-input" v-model="formData.password">
    <button type="submit" :disabled="!valid">Click here to sign in</button>
  </form>
  <span v-if="error">{{ error }}</span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { loginForm, isLoginFormValid } from '@/utils/login'

export default {
  name: 'VuexLogin',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  computed: {
    validateLogin() {
      return loginForm(this.formData)
    },
    valid() {
      return isLoginFormValid(this.validateLogin)
    },
    ...mapGetters('userData', { user: 'getUser' }),
  },
  methods: {
    handleAuth() {
      this.login(this.formData)
      this.formData.username = ''
      this.formData.password = ''
    },
    ...mapActions('userData', ['login']),
  }
}
</script>
