<template>
    <div class='RechargeDetail'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"儲值記錄"'/>


        <BottomInfoSection :title='"暫無訂單!"'/>
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
export default {
  name: 'RechargeDetail',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    BottomInfoSection
  }
}
</script>
