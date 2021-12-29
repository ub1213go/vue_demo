<template>
<div class='DownNav'>
  <div style="padding-bottom:200px" />
  <div class='nav nav-pills nav-fill justify-content-center fixed-bottom p-2'>
      <router-link to="/"  class='nav-item'>
        <div :class="[index == 0?'icon-member_31_red':'icon-member_31']"></div>
        <div :class="{'text-danger':index == 0}" class='label fs-5'>首頁</div>
      </router-link>
      <router-link to="/price" class="nav-item">
        <div :class="[index == 1?'icon-member_32_red':'icon-member_32']"></div>
        <div :class="{'text-danger':index == 1}" class='label fs-5'>行情</div>
      </router-link>
      <router-link to="/hold" class='nav-item'>
        <div :class="[index == 2?'icon-member_33_red':'icon-member_33']"></div>
        <div :class="{'text-danger':index == 2}" class='label fs-5'>持倉</div>
      </router-link>
      <router-link to="/selfchoice" class="nav-item">
        <div :class="[index == 3?'icon-member_34_red':'icon-member_34']"></div>
        <div :class="{'text-danger':index == 3}" class='label fs-5'>自選</div>
      </router-link>
      <router-link to="/member" class='nav-item'>
        <div :class="[index == 4?'icon-member_35_red':'icon-member_35']"></div>
        <div :class="{'text-danger':index == 4}" class='label fs-5'>我的</div>
      </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'DownNavSection',
  props: ['index']
}
</script>
