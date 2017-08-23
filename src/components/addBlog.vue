<template lang="html">
  <div id="add-blog" >
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted" >
      <h1>Blog is been posted.</h1>
      <label >Blog Title:</label><br>
      <input type="text" v-model="blog.title" required autofocus><br><br>
      <label >Blog Content:</label><br>
      <textarea v-model="blog.content" rows="6" cols="30" ></textarea>
      <br><br>
      <label for="1">CSE</label>
      <input type="checkbox" id="1" v-model="blog.categories" value="CSE" ><br>
      <label for="2">MAE</label>
      <input type="checkbox" id="2" v-model="blog.categories" value="MAE" ><br>
      <label for="3">ECE</label>
      <input type="checkbox" id="3" v-model="blog.categories" value="ECE" ><br>
      <label for="4">EEE</label>
      <input type="checkbox" id="4" v-model="blog.categories" value="EEE" ><br>
      <br>
      <h3>Author</h3>
      <select v-model="blog.author" >
        <option v-for="author in authors" >{{author}}</option>
      </select><br><br>
      <button type="button" v-on:click.prevent="post" >Add Blog</button>
      <div v-if="submitted" >
        <h3>Thanks for adding your post.</h3>
      </div>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:<br>{{blog.content}}</p>
      <ul>
        <li v-for="category in blog.categories" value="" >{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  component:{

  },
  data(){
    return{
    blog:  {
      title: "",
      content: "",
      categories: [],
      author: ""
    },
    authors: ['Ravi', 'Nipun', 'Ayush', 'Sarim'],
    submitted: false
    }
  },
  methods:{
    post: function () {
      //alert("Hello");
      this.$http.post('https://ravi-blog.firebaseio.com/posts.json', this.blog).then(function (data) {
        //console.log(data);
        //alert(data);
        this.submitted = true;
      });
    }
  }
}
</script>

<style scoped lang="css">
#add-blog{
  background-color: lightgray;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px 0;
  text-align: center;
}
li{
  list-style: none;

}
</style>
