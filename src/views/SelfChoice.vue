<template>
    <div class='SelfChoice'>
        <TitleLabelSection :title='"自選報價"'/>

        <div class="table-responsive">
            <table class="table table-sm table-dark">
            <thead>
                <tr class="fs-3">
                <th scope="col">名稱</th>
                <th scope="col">最新價</th>
                <th scope="col">漲跌幅</th>
                <th scope="col">刪自選</th>
                </tr>
            </thead>
            </table>
        </div>

        <BottomInfoSection :title='"已全部加載"'/>
        <DownNavSection :index='3'/>
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import DownNavSection from '@/components/DownNav.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
export default {
  name: 'SelfChoice',
  components: {
    TitleLabelSection,
    DownNavSection,
    BottomInfoSection

  }
}
</script>
