<template>
    <div class='Verified'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"實名認證"'/>
        <div class='text-center'>nothing > icon-stop審核中 > icon-pass認證通過</div>
        <FormVerifiedSection />

        
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import FormVerifiedSection from '@/components/form/FormVerified.vue';
export default {
  name: 'Verified',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    FormVerifiedSection
  },
  data(){
    return {
      status: 0
    }
  }
}
</script>
