<template>
<div class='SelectBox'>
    <div class='row'>
        <div @click="si!=0 && change(0)" :class="[{'border-danger text-danger':si == 0}, {'mybtn':si != 0}]" class='col-6 text-center fs-2 p-3 border-bottom border-2'>{{name1}}</div>
        <div @click="si!=1 && change(1)" :class="[{'border-danger text-danger':si == 1},{'mybtn':si != 1}]" class='col-6 text-center fs-2 p-3 border-bottom border-2'>{{name2}}</div>
    </div>
</div>
</template>

<script>

export default{
    name: 'SelectBoxSectionSection',
    props: ['si', 'name1', 'name2'],
    methods:{
        change(data){
            this.$emit('sw', data)
        }
    }
    
}
</script>
