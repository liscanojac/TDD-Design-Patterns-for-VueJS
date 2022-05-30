<template>
  <div class="form-wrapper">
    <h3>Patient Data - Composition API</h3>
    <form id="form" @submit.prevent="submit">
      <div class="field">
        <div v-if="!validatedForm.name.valid" class="error">
          {{ validatedForm.name.message }}
        </div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" v-model="form.name">
      </div>
      <div class="field">
        <div v-if="!validatedForm.weight.valid" class="error">
          {{ validatedForm.weight.message }}
        </div>
        <label for="weight">Weight</label>
        <input id="weight" type="number" name="weight" v-model.number="form.weight.value">
        <select name="weightUnits" id="weightUnits" v-model="form.weight.units">
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
      </div>
      <button id="submit-button" type="submit" :disabled="!valid" >Submit Form</button>
    </form>
    <pre>
      Patient Data
      {{ form }}
    </pre>
    <pre>
      Form State
      {{ validatedForm }}
    </pre>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { patientForm, isFormValid } from '@/utils/form.js'

export default {
  name: 'PatientFormCompositionAPI',
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      weight: {
        value: '',
        units: 'kg'
      }
    })

    const validatedForm = computed(() => {
      return patientForm(form)
    })
    const valid = computed(() => isFormValid(validatedForm.value))

    const submit = () => {
      // alert(`submit works ${form.name} & ${form.weight.value}`)
      emit('submit', { patient: form })
    }

    return {
      form,
      validatedForm,
      submit,
      valid
    }
  },
  emits: ['submit']
}
</script>

<style>
  .field > label {
    display: inline-block;
    width: 50px;
  }
</style>