<template>
  <div class="form-wrapper">
    <h3>Patient Data - Options API</h3>
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
        <input type="number" id="weight" name="weight" v-model.number="form.weight.value">
        <select name="weightUnits" id="weightUnits" v-model="form.weight.units">
          <option value="kg">kg</option>
          <option value="lb">lb</option>
        </select>
      </div>
      <button id="submit-btn" type="submit" :disabled="!valid">Submit Form</button>
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
import { patientForm, isFormValid } from '@/utils/form';

export default {
  name: 'PatientFormOptionsAPI',
  data() {
    return {
      form: {
        name: '',
        weight: {
          value: '',
          units: 'kg'
        }
      }
    }
  },
  computed: {
    validatedForm() {
      return patientForm(this.form);
    },
    valid() {
      return isFormValid(this.validatedForm)
    }
  },
  methods: {
    submit() {
      this.$emit('submit', { patient: this.form })
    }
  }
}
</script>

<style>

</style>