<template>
  <h1 v-if="user" id="greeting">Hello, {{ user.name }}</h1>
  <form @submit.prevent="handleAuth" id="login-form">
    <input type="text" id="username-input" v-model="formData.username">
    <input type="password" id="password-input" v-model="formData.password">
    <button type="submit">Click here to sign in</button>
  </form>
  <span v-if="error">{{ error }}</span>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SimpleLogin',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      user: undefined,
      error: ''
    }
  },
  methods: {
    async handleAuth() {
      try {
        const response = await axios.post('/login', this.formData)

        this.user = response.data

      } catch(err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>