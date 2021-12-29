<template>
    <div class='MemberModify'>
        <BackButtonLeftRightCornerSection />
        <TitleLabelSection :title='"用戶訊息"'/>
        <InputTextSection :name='"name"' :label='"認證姓名"' :value='"阿倫"'/>
        <InputTextSection :name='"phone"' :label='"電話號碼"' :value='"0989345171"'/>
        <BlockButtonSection @click='open()' :title='"修改密碼"' @clickMe='changePwd'/>
        <BlockButtonSection :title='"登出本機"' @clickMe='logout'/>

        <div @click='cancel()' class='shadow' style="width:100%;height:150%;opacity:0.3;background-color:black;position:absolute;top:0px;left:0px;display:none"></div>
        <div class='my-changepwd shadow'>
          <div @click='cancel()' type="button" class='btn-close ms-auto btn-close-white'></div>
            <FormChangePwdSection />
        </div>
    </div>
</template>

<script>
import TitleLabelSection from '@/components/TitleLabel.vue';
import BackButtonLeftRightCornerSection from '@/components/BackButtonLeftRightCorner.vue';
import InputTextSection from '@/components/form/input/InputText.vue';
import BlockButtonSection from '@/components/BlockButton.vue';
import FormChangePwdSection from '@/components/form/FormChangePwd.vue';
export default {
  name: 'MemberModify',
  components: {
    TitleLabelSection,
    BackButtonLeftRightCornerSection,
    InputTextSection,
    BlockButtonSection,
    FormChangePwdSection
  },
  methods: {
    changePwd(title){
      console.log(title)

    },
    logout(title){
      console.log(title)
    },
    cancel(){
      let assemble = document.querySelectorAll('.shadow')
      assemble[0].style['display'] = 'none'
      assemble[1].style['bottom'] = '-100%'
      assemble[1].style['display'] = 'none'
    },
    open(){
      let assemble = document.querySelectorAll('.shadow')
      assemble[0].style['display'] = 'block'
      assemble[1].style['bottom'] = '0px'
      assemble[1].style['display'] = 'block'
    }
  }
}
</script>
