// JavaScript source code
<template>
  <div>
      <li>{{book.title}} : {{book.author}}</li>
  </div>
</template>

<script>
  export default {
    name:"BookItem",
    props: ["book"],
      data() {
        return {

      };
    }


  };
</script>

<style>
li {
  display: block;
  margin: 0 10px;
}
</style>
