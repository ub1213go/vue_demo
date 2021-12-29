<template>
<div class='FormLogin'>
    <form action=''>
        <InputTextSection :name="'account'" :label="'電話號碼'" :icon='"icon-user"' :option='true'/>
        <InputTextSection :name="'pwd'" :label="'密碼'" :icon='"icon-pwd"' :option='true'/>
      
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
    name: 'FormLoginSection',
    components: {
        InputTextSection
    },
    
}
</script>
