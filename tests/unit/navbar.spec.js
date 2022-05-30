import { mount } from "@vue/test-utils";
import Navbar from '@/components/Navbar.vue'

describe('Navbar component', () => {

  function mountNavbar(props) {
    return mount(Navbar, { props })
  }

  test('by default shows the login button', () => {
    
    const wrapper = mountNavbar()

    expect(wrapper.text()).toBe('Login')
  })

  test('shows the logout button when authenticated is true', () => {
    
    const wrapper = mountNavbar({ authenticated: true })

    expect(wrapper.text()).toBe('Logout')
  })

  test('shows the login button when authenticated is false', () => {
    
    const wrapper = mountNavbar({ authenticated: false })

    expect(wrapper.text()).toBe('Login')
  })
})