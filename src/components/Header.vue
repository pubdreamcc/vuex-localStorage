<template>
  <div id="header">
    <input type="text" placeholder="请输入字母" v-model="todo">
    <button class="btn" @click="add">添加</button>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      todo: ''
    }
  },
  methods: {
    add () {
      let todo = this.todo
      if (todo) {
        this.$store.dispatch('addTodo', todo)
        this.todo = ''
      } else {
        alert('请输入合法值')
      }
    }
  }
}
</script>
<style>
  #header{
    text-align: center;
    height: 50px;
    line-height: 50px;
    background: #bfacbf;
    opacity: .6;
  }
  #header .btn{
    vertical-align: middle;
    height: 30px;
    text-align: center;
    background: black;
    color: red;
    font-size: 20px;
  }
  #header input{
    height: 30px;
    color: red;
    font-size: 20px;
  }
</style>
