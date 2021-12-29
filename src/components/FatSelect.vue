<template>
    <div class='FatSelect'>
      <select :value='NowSelect' @change="onChange()" class="form-select form-select-lg text-white bg-dark border-0 py-4 text-center">
          <option v-for='item in Items' :key='item.Name' :value='item.Value'>{{item.Name}}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'FatSelectSection',
  props: {
    NowSelect: {type: Number},
    Items: {
      Name: {type: String},
      value: {type: Number}
    }
  },
  methods: {
    onChange(){
      console.log(this.NowSelect)
    }
  }
}
</script>