<template>
  <div class='Register'>

    <div class='d-flex justify-content-center align-items-center' style='height: 250px'>
      <div>
        LOGO
      </div>
    </div>
    <FormRegisterSection />
    <div class='row'>
      <div class='col'>
      </div>
      <div class='col text-end'>
      </div>
    </div>
    <div class='fs-2 text-center mb-5'>
      已有帳戶？ 
      <router-link to="/login">返回登入</router-link>
    </div>
  </div>
</template>

<script>
import FormRegisterSection from '@/components/form/FormRegister.vue';

export default {
  name: 'Register',
  components: {
    FormRegisterSection
  }
}
</script>
