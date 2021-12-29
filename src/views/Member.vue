<template>
  <div class='Member'>
    <div class='row'>
      <div class='col-8 d-flex'>
        <div @click='clickEye()' class='btn'>
          <div class='fs-3 d-inline'>資產狀況</div>
          <div :class="[[eye?'icon-eyeopen':'icon-eyeclose']]" class='ms-3 icon-eyeopen d-inline'>眼睛</div>
        </div>
      </div>
      <div class='col-4 d-flex justify-content-end align-items-center'>
        <div class='btn btn-danger'>支持</div>
        <router-link to="/membermodify" class="icon-gear ms-2">小齒輪</router-link>
      </div>
    </div>
    <div class='row'>
      <div class='col d-flex'>
        <div class='fs-2 mx-3'>總帳戶</div>
      </div>
    </div>
    <div class='row border-bottom border-5 border-warning mx-3'>
      <div class='col d-flex'>
        <div class='fs-1 fw-bolder text-danger'>$0.00</div>
      </div>
      <div class='col d-flex justify-content-end align-items-center'>
        <router-link to="/recharge" class='btn btn-warning money-btn'>儲值</router-link>
        <router-link to="/draw" class='btn btn-warning ms-2 money-btn'>提領</router-link>
      </div>
    </div> 
    <div class='row m-3'>
      <MemberSmallInfoBoxSection :label='"總資產"' :value='0.00' :iconName='"icon-moneyBag"' />
      <MemberSmallInfoBoxSection :label='"總損益"' :value='0.00' :iconName='"icon-member_1"' />
      <MemberSmallInfoBoxSection :label='"可用資金"' :value='0.00' :iconName='"icon-coin_blue"' />
      <MemberSmallInfoBoxSection :label='"融資可用"' :value='0.00' :iconName='"icon-member_2"' />
      <MemberSmallInfoBoxSection :label='"總持成本"' :value='0.00' :iconName='"icon-member_3"' />
    </div>
    <div class='d-flex flex-wrap border-top border-secondary'>
      <MemberSmallButtonSection :label='"持倉"' :link='"/hold/0"' :iconName='"icon-member_11"' />
      <MemberSmallButtonSection :label='"平倉"' :link='"/hold/1"' :iconName='"icon-member_12"' />
      <MemberSmallButtonSection :label='"公開申購"' :link='"/stockpurchase"' :iconName='"icon-member_13"' />
    </div>
    <div>
      <MemberListButtonSection :label='"實名認證"' :link='"/verified"' :iconName='"icon-member_21"' :iconName2='"icon-pass"'/>
      <MemberListButtonSection :label='"存管帳戶"' :link='"/depositoryaccount"' :iconName='"icon-member_23"' :iconName2='"icon-minus_red"'/>
      <MemberListButtonSection :label='"資金明細"' :link='"/moneydetail"' :iconName='"icon-member_22"' />
      <MemberListButtonSection :label='"儲值紀錄"' :link='"/rechargedetail"' :iconName='"icon-member_22"' />
    </div>
    <BlockButtonSection :title='"登出"' :option='{color:"secondary"}' @clickMe='logout'/>
    <DownNavSection :index='4'/>
  </div>
</template>

<script>
import DownNavSection from '@/components/DownNav.vue';
import MemberSmallInfoBoxSection from '@/components/MemberSmallInfoBox.vue';
import MemberSmallButtonSection from '@/components/MemberSmallButton.vue';
import MemberListButtonSection from '@/components/MemberListButton.vue';
import BlockButtonSection from '@/components/BlockButton.vue';
export default {
  name: 'Member',
  components: {
    DownNavSection,
    MemberSmallInfoBoxSection,
    MemberSmallButtonSection,
    MemberListButtonSection,
    BlockButtonSection
  },
  methods: {
    clickEye(){
      this.eye = !this.eye
    },
    logout(){
      this.$router.push({name: 'login'})
    }
  },
  data(){
    return {
      eye: false
    }
  }
}
</script>
