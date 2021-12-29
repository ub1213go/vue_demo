<template>
<div class='FormDraw'>
    <form action=''>
        <InputTextSection :name="'money'" :label="'提領金額'"/>
        <div class='ms-sm-5 mt-5 fs-2'>
            注意: 提領默認提取帳戶中的可用資金。
            <ol class='ms-sm-5 text-secondary'>
                <li>提領請先通過實名認證和綁定存管帳戶，如有疑慮請聯繫客服人員。</li>
                <li>提領時段中，提領時間受銀行清算時間影響，各銀行導致時間不一，T+2提領到帳。</li>
                <li>本交易提領時段內皆可傳送訊息至銀行，但本交易執行與否，悉依付款銀行規定辦理。</li>
            </ol>
            
        </div>
        <div class='text-center'>
            <input type='submit' class='rounded-3 my-3 btn btn-danger text-white w-75 p-3 fs-2' value='確定'>
        </div>
        <div style="padding-bottom:100px" />
    </form>
</div>
</template>

<script>
import InputTextSection from './input/InputText.vue'
export default{
    name: 'FormDrawSection',
    components: {
        InputTextSection
    },
    
}
</script>
