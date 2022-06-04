import { mount } from "@vue/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node"
import VuexLogin from "@/components/VuexLogin.vue"
import store from "@/store";

const server = setupServer(
  rest.post('./login', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'John Doe'
      })
    )
  })
)

describe('VuexLogin component with msw', () => {

  beforeAll(() => server.listen())
  afterAll(() => server.close())

  test('Succesfully authenticates', async () => {

    const wrapper = mount(VuexLogin, {
      global: {
        mocks: {
          $store: store
        }
      }
    })
    const testingCredentials = {
      username: 'John Doe',
      password: 'password'
    }

    await wrapper.find('#username-vuex-input').setValue(testingCredentials.username)
    await wrapper.find('#password-vuex-input').setValue(testingCredentials.password)
    await wrapper.find('#login-vuex-form').trigger('submit.prevent')
    
    await expect(wrapper.find('#vuex-greeting').text()).toEqual(testingCredentials.username)
  })
})