import { required } from "./form"

function validatePassword(password) {

  const result = required(password)

  if(!result.valid) {
    return result
  }

  return regexPasswordValidator(password)
}

function regexPasswordValidator(password) {

  const whitespaceRegex = /^\S*$/
  const atLeastEightCharRegex = /^[A-Za-z0-9]\w{7,}$/

  if(!whitespaceRegex.test(password)) {
    return {
      valid: false,
      message: 'No whitespaces on the password'
    }
  }

  if(!atLeastEightCharRegex.test(password)) {
    return {
      valid: false,
      message: 'Your password must be at least 8 characters long'
    }
  }

  return { valid: true }
}

function isLoginFormValid(form) {
  return form.username.valid && form.password.valid
}

function loginForm(user) {
  const username = required(user.username.trim())

  const password = validatePassword(user.password)

  return {
    username,
    password
  }
}

export {
  loginForm,
  isLoginFormValid
}