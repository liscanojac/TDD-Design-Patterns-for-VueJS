import { mount } from "@vue/test-utils";
import VuexLogin from '@/components/VuexLogin.vue'
import store from '@/store/index.js'

let mockPost = jest.fn()
jest.mock('axios', () => {
  return {
    post: (url, data) => {
      mockPost(url, data)

      return Promise.resolve({
        data: data.username
      })
    }
  }
})
// here as you can see, thjis axios mock has no problem working as a mock function for the axios executed in the userData module in the login action, so you can mock axios and test-utils knows where is better to use it

describe('VuexLogin component', () => {

  test('Successfully authenticates', async () => {

    const wrapper = mount(VuexLogin, { global: { mocks: { $store: store } } })
    const testingCredentials = {
      username: 'John Doe',
      password: 'password'
    }

    await wrapper.find('#username-vuex-input').setValue(testingCredentials.username)
    await wrapper.find('#password-vuex-input').setValue(testingCredentials.password)
    await wrapper.find('#login-vuex-form').trigger('submit.prevent')

    expect(wrapper.find('#vuex-greeting').text()).toEqual(`Hello, ${testingCredentials.username}`)
  })
})