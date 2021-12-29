<template>
    <div class='DepositoryAccount'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"存管帳戶"'/>

        <div class='ms-5'>
          <div class='fs-3'>存管帳戶</div>
          <div class="d-flex">
            <div class='icon-card'></div>
            <div class='ms-5 fs-4'>
              <div>所屬銀行</div>
              <div>分行名稱</div>
              <div>銀行代碼</div>
              <div>存管帳號</div>
              <div>姓名</div>
            </div>
          </div>
        </div>


        <BottomInfoSection :title='"暫未綁定存管帳戶"'/>

        <div class='text-center'>
          <router-link to='/addaccount' class='text-white btn btn-danger'>添加存管帳戶</router-link>
        </div>
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import BottomInfoSection from '@/components/BottomInfo.vue';
export default {
  name: 'DepositoryAccount',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    BottomInfoSection
  }
}
</script>
