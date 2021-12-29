<template>
  <div class='Price'>
    <div @click='search()' class='icon-find'></div>
    <TitleLabelSection :title='"行情"'/>
    <SelectBox3Section @select='selectIndex' :select='index' :list='[{name: "上市類股"}, {name: "上櫃類股"}]' :option='{border: true}'/>
    <div class='row'>
      <div class='col-sm-4 col-12'>
        <FatSelectSection :NowSelect='SelectItemValue' :Items='Items'/>
      </div>
    </div>
    
    <StockListSection :Data='Data'/>

    <BottomInfoSection :title='"已全部加載"'/>
    <DownNavSection :index='1'/>
  </div>
</template>

<script>
import DownNavSection from '@/components/DownNav.vue';
import TitleLabelSection from '@/components/TitleLabel.vue';
import SelectBox3Section from '@/components/SelectBox3.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
import FatSelectSection from '@/components/FatSelect.vue';
import StockListSection from '@/components/list/StockList.vue';
export default {
  name: 'Price',
  components: {
    DownNavSection,
    TitleLabelSection,
    SelectBox3Section,
    BottomInfoSection,
    FatSelectSection,
    StockListSection
  },
  methods: {
    selectIndex(data){
      this.index = data
    },
    search(){
      this.$router.push({name: 'Search'})
    }
  },
  data(){
    return {
      index: this.$route.params.id || 0,
      // 下拉清單
      SelectItemValue: 4,
      Items: [{Name: "One", Value: "1"}, 
        {Name: "Two", Value: "2"},
        {Name: "Three", Value: "3"},
        {Name: "Four", Value: "4"}],
      Data: [
        {Name: '東泥史塔克', newPrice: 20.10, rangePercent: 0.5, range: 0.1, code: '1110'}
      ]
    }
  }
}
</script>
