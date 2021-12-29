<template>
    <div class='InfoNews'>
        <div class='border-top border-bottom border-white'>
            <router-link :to="link" class='fs-3 m-2 text-white'>【公告】國產南港都更案建造執照審查已獲台北市政府核准通過</router-link>
            <div class="d-flex justify-content-between m-2">
                <div class='fs-4 text-secondary'>新聞 中央社</div>
                <div class='fs-4 text-secondary'>2021-12-29 11:09:50</div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'InfoNewsSection',
    computed: {
        link: function(){
            return 'newsdetail/1'
        }
    }
}
</script>
