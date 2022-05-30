import { mount } from "@vue/test-utils";
import Message, { validateVariant } from '@/components/Message.vue'

describe('Testing props in Message Component', () => {

  test('renders element with class corectly', () => {

    const wrapper = mount(Message, {
      props: {
        variant: 'success'
      }
    })

    const variantElement = wrapper.find('#variant');

    expect(variantElement.classes()).toContain('success');
  })

  test('renders element with class corectly', () => {

    const wrapper = mount(Message, {
      props: {
        variant: 'success'
      }
    })

    const variantElement = wrapper.find('#variant');

    expect(variantElement.text()).toBe('Message');
  })

  test('throws error when invalid variant prop is passed', () => {
    
    expect(() => validateVariant('invalid')).toThrowError()
  })

  test('validates correct variant props', () => {

    ['success', 'warning', 'error'].forEach(variant => {
      expect(() => validateVariant(variant)).not.toThrowError()
    })
  })
})