webpackJsonp([0],{"4GjL":function(t,n,a){t.exports=a.p+"static/img/logo.7c8ee4e.jpg"},"7zck":function(t,n){},AbqK:function(t,n,a){t.exports=a.p+"static/img/pokeGAN.7084d95.png"},CM1c:function(t,n,a){t.exports=a.p+"static/img/kana.56970c5.png"},NHnr:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{floating:"",fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[a("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.menues,function(n){return a("v-list-tile",{key:n,attrs:{flat:"",to:{path:n.url}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(n.title))])],1)],1)}))],1),t._v(" "),a("v-toolbar",{staticClass:"cyan darken-2",attrs:{app:"",fixed:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[t._v("\n        fuchami's portfolio\n      ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.menues,function(n){return a("v-btn",{key:n,attrs:{flat:""}},[a("router-link",{attrs:{to:n.url,tag:"span"}},[t._v(t._s(n.title))])],1)}))],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"cyan darken-2"},[a("v-spacer"),t._v(" "),t._l(t.links,function(n){return a("v-btn",{key:n,staticClass:"mx3",attrs:{dark:"",icon:"",href:n.url,target:"_blank"}},[a("v-icon",{attrs:{size:"24px"}},[t._v("\n              "+t._s(n.icon)+"\n            ")])],1)})],2),t._v(" "),a("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n            ©2018 - fuchami  - All Rights Reserved.\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")({data:function(){return{drawer:!1,links:[{icon:"fab fa-blogger",url:"http://fuchami.hatenadiary.jp/"},{icon:"fab fa-github",url:"https://github.com/fuchami"}],menues:[{title:"home",icon:"home",url:"./"},{title:"about",icon:"mdi-account",url:"./about"},{title:"skill",icon:"mdi-dumbbell",url:"./skill"},{title:"work",icon:"mdi-codepen",url:"./work"}]}}},i,!1,function(t){a("Ypl1")},null,null).exports,s=a("/ocq"),o={data:function(){return{top_img_url:"top_Fotor.jpg"}},methods:{getImgUrl:function(t){return a("g2Y0")("./"+t)}}},l={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-parallax",{attrs:{dark:"",height:"600",src:t.getImgUrl(t.top_img_url)}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"display-3 font-weight-thin mb-4",attrs:{id:"top"}},[t._v("\n          fuchami's portfolio\n        ")]),t._v(" "),a("h2",{staticClass:"font-weight-thin"},[t._v("\n          deep learning / web enginner\n        ")])])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-layout",{staticClass:"my-1",attrs:{row:"",wrap:"","justify-center":"",id:"contact"}},[a("v-flex",{attrs:{md8:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact")])]),t._v(" "),a("v-list",{staticClass:"transparent"},[a("v-list-tile",{staticClass:"layout justify-space-around"},[a("v-list-tile-action",[a("v-icon",{staticClass:"cyan--text text--darken-2"},[t._v("mail")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                  sc114057[at]ibe.kagoshima-u.ac.jp\n                ")])],1)],1),t._v(" "),a("v-list-tile",{staticClass:"layout justify-space-around"},[a("p",[t._v("[at]には@を入力してください")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("qc04")},null,null).exports,u={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-layout",{staticClass:"my-3",attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs11:"",md6:"",lg4:""}},[a("v-card",{staticClass:"elevation-7"},[a("v-card-title",{staticClass:"cyan darken-2"},[a("div",{staticClass:"hedline white--text"},[a("h2",[t._v("about me")])]),t._v(" "),a("v-spacer"),t._v(" "),t._l(t.links,function(n){return a("v-btn",{key:n,staticClass:"mx3",attrs:{dark:"",icon:"",href:n.url,target:"_blank"}},[a("v-icon",{attrs:{size:"30px"}},[t._v("\n                "+t._s(n.icon)+"\n              ")])],1)})],2),t._v(" "),t._l(t.items,function(n){return a("v-list",{key:n,staticClass:"transparent"},[a("v-list-tile",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{staticClass:"cyan--text text--darken-2"},[t._v(t._s(n.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v("\n                  "+t._s(n.title)+"\n              ")])],1),t._v(" "),a("v-divider",{attrs:{inset:""}})],1)})],2)],1)],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")({data:function(){return{items:[{icon:"mdi-account",title:"二見 悠樹 (futami yuki)",tip:"name"},{icon:"fas fa-address-card",title:"fuchami",tip:"handle"},{icon:"mdi-cake",title:"1995/04/28",tip:"birthday"},{icon:"location_on",title:"kagoshima",tip:"location"},{icon:"mdi-school",title:"Kagoshima University M1",tip:"university"},{icon:"mdi-heart",title:"Deep Learning / Machine Learning",tip:"Interest"},{icon:"mdi-email",title:"sc114057[at]ibe.kagoshima-u.ac.jp",tip:"mail address"}],links:[{icon:"fab fa-blogger",url:"http://fuchami.hatenadiary.jp/"},{icon:"fab fa-github",url:"https://github.com/fuchami"}]}}},u,!1,function(t){a("qqpK")},null,null).exports,d={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.mdAndDown}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},t._l(t.skills,function(n){return a("v-timeline-item",{key:n,attrs:{"fill-dot":"",small:"",color:"cyan darken-2"}},[a("v-card",{class:n.class,attrs:{dark:"",xs8:"",md4:""}},[a("v-card-title",{staticClass:"title"},[a("v-icon",{staticClass:"mr-3",attrs:{size:"24"}},[t._v(t._s(n.icon))]),t._v("\n                  "+t._s(n.language)+"\n            ")],1),t._v(" "),a("v-card-text",{staticClass:"white text--primary"},[t._v("\n              "+t._s(n.content)+"\n              "),a("v-flex",[a("br"),t._v(" "),t._l(n.clips,function(n){return a("v-chip",{key:n,attrs:{color:n.color,"text-color":"white"}},[t._v("\n                "+t._s(n.name)+"\n              ")])})],2)],1)],1)],1)}))],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")({data:function(){return{skills:[{icon:"fab fa-python",class:"blue darken-2",language:"python",content:"一番良く使う言語です．主にkeras/tensorflowを使ったDeep Learningの実装に使用しています．Twitter APIを使ったbotの開発や進化計算の実装も行いました．",years:"3年",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"},{color:"orange darken-4",name:"deap"}]},{icon:"fas fa-code",class:"red darken-4",language:"Ruby",content:"企業向けのWebアプリを実装するアルバイトをしており, そのタイミングで勉強を始めました．基本的にはRuby on Railsを用いた実装を行っています．",years:"6ヶ月",clips:[{color:"red darken-4",name:"Ruby on Rails"}]},{icon:"fas fa-code",class:"yellow darken-1",language:"C",content:"大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGLを用いた簡単なゲームの実装を行いました．",years:"2年半",clips:[{color:"green",name:"openCV"},{color:"cyan darken-1",name:"openGL"}]},{icon:"fab fa-html5",class:"deep-orange darken-1",language:"HTML / CSS",content:"基本的な知識を心得ています．",years:"2年半",clips:[{color:"purple",name:"Bootstrap"}]},{icon:"fab fa-js-square",class:"amber darken-1",language:"javascript",content:"基本的な知識を心得ています",years:"2年半",clips:[{color:"light-green",name:"vue.js"},{color:"blue",name:"jQuery"}]},{icon:"fab fa-github",class:"green",language:"Github",content:"gitの基本的な使い方を習得しています．複数人での開発経験もあります．",years:"2年半"}]}}},d,!1,null,null,null).exports,f={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{attrs:{fluid:"","grid-list-xs":""}},[a("v-layout",{attrs:{wrap:"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},t._l(t.works,function(n){return a("v-card",{key:n.title,attrs:{width:"600px",hover:""}},[a("v-card-media",{attrs:{src:n.img_url}},[a("v-container",{attrs:{"fill-height":"",fluid:""}})],1),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v("\n                  "+t._s(n.title)+"\n                ")]),t._v(" "),a("p",[t._v("\n                  "+t._s(n.content)+"\n                ")]),t._v(" "),t._l(n.clips,function(n){return a("v-chip",{key:n,attrs:{color:n.color,"text-color":"white"}},[t._v("\n                  "+t._s(n.name)+"\n                ")])})],2),t._v(" "),a("v-layout",{attrs:{"justify-end":""}},[a("v-card-actions",[a("v-btn",{attrs:{color:"green",href:n.github_url,target:"_blank"}},[t._v("\n                    github\n                  ")])],1)],1)],1)}))],1)],1)],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")({data:function(){return{works:[{title:"denoise pix2pix",content:"生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．",img_url:"/static/img/pix2pix.566d650.png",github_url:"https://github.com/fuchami/denoise_pix2pix",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"}]},{title:"pokemon GAN",content:"DCGANを用いてポケモンのドット絵を生成するモデルを作りました",img_url:"/static/img/pokeGAN.7084d95.png",github_url:"https:/github.com/fuchami/pokeGAN",clips:[]},{title:"ポートフォリオ",content:"自身のポートフォリオサイトです．仕様としてSPA・レスポンシブ対応を目指しました．",img_url:"",github_url:"https:/github.com/fuchami/portfolio",clips:[]},{title:"西野カナ風歌詞生成bot",content:"TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中",img_url:"/static/img/kana.56970c5.png",clips:[]}]}}},f,!1,null,null,null).exports;e.default.use(s.a);var g=new s.a({routes:[{path:"/",name:"top",component:c},{path:"/about",name:"about",component:p},{path:"/skill",name:"skill",component:v},{path:"/work",name:"work",component:m}]}),_=(a("gJtD"),a("csSS"),a("ao2D"),a("7zck"),a("3EgV")),h=a.n(_),k=a("Ui3i");e.default.use(h.a,{iconfont:"fa",primary:k.a.cyan.darken2,secondary:k.a.white,accent:k.a.cyan.darken4}),e.default.config.productionTip=!1,new e.default({el:"#app",router:g,render:function(t){return t(r)}})},Ypl1:function(t,n){},ao2D:function(t,n){},axgS:function(t,n,a){t.exports=a.p+"static/img/pix2pix.566d650.png"},csSS:function(t,n){},g2Y0:function(t,n,a){var e={"./kana.png":"CM1c","./logo.jpg":"4GjL","./pix2pix.png":"axgS","./pokeGAN.png":"AbqK","./top_Fotor.jpg":"vLpY"};function i(t){return a(r(t))}function r(t){var n=e[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}i.keys=function(){return Object.keys(e)},i.resolve=r,t.exports=i,i.id="g2Y0"},gJtD:function(t,n){},qc04:function(t,n){},qqpK:function(t,n){},vLpY:function(t,n,a){t.exports=a.p+"static/img/top_Fotor.586423a.jpg"}},["NHnr"]);
//# sourceMappingURL=app.eb431ab3144760d2d9a3.js.map