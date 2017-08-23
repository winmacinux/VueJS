// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import Blog from './Blog.vue'
//import VueResource from 'vue-resource'

//Vue.use(VueResource);

new Vue({ // eslint-disable-line no-new
  el: '#blog',
  render: (h) => h(Blog)
})
