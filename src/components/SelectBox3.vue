<template>
<div class='SelectBox3'>
    <div class='row'>
        <div v-for='(item, index) in list' :key='item.name' class='col g-0'>
            <div  @click="select!=index && change(index)" :class="[{'border-danger':select == index}, {'mybtn':select != index}, {'border-bottom border-2':option && option.border}]" class='fs-2 p-3 d-flex justify-content-center'>
                <div :class='[select == index?item.icon + "_red" :item.icon]' class="me-3"></div>
                <div :class="[{'text-danger':select == index }, {'mybtn':select != index}]" class='text-nowrap text-secondary'>{{item.name}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// list = [{name, icon}]
// select = index
// option {border: true | false}
export default{
    name: 'SelectBox3Section',
    props: ['list', 'select', 'option'],
    methods:{
        change(n){
            this.$emit('select', n)
        }
    }
    
}
</script>
