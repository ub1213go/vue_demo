<template>
<div class='MemberSmallButton my-sm-3 mx-sm-5 my-1 mx-3'>
    <router-link v-bind:to='link'>
        <div :class='iconName' class='m-auto'></div>
        <div class='fs-4'>{{label}}</div>
    </router-link>
</div>
</template>

<script>

export default{
    name: 'MemberSmallButtonSection',
    props:['label', 'link', 'iconName']
}
</script>
