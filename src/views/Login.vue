<template>
  <div class='Login'>
    <BackButtonLeftRightCornerSection :link='"/"' :linkName='"首頁"' />

    <div class='d-flex justify-content-center align-items-center' style='height: 250px'>
      <div>
        LOGO
      </div>
    </div>
    <FormLoginSection />
    <div class='row'>
      <div class='col'>
      </div>
      <div class='col text-end'>
        <router-link to='/register' class='btn btn-secondary mb-5 fs-2'>註冊</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import FormLoginSection from '@/components/form/FormLogin.vue';

export default {
  name: 'Login',
  components: {
    BackButtonLeftRightCornerSection,
    FormLoginSection
  }
}
</script>
