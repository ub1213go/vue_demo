<template>
<div class='BlockButton'>
    <div class='text-center'>
        <div @click='this.$emit("clickMe", title)' :class='color' class='btn w-75 p-4 fs-3 rounded-3 mt-5'>{{title}}</div>
    </div>
</div>
</template>

<script>

export default{
    name: 'BlockButtonSection',
    props: ['title', 'option'],
    computed: {
        color: function(){
            if(this.option && this.option.color === 'secondary'){
                console.log('border-' + this.option.color + ' text-' + this.option.color)
                return 'border-' + this.option.color + ' text-' + this.option.color
            }
            return 'text-white border-white'
        }
    }
}
</script>
