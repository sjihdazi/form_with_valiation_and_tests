<template>
  <form @submit.prevent="onSubmit" data-name="login-form">
    <q-input type="email" v-model="email" v-bind="emailAttrs" label="email" data-name="email" />
    <div id="email-error" data-name="email-error" color="red">{{ errors.email }}</div>

    <q-input
      type="password"
      v-model="password"
      v-bind="passwordAttrs"
      label="password"
      data-name="password"
    />
    <div id="password-error" data-name="password-error" color="red">{{ errors.password }}</div>

    <q-btn class="q-mt-md" type="submit" label="Submit" data-name="submit-button" />
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const emit = defineEmits<{
  (e: 'success'): void
}>()

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit(async (values) => {
  await console.log(values)
  emit('success')
})
</script>
