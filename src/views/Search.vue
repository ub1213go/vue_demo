<template>
  <div class='Search'>
    <div class='d-flex w-100'>
         <input class='bg-dark w-100 border-0 text-white fs-2' :placeholder="'輸入股號或名稱查詢'" :name='name' type="text" :value='dataValue' :disabled='dataValue'/>
         <div class='btn btn-secondary d-flex align-items-center flex-shrink-0'>
           <div class='icon-find'></div>
           搜索
          </div>
    </div>
    <StockListSection :Data='Data'/>

    <BottomInfoSection :title='"已全部加載"'/>
    <DownNavSection/>
  </div>
</template>

<script>
import DownNavSection from '@/components/DownNav.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
import StockListSection from '@/components/list/StockList.vue';
export default {
  name: 'Search',
  components: {
    DownNavSection,
    BottomInfoSection,
    StockListSection
  },
  methods: {
    selectIndex(data){
      this.index = data
    },
    findOne(){
      console.log("hi")
    }
  },
  data(){
    return {
      index: 0,
      Data: [
        {Name: '東泥史塔克', newPrice: 20.10, rangePercent: 0.5, range: 0.1, code: '1110'}
      ]
    }
  }
}
</script>
