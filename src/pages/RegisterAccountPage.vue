<template>
  <q-layout>
    <q-page-container>
      <q-page class="vertical-middle items-center justify-center flex">
        <RegisterForm @success="onSuccess" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const onSuccess = () => {
  $q.notify({
    message: 'Form successfully submitted',
    color: 'positive',
    position: 'top'
  })
}
</script>
