<template>
  <div id="app">
    <Header></Header>
    <List></List>
  </div>
</template>

<script>
import List from './components/List'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
    List
  }
}
</script>

<style>
  #app{
    width: 350px;
    margin: 0 auto;
  }
  body,ul,li{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style-type: none;
  }
</style>
