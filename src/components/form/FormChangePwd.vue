<template>
<div class='FormChangePwd'>
    <form action=''>
        <InputTextSection :name='"old_pwd"' :label='"舊密碼"'/>
        <InputTextSection :name='"new_pwd"' :label='"新密碼"'/>
      
        <div class='text-center'>
            <input type='submit' class='rounded-3 my-3 btn btn-danger text-white w-75 p-3 fs-2' value='確定'>
        </div>
    </form>
</div>
</template>

<script>
import InputTextSection from './input/InputText.vue'
export default{
    name: 'FormChangePwdSection',
    components: {
        InputTextSection
    },
    
}
</script>
