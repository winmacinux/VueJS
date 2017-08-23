<template lang="html">
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search Blogs" >
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id" ><h2 v-rainbow >{{blog.title | to-uppercase}}</h2></router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin.js'

export default {
  data(){
    return{
      blogs:[],
      search: ''
    }
  },
  methods:{

  },
  computed: {

  },
  filters: {
    /*
    'to-uppercase': function (value){
      return value.toUpperCase();
    },
    'snippet': function (value){
      return value.slice(0,100)+'...';
    }
    */
    toUppercase(value){
      return value.toUpperCase();
    },
    snippet(value){
      return value.slice(0,100)+'...';
    }
  },
  directives:{
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    },
    'theme': {
      bind(el, binding, vnode){

        if (binding.value == 'wide') {
          el.style.maxWidth = "1200px";
        }
        else if (binding.value == 'narrow') {
          el.style.maxWidth = "560px";
        }

        if(binding.arg == 'column'){
          el.style.background = '#ddd';
          el.style.padding = '20px';
        }
      }
    }
  },
  mixins:[searchMixin],
  created(){
    this.$http.get('https://ravi-blog.firebaseio.com/posts.json').then(function (data) {
      console.log(data);
      //this.blogs = data.body.slice(0,10);
      return data.json();
    }).then(function (data) {
      var blogsArray = [];
      for (let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      console.log(this.blogs);
    });
  }
}
</script>

<style scoped>
#show-blogs{
  margin: 0 auto;
}
#show-blogs h1{
  text-align: left;
}
.single-blog{
    background-color: lightgray;
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
  }
  input{
    width: 100%;
    height: 30px;
    font-size: 18px;
  }
  a{
    text-decoration: none;
  }
</style>
