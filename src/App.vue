<template>
  <div id="app">
    <img src="./assets/logo.png">
    <book-list></book-list>
    <!-- <hello-world></hello-world> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import BookList from './components/BookList';

export default {
  name: 'app',
  components: {
    BookList,
    // HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
