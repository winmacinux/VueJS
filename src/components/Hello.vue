<template>
  <div id="hello">
    <h1>{{name}}</h1>
    <p>{{msg}}</p>
    <h3>{{greeting()}}</h3>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      name: 'Ravi',
      msg: 'Welcome to Your Vue.js App',
      lists: ['PHP', 'Android', 'Vue 2', 'NodeJS', 'JAVA']
    }
  },
  methods: {
    greeting: function () {
      return 'Hey I have also started Vue 2 Development'
    }
  }
}
</script>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
