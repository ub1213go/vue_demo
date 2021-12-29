<template>
    <div class='Draw'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"提領"'/>
        <div class='fs-2 text-center fw-bolder'>可提領金額(元)</div>
        <div class='fs-1 text-center fw-bolder text-danger'>{{userMoney.toFixed(2)}}</div>
        <FormDrawSection/>
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import FormDrawSection from '@/components/form/FormDraw.vue';
export default {
  name: 'Draw',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    FormDrawSection
  },
  data(){
    return {
      userMoney: 0.00
    }
  }
}
</script>
