<template>
    <div class='StockPurchase'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"公開申購"'/>
        <SelectBox3Section :list='list' :select='select' @select='MainSelected' :option='option'/>
        <SelectBox3Section v-if='select==0' :list='slist1' :select='sselect1' @select='SubSelected1'/>
        <SelectBox3Section v-if='select==1' :list='slist2' :select='sselect2' @select='SubSelected2'/>

        <DownNavSection />
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import DownNavSection from '@/components/DownNav.vue';
import SelectBox3Section from '@/components/SelectBox3.vue';
export default {
  name: 'StockPurchase',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    DownNavSection,
    SelectBox3Section
  },
  data(){
    return {
      option: {border: true},
      list: [
        {name: '公開申購', icon: 'icon'},
        {name: '申購記錄', icon: 'icon'}
      ],
      select: 0,
      slist1: [
        {name:'可申購'},
        {name:'待發行'},
        {name:'待上市'}
      ],
      sselect1: 0,
      slist2: [
        {name:'申購中'},
        {name:'待繳費'},
        {name:'未中籤'},
        {name:'已中籤'}
      ],
      sselect2: 0
    }
  },
  methods: {
    MainSelected(n){
      this.select = n
    },
    SubSelected1(n){
      this.sselect1 = n
    },
    SubSelected2(n){
      this.sselect2 = n
    }
  }
}
</script>
