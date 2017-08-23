<template>
  <div id="single-blog" >
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <p>Author: {{blog.author}}</p>
    <h4>Tags:</h4>
    <ul>
      <li v-for="category in blog.categories" >{{category}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.$http.get('https://ravi-blog.firebaseio.com/posts/'+this.id+'.json').then(function (data) {
        console.log(data);
        //this.blog =data.body;
        return data.json();
    }).then(function (data) {
      this.blog = data;
    });
  }
}
</script>

<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    display: inline-block;
    padding: 10px 20px;
    background-color: lightgray;
    margin-right: 5px;
  }
</style>
