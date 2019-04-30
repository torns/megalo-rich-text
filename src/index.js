import octoparse from 'octoparse2';

export default {
  install(Vue) {
    Vue.prototype.$htmlParse = function(str) {
      let nodes = octoparse.parse(str);
      return nodes;
    }
  }
};