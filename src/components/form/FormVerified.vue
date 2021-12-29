<template>
<div class='FormVerified'>
    <form action=''>
        <InputTextSection :name="'name'" :label="'姓名'"/>
        <InputTextSection :name="'identity'" :label="'身分證字號'"/>
        <div class='ms-sm-5 mt-5 fs-2'>
            認證規則：
            <ol class='ms-sm-5 text-secondary'>
                <li>新用戶註冊必須通過實名認證審核。</li>
                <li>姓名和身分證字號一經認證不予修改，修改請聯繫客服。</li>
                <li>姓名必須和存管帳戶戶名一致。</li>
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
    name: 'FormVerifiedSection',
    components: {
        InputTextSection
    },
    
}
</script>
