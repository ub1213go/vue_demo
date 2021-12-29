<template>
  <div class='Home'>
    <TitleLabelSection :title='"指數行情"'/>
    <div class='row'>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
    </div>


    <div class='position-relative text-center border-top border-bottom border-white p-2 m-3 fs-3'>
      <div>上市類股</div>
      <div @click="goto(0, 0)" style="cursor: pointer;" class='position-absolute top-50 end-0 translate-middle-y d-flex'>
        <div class='d-inline text-secondary'>更多</div>
        <div class='ms-3 d-inline icon-arrow'></div>
      </div>
    </div>


    <div class='row'>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
    </div>


    <div class='position-relative text-center border-top border-bottom border-white p-2 m-3 fs-3'>
      <div>上櫃類股</div>
      <div @click="goto(0, 1)" style="cursor: pointer;" class='position-absolute top-50 end-0 translate-middle-y d-flex'>
        <div class='d-inline text-secondary'>更多</div>
        <div class='ms-3 d-inline icon-arrow'></div>
      </div>
    </div>

    <div class='row'>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
      <InfoBoxSection/>
    </div>

    <div class='position-relative text-center border-top border-bottom border-white p-2 m-3 fs-3'>
      <div>行情資訊</div>
    </div>
    <InfoNewsSection/>
    <BottomInfoSection :title='"已全部加載"'/>
    <DownNavSection :index='0'/>
  </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import DownNavSection from '@/components/DownNav.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
import InfoBoxSection from '@/components/info/InfoBox.vue';
import InfoNewsSection from '@/components/info/InfoNews.vue';
export default {
  name: 'Home',
  components: {
    TitleLabelSection,
    DownNavSection,
    BottomInfoSection,
    InfoBoxSection,
    InfoNewsSection
  },
  methods: {
    goto(n, s){
      if(n === 0){
        this.$router.push({name: 'Price', params: {id: s}})
      }
    }
  }
}
</script>
