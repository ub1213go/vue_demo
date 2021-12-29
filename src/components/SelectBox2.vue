<template>
<div class='SelectBox2'>
    <div class='row'>
        <div @click="si!=0 && change(0)" class='col-6 text-center fs-2 p-3 d-flex justify-content-center'>
            <div :class="[si == 0 ? 'icon-red':'icon']"></div>
            <div :class="{'text-danger':si == 0}">我的持倉</div>
        </div>
        <div @click="si!=1 && change(1)" class='col-6 text-center fs-2 p-3 d-flex justify-content-center'>
            <div :class="[si == 1 ? 'icon-red':'icon']"></div>
            <div :class="{'text-danger':si == 1}">我的平倉</div>
        </div>
    </div>
</div>
</template>

<script>

export default{
    name: 'SelectBox2Section',
    props: ['si'],
    methods:{
        change(data){
            this.$emit('sw', data)
        }
    }
    
}
</script>
