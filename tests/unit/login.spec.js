import { mount } from "@vue/test-utils";
import SimpleLogin from '@/components/SimpleLogin.vue';

let mockPost = jest.fn()
// jest.mock('axios', () => ({
//   post: (url, data) => {
//     mockPost(url, data)

//     return Promise.resolve({
//       data:{
//         name: 'John Doe'
//       }
//     })
//   }
// }))
// Dont forget the parenthesis after 'axios' otherwise it wont work

// this is the same function as the one commented above but without the parenthesis issue due to having a return
jest.mock('axios', () => {
  return {
    post: (url, data) => {
      mockPost(url, data)

      return Promise.resolve({
        data: {
          name: 'John Doe'
        }
      })
    }
  }
})

describe('SimpleLogin component', () => {

  test('Successfully authenticates', async () => {

    const wrapper = mount(SimpleLogin)

    await wrapper.find('#username-input').setValue('John Doe')
    await wrapper.find('#password-input').setValue('test-password')
    await wrapper.find('#login-form').trigger('submit.prevent')

    expect(mockPost).toHaveBeenCalledWith('/login', {
      username: 'John Doe',
      password: 'test-password'
    })

    expect(wrapper.find('#greeting').text()).toBe('Hello, John Doe')
  })
})