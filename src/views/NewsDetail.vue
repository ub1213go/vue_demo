<template>
  <div class='NewsDetail'>
    <BackButtonLeftRightCornerSection :link='"/"' :linkName='"返回"' />
    <TitleLabelSection :title='"公告"'/>
    <div class='text-center fs-4'>
      <div>
        統一超備戰跨年人潮，周邊門市備貨量增2-3倍，搶攻跨年連假商機
      </div>
      <div class="text-secondary">
        新聞 中央社 2021-12-29 13:02:42
      </div>
      <div>
        內容
      </div>
      <div class="text-secondary">
        免責聲明：本文觀點僅代表作者個人觀點，不構成平台的投資建議，本平台不對文章的準確性、完整性和即時性做出任何保證，亦不對因為使用或信賴文章引發的任何損失承擔責任。
      </div>
    </div>
  </div>
</template>

<script>
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import TitleLabelSection from '@/components/TitleLabel.vue';

export default {
  name: 'NewsDetail',
  components: {
    BackButtonLeftRightCornerSection,
    TitleLabelSection
  }
}
</script>
