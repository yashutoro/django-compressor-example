(function(e,t,n){var r=function(){"use strict";function r(){n.filters(arguments[0],arguments[1])}function i(){n.factory(arguments[0],arguments[1])}function s(){n.constants(arguments[0],arguments[1])}function o(){n.routes(arguments[0],arguments[1])}function u(){n.controller(arguments[0],arguments[1])}var t={filters:{},constants:{},factory:{},$me:{key:"val"},mode:null,root:"/",routes:{},controller:{},config:function(e){t.mode=e&&e.mode&&e.mode=="history"&&!!history.pushState?"history":"hash",t.root=e&&e.root?"/"+t.clearSlashes(e.root)+"/":"/"},getFragment:function(){var n="";if(t.mode==="history")n=t.clearSlashes(decodeURI(location.pathname+location.search)),n=n.replace(/\?(.*)$/,""),n=t.root!="/"?n.replace(t.root,""):n;else{var r=e.location.href.match(/#(.*)$/);n=r?r[1]:""}return t.clearSlashes(n)},clearSlashes:function(e){return e.toString().replace(/\/$/,"").replace(/^\//,"")},check:function(e){var n,r,i,s;for(var o=0,u=t.routes.length;o<u;o++)s={},r=t.routes[o].path.match(/:([^\/]+)/g),i=e.match(new RegExp(t.routes[o].path.replace(/:([^\/]+)/g,"([^/]*)"))),i&&(i.shift(),i.forEach(function(e,t){s[r[t].replace(":","")]=e}),t.controller[t.routes[o].handler].call({},s))},listen:function(){var e=t.getFragment(),n=function(){e!==t.getFragment()&&(e=t.getFragment(),t.check(e))};clearInterval(this.interval),this.interval=setInterval(n,50)}},n={filters:function(e,n){t.filters[e]=n},factory:function(e,r){var i=r.length-1,s=n.loadDependancies(r.slice(0,-1));console.log("last_index"+i),console.log(s),typeof r[i]=="function"?t.factory[i]=r[i].apply(this,s):console.log("Nan")},routes:function(e,n){t.routes.path=e,t.routes.handler=n},controller:function(e,t){},loadDependancies:function(e){var r=[],i;for(i=0;i<e.length;i+=1)typeof e[i]=="string"&&(t.factory.hasOwnProperty(e[i])?r.push(n.loadDependancy(e[i])):t.constants.hasOwnProperty(e[i])?r.push(n.loadConstant(e[i])):e[i]==="$me"?r.push({}):console.log("Error: "+e[i]+" is not Found in constants and Factories"));return r},loadDependancy:function(e){return t.factory[e]},loadConstant:function(e){return t.constants[e]},constants:function(e,n){t.constants[e]=n()}};return{filters:r,factory:i,routes:o,controller:u,constants:s}}})(window,document,undefined);