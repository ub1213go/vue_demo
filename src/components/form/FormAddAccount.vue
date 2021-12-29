<template>
<div class='FormAddAccount'>
    <form action=''>
        <InputTextSection :name="'bank'" :label="'所屬銀行'"/>
        <InputTextSection :name="'branch'" :label="'分行名稱'"/>
        <InputTextSection :name="'bankn'" :label="'銀行代碼'"/>
        <InputTextSection :name="'account'" :label="'存管帳號'"/>
        <InputTextSection :name="'name'" :label="'姓名'"/>
        <div class='ms-sm-5 mt-5 fs-2'>
            提示：
            <ol class='ms-sm-5 text-secondary'>
                <li>新用戶註冊後必須通過添加存管帳戶。</li>
                <li>用戶只能添加一個本人存管帳戶。</li>
                <li>姓名必須和實名認證一致。</li>
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
    name: 'FormAddAccountSection',
    components: {
        InputTextSection
    },
    
}
</script>
