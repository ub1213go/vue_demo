<template>
    <div class='MoneyDetail'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"資金明細"'/>
        <SelectBoxSection @sw='selectIndex' :si='index' :name1='"資金明細"' :name2='"提領紀錄"'/>

        <BottomInfoSection :title='indexLabel()' />
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import SelectBoxSection from '@/components/SelectBox.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
export default {
  name: 'MoneyDetail',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    SelectBoxSection,
    BottomInfoSection
  },
  methods: {
    selectIndex(data){
      this.index = data
    },
    indexLabel(){
      switch(this.index){
        case 0:
          return '查無資金明細!'
        case 1:
          return '查無訂單!'
        default:
          return ''
      }
    }

  },
  data(){
    return {
      index: 0,
    }
  }
}
</script>
