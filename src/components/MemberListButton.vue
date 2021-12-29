<template>
<div class='MemberListButton border-secondary border-top'>
    <router-link :to='link' class='row py-sm-4 px-sm-5 px-3 py-2 justify-content-evenly align-items-center'>
        <div class='col-11 align-self-center d-flex'>
            <div :class='iconName'></div>
            <div class='ms-sm-3 ms-1 fs-2'>{{label}}</div>
            <div v-if='iconName2' :class='iconName2' class='ms-2'></div>
        </div>
        <div class='col-1'>
            <div class='icon-arrow'></div>
        </div>
    </router-link>
</div>
</template>

<script>

export default{
    name: 'MemberListButtonSection',
    props:['label', 'link', 'iconName', 'iconName2']
}
</script>
