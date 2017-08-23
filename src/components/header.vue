<template lang="html">
  <div id="header">
    <h1>{{msg}}</h1>
    <nav>
      <ul>
        <li><router-link to="/" exact>Blogs</router-link></li>
        <li><router-link to="/add" exact>Add Blog</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data(){
    return {
      msg: 'Ravi Blog Page'
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #ffffff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
a:hover:not(.router-link-active){
  background-color: white;
  color: #444;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background-color: pink;
  color: #444;
}
</style>
