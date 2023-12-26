<template>
  <form @submit="onSubmit">
    <q-input type="email" v-model="email" v-bind="emailAttrs" label="email" />
    <div color="red">{{ errors.email }}</div>

    <q-input type="password" v-model="password" v-bind="passwordAttrs" label="password" />
    <div>{{ errors.password }}</div>

    <q-btn class="q-mt-md" type="submit">Submit</q-btn>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>
