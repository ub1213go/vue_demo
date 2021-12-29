<template>
    <div class='AddAccount'>
        <BackButtonLeftRightCornerSection :link='"/depositoryaccount"' :linkName='"返回"'/>
        <TitleLabelSection :title='"添加存管帳戶"'/>
        <div class='d-flex justify-content-center'>
          <div class='icon-account'></div>
        </div>
        <FormAddAccountSection />

        
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import FormAddAccountSection from '@/components/form/FormAddAccount.vue';
export default {
  name: 'AddAccount',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    FormAddAccountSection
  },
  data(){
    return {

    }
  }
}
</script>
