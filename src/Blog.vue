<template lang="html">
  <div id="blog">
    <blog-header></blog-header>
    <router-view></router-view>
    <!--
    <h1>Hello Bloggers</h1>
    <blog></blog>
  <show-blogs></show-blogs>
-->
  </div>
</template>

<script>
import Blog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import header from './components/header.vue'

export default {
  components:{
    'blog': Blog,
    'show-blogs': showBlogs,
    'blog-header': header
  },
  data(){

  }
}
</script>

<style lang="css">
</style>
