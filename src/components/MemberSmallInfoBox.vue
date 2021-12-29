<template>
<div class='MemberSmallInfoBox col-sm-6 d-flex my-1'>
    <div :class='iconName'></div>
    <div class='ms-3'>
        <div class='fs-4'>{{label}}</div>
        <div class='fs-4'>{{value}}</div>
    </div>
</div>
</template>

<script>

export default{
    name: 'MemberSmallInfoBoxSection',
    props:['label', 'value', 'iconName']
}
</script>
