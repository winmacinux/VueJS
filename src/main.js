// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import Blog from './Blog.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: Routes
});

/*
Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
});
Vue.filter('snippet', function (value) {
  return value.slice(0,100)+'...';
});
Vue.directive('theme', {
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
});
*/

/*
new Vue({
  el: '#app',
  render: (h) => h(App)
})
*/
new Vue({
  el: '#blog',
  render: (h) => h(Blog),
  router: router
})
