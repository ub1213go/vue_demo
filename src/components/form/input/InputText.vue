<template>
<div class='InputText'>
    <div class='row p-4 border-bottom border-1 border-secondary'>
        <label class='col-sm-3 col-12 fs-2 d-flex justify-content-center' for='bank'>
            <div v-if='icon' :class='icon' class='m-auto'></div>
            <div>{{option?'':label}}</div>
        </label>
        <input class='col bg-dark border-0 text-white fs-2' :placeholder="'請輸入' + label" :name='name' type="text" :value='dataValue' :disabled='dataValue'/>
    </div>
</div>
</template>

<script>

export default{
    name: 'InputText',
    props: ['name', 'label', 'value', 'icon', 'option'],
    computed: {
        dataValue: function(){
            return this.value
        }
    }
    
}
</script>
