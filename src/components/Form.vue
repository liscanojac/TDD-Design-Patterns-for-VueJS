<template>
  <PatientFormCompositionAPI />
  <PatientFormOptionsAPI />
</template>

<script>
import PatientFormCompositionAPI from '@/components/PatientFormCompAPI.vue';
import PatientFormOptionsAPI from '@/components/PatientFormOptionsAPI.vue';

export default {
  name: 'FormComponent',
  components: {
    PatientFormCompositionAPI,
    PatientFormOptionsAPI
  }
}
</script>

<style>

</style>