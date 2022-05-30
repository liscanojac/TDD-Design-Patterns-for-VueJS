import { mount } from '@vue/test-utils'
import PatientFormCompositionAPI from '@/components/PatientFormCompAPI';
import PatientFormOptionsAPI from '@/components/PatientFormOptionsAPI.vue';

describe('PatientForm with CompositionAPI Component', () => {

  test('form fills out correctly', async () => {

    const wrapper = mount(PatientFormCompositionAPI)

    await wrapper.find('#name').setValue('testName')
    await wrapper.find('#weightUnits').setValue('lb')
    await wrapper.find('#weight').setValue(150)

    expect(wrapper.findAll('.error')).toHaveLength(0)
  })

  test('the emit gets emmitted correctly', async () => {

    const wrapper = mount(PatientFormCompositionAPI)

    await wrapper.find('#name').setValue('testName')
    await wrapper.find('#weightUnits').setValue('lb')
    await wrapper.find('#weight').setValue('150')
    await wrapper.find('#form').trigger('submit.prevent')
    // here you can see when is a form that handles the submit you can't test the button click because the actual submit is made by the form element 

    expect(wrapper.emitted('submit')).toBeTruthy()
  })

  test('show errors for invalid inputs', async () => {

    const wrapper = mount(PatientFormCompositionAPI)

    await wrapper.find('#name').setValue('')
    await wrapper.find('#weightUnits').setValue('kg')
    await wrapper.find('#weight').setValue(20)

    expect(wrapper.findAll('.error')).toHaveLength(2)
  })

  test('emits the submit event with the correct form', async () => {

    const wrapper = mount(PatientFormCompositionAPI)

    await wrapper.find('#name').setValue('Jane Doe')
    await wrapper.find('#weightUnits').setValue('lb')
    await wrapper.find('#weight').setValue(70)
    await wrapper.find('#form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0]).toEqual([{
      patient: {
        name: 'Jane Doe',
        weight: {
          value: 70,
          units: 'lb'
        }
      }
    }])
  })
})

describe('PatientForm with OptionsAPI Component', () => {

  test('form fills out correctly', async () => {

    const wrapper = mount(PatientFormOptionsAPI)

    await wrapper.find('#name').setValue('testName')
    await wrapper.find('#weightUnits').setValue('lb')
    await wrapper.find('#weight').setValue(150)

    expect(wrapper.findAll('.error')).toHaveLength(0)
  })

  test('the emit event gets emmitted correctly', async () => {

    const wrapper = mount(PatientFormOptionsAPI)

    await wrapper.find('#name').setValue('testName')
    await wrapper.find('#weightUnits').setValue('lb')
    await wrapper.find('#weight').setValue(150)
    await wrapper.find('#form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')).toBeTruthy()
  })

  test('show errors for invalid inputs', async () => {

    const wrapper = mount(PatientFormOptionsAPI)

    await wrapper.find('#name').setValue('  ')
    await wrapper.find('#weightUnits').setValue('lb')
    await wrapper.find('#weight').setValue(500)

    expect(wrapper.findAll('.error')).toHaveLength(2)
  })

  test('emits a submit event with the right form', async () => {

    const wrapper = mount(PatientFormOptionsAPI)

    await wrapper.find('#name').setValue('John Doe')
    await wrapper.find('#weightUnits').setValue('kg')
    await wrapper.find('#weight').setValue(120)
    await wrapper.find('#form').trigger('submit.prevent')

    expect(wrapper.emitted('submit')[0]).toEqual([{
      patient: {
        name: 'John Doe',
        weight: {
          value: 120,
          units: 'kg'
        }
      }
    }])
  })
})
