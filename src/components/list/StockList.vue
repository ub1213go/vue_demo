<template>
    <div class='StockList'>
        <div class="table-responsive">
            <table class="table table-sm table-dark">
                <thead class='align-middle'>
                <tr class='fs-3'>
                    <th scope="col" style="padding-left:15px">名稱</th>
                    <th scope="col">最新價</th>
                    <th scope="col">漲跌幅</th>
                    <th scope="col">漲跌</th>
                </tr>
                </thead>
                <tbody class='align-middle fs-4'>
                    <tr @click='clickStock(item.code)' v-for='item in Data' :key='item.Name' style='cursor: pointer'>
                        <th class='ps-3'>
                            <div class="fs-3">{{item.Name}}</div>
                            <div class='fs-5 text-secondary'>{{item.code}}</div>
                        </th>
                        <td>{{item.newPrice.toFixed(2)}}</td>
                        <td>{{item.rangePercent+'%'}}</td>
                        <td>{{item.range.toFixed(2)}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StockListSection',
    props: {
        Data: []
    },
    methods: {
        clickStock(code){
            this.$router.push({name: 'PriceDetail', params: {code: code}})
        }
    }

}
</script>
