<template>
  <div id="item">
    <ul class="list">
      <li v-for="(item,index) in todos" :key="index">
        <span>{{item}}</span>
        <button @click="delTodo(index, item)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'Item',
  data () {
    return {
      todos: this.$store.state.todos // this.$store.state.todos
    }
  },
  methods: {
    delTodo (i, todo) {
      if (confirm(`确定要删除${todo}吗？`)) {
        this.$store.dispatch('delTodo', i) // sdadsal
      }
    }
  },
  beforeCreate () {
    this.$store.commit('ref')
  }
}
</script>
<style>
  .list li{
    height: 38px;
    border: 1px solid blueviolet;
    line-height: 38px;
  }
  .list li span{
    font-size: 30px;
    color: black;
    font-weight: 500;
  }
  .list li button{
    float: right;
    background: red;
    color: yellow;
    font-size: 18px;
    text-align: center;
    margin-top: 3px;
  }
  .list li:hover{
    background: rgb(133, 4, 4);
  }
</style>
