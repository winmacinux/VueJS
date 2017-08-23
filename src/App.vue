<template>
  <div id="app">

  <vue-header></vue-header>
  <vue-hello></vue-hello>
  <form-helper>
    <h3 slot="title" >{{title}}</h3>
    <p slot="text" >{{text}}</p>
  </form-helper>
  <keep-alive>
    <component v-bind:is="component" ></component>
  </keep-alive>
    <button type="button" name="button" v-on:click="component='form-one'" >Change to form One</button>
    <button type="button" name="button" v-on:click="component='form-two'" >Chnage to form Two</button>
  <form-helper>
    <div slot="form-header" >
      <h1>This is the title of the form</h1>
      <p>Information about the form</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="Name" required>
      <input type="password" placeholder="Password" required>
    </div>
    <div slot="form-controls" >
      <button type="submit" v-on:click="handleSubmit" name="button">Submit</button>
    </div>
  </form-helper>
  <vue-footer></vue-footer>

</div>
</template>

<script>
import Hello from './components/Hello.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import formHelper from './components/formHelper.vue'
import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'

export default {
  name: 'app',
  components: {
    'vue-header': Header,
    'vue-hello': Hello,
    'vue-footer': Footer,
    'form-helper': formHelper,
    'form-one': formOne,
    'form-two': formTwo
  },
  data(){
    return{
    title: 'I am Dynamic Title of Form Helper',
    text: 'T am Dynamic Text of Form Helper',
    component: 'form-one'
  }
  },
  methods:{

  },
  beforeCreate(){
    //alert("Before Created");
  },
  created(){
    //alert("Created");
  },
  beforeMount(){
    //alert("Before Mounted");
  },
  mounted(){
    //alert("Mounted");
  },
  beforeUpdate(){
    //alert("Before Updated");
  },
  updated(){
    //alert("Updated");
  }
}
</script>
<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
