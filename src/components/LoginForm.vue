<template>
  <form @submit.prevent="onSubmit" data-name="login-form">
    <QVeeInput type="email" label="email" name="email" data-name="email" />
    <QVeeInput type="password" label="password" name="password" data-name="password" />

    <q-btn class="q-mt-md" type="submit" data-name="submit-button">
      <span>Submit</span>
      <q-icon name="format_size" style="color: black; font-size: 1.4em" />
    </q-btn>
  </form>
</template>

<script setup lang="ts">
import QVeeInput from '@/components/VeeFormComponents/QVeeInput.vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const emit = defineEmits<{
  (e: 'login-success'): void
}>()

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required().default(''),
    password: yup.string().min(6).required().default('')
  })
})

const onSubmit = handleSubmit(async (values) => {
  await console.log(values)
  emit('login-success')
})
</script>
