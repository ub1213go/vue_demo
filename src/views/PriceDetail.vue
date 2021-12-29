<template>
  <div class='PriceDetail'>
    <BackButtonLeftRightCornerSection :link='"/price"' :linkName='"行情"'/>
    <div @click='findOne()' class='icon-find'></div>
    <TitleLabelSection :title='`股票名稱(${$route.params.code})`'/>
    <SelectBox3Section @select='selectIndex' :select='index' :list='[{name: "即時走勢"}, {name: "技術分析"}]' :option='{border: true}'/>

    <K/>
    

    <BottomInfoSection :title='"已全部加載"'/>
  </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import SelectBox3Section from '@/components/SelectBox3.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import K from '@/components/K.vue';
export default {
  name: 'PriceDetail',
  components: {
    TitleLabelSection,
    SelectBox3Section,
    BottomInfoSection,
    BackButtonLeftRightCornerSection,
    K
  },
  methods: {
    selectIndex(data){
      this.index = data
    }
  },
  data(){
    return {
      index: 0
    }
  }
}
</script>
