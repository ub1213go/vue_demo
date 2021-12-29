<template>
<div class='BackButtonLeftRightCorner'>
    <router-link :to='initLink' class='position-fixed my-3 d-flex'>
        <div class='icon-back'></div>
        <div class='ms-3 text-nowrap'>{{initLinkName}}</div>
    </router-link>
</div>
</template>

<script>

export default{
    name: 'BackButtonLeftRightCornerSection',
    props: ['link', 'linkName'],
    computed: {
        initLink: function(){
            if(this.link){
                return this.link
            }else{
                return '/member'
            }
        },
        initLinkName: function(){
            if(this.linkName){
                return this.linkName
            }else{
                return '我的'
            }
        }
    }
}
</script>
