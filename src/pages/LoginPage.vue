<template>
  <q-layout>
    <q-page-container>
      <q-page class="vertical-middle items-center justify-center column flex">
        <LoginForm />
        <div class="q-mt-md">
          <RouterLink to="register">no account? register here.</RouterLink>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>
