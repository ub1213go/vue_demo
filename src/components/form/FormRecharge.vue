<template>
<div class='FormRecharge'>
    <form action=''>
        <InputTextSection :name="'money'" :label="'儲值金額'"/>
        <div class='fs-5'>最小儲值金額爲1000.00元</div>
        <div class='ms-sm-5 mt-5 fs-2'>
            注意:為確保儲值即時到帳，請確認您輸入的金額和提交的儲值金額一致。
        </div>
        <div class='text-center'>
            <input type='submit' class='rounded-3 my-3 btn btn-danger text-white w-75 p-3 fs-2' value='立即儲值'>
        </div>
        <div style="padding-bottom:100px" />
    </form>
</div>
</template>

<script>
import InputTextSection from './input/InputText.vue'
export default{
    name: 'FormRechargeSection',
    components: {
        InputTextSection
    },
    
}
</script>
