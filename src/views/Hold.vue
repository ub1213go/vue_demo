<template>
  <div class='Hold'>
    <SelectBox3Section @select='selectIndex' :select='index' :list='[{name: "我的持倉", icon: "icon"}, {name: "我的平倉", icon: "icon"}]' :option='{border: false}'/>
    <BottomInfoSection :title='"暫無訂單!"'/>
    <DownNavSection :index='2'/>
  </div>
</template>

<script>
import DownNavSection from '@/components/DownNav.vue';
import SelectBox3Section from '@/components/SelectBox3.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
export default {
  name: 'Hold',
  components: {
    DownNavSection,
    SelectBox3Section,
    BottomInfoSection

  },
  methods: {
    selectIndex(data){
      this.index = data
    }
  },
  data(){
    return {
      index: this.$route.params.id || 0
    }
  }
}
</script>
