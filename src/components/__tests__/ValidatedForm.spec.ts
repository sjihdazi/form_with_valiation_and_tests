import { describe, it, expect } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import Form from '@/components/ValidatedForm.vue'

const wrapperFactory = () => mount(Form, {
  global: {
    plugins: [Quasar]
  },
})

describe('ValidatedForm', () => {
  
  it('submits', async () => {
    const wrapper = wrapperFactory()
    const email = wrapper.find('input[data-name="email"]')
    const password = wrapper.find('input[data-name="password"]')
    await email.setValue('test@gmail.nl')
    await password.setValue('validPassword')
    
    const form = wrapper.find('form[data-name="login-form"]')
    await form.find('button[data-name="submit-button"]').trigger('click')
    await flushPromises()
    expect(wrapper.emitted()).toBeTruthy()
  })
})
