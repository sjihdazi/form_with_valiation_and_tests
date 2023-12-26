import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
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
    
    await wrapper.find('form[data-name="login-form"]').trigger('submit')
    // expect(wrapper.emitted('success')).toBeTruthy()
  })
})
