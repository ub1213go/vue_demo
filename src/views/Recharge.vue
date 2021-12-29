<template>
    <div class='Recharge'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"儲值"'/>
        <div class='fs-2 text-center fw-bolder'>當前可用餘額(元)</div>
        <div class='fs-1 text-center fw-bolder text-danger'>{{userMoney.toFixed(2)}}</div>
        <FormRechargeSection/>
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import FormRechargeSection from '@/components/form/FormRecharge.vue';
export default {
  name: 'Recharge',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    FormRechargeSection
  },
  data(){
    return {
      userMoney: 0.00
    }
  }
}
</script>
