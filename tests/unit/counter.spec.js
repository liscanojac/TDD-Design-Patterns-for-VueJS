import Counter from '@/components/Counter.vue';
import CounterCompositionAPI from '@/components/CounterCompositionAPI.vue';
import { mount } from '@vue/test-utils';

describe('Counter component', () => {

  test('the emit event gets emmited', async () => {

    const wrapper = mount(Counter);
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit).toBeTruthy();
  });

  test('the emit event only sends one prop', async () => {

    const wrapper = mount(Counter);
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit.length).toEqual(1);
  });

  test('emits the event with the initial count value', async () => {

    const wrapper = mount(Counter);
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit[0]).toEqual([0]);
  })

  test('emits the event with the correct count value', async () => {

    const wrapper = mount(Counter);
    await wrapper.find('#increment').trigger('click')
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit[0]).toEqual([1]);
  })
})

describe('CounterCompositionAPI component', () => {

  test('the emit event gets emmited', async () => {

    const wrapper = mount(CounterCompositionAPI);
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit).toBeTruthy();
  });

  test('the emit event only sends one prop', async () => {

    const wrapper = mount(CounterCompositionAPI);
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit.length).toEqual(1);
  });

  test('emits the event with the initial count value', async () => {

    const wrapper = mount(CounterCompositionAPI);
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit[0]).toEqual([0]);
  })

  test('emits the event with the correct count value', async () => {

    const wrapper = mount(CounterCompositionAPI);
    await wrapper.find('#increment').trigger('click')
    await wrapper.find('#submit').trigger('click')

    expect(wrapper.emitted().submit[0]).toEqual([1]);
  })
})