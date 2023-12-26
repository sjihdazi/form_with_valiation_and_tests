<template>
  <q-input v-model="value" :label="label" :error-message="errorMessage" :error="!!errorMessage" />
</template>
<script setup lang="ts">
import { useField } from 'vee-validate'
const props = defineProps({
  modelValue: String,
  name: { type: String, required: true },
  label: { type: String, required: true }
})

const { value, errorMessage } = useField<string | number | null | undefined>(
  () => props.name,
  undefined
)
</script>
