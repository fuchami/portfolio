webpackJsonp([0],{"+eiE":function(t,n){},"4GjL":function(t,n,e){t.exports=e.p+"static/img/logo.7c8ee4e.jpg"},"7UIB":function(t,n){},"7zck":function(t,n){},AbqK:function(t,n,e){t.exports=e.p+"static/img/pokeGAN.7084d95.png"},CM1c:function(t,n,e){t.exports=e.p+"static/img/kana.56970c5.png"},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-toolbar",{staticClass:"cyan darken-2",attrs:{app:""}},[e("v-toolbar-title",[t._v("\n        fuchami's portfolio\n      ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.menues,function(n){return e("v-btn",{key:n,attrs:{flat:""}},[e("router-link",{attrs:{to:n.url,tag:"span"}},[t._v(t._s(n.title))])],1)})),t._v(" "),e("v-menu",{staticClass:"hidden-md-and-up",attrs:{button:"",left:""}},[e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("\n            more_vert\n          ")])],1),t._v(" "),e("v-list",t._l(t.menues,function(n){return e("v-list-tile",{key:n},[e("router-link",{attrs:{to:n.url}},[e("v-list-tile-title",[t._v(t._s(n.title))])],1)],1)}))],1)],1),t._v(" "),e("v-content",[e("router-view")],1),t._v(" "),e("v-footer",{attrs:{dark:"",height:"auto"}},[e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-card-title",{staticClass:"cyan darken-2"},[e("v-spacer"),t._v(" "),t._l(t.links,function(n){return e("v-btn",{key:n,staticClass:"mx3",attrs:{dark:"",icon:""}},[e("v-icon",{attrs:{size:"24px"}},[t._v("\n              "+t._s(n.icon)+"\n            ")])],1)})],2),t._v(" "),e("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n            ©2018 - fuchami  - All Rights Reserved.\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var r=e("VU/8")({data:function(){return{links:[{icon:"fab fa-github",url:""}],menues:[{title:"home",url:"./"},{title:"about",url:"./about"},{title:"skill",url:"./skill"},{title:"work",url:"./work"}]}}},a,!1,function(t){e("7UIB")},null,null).exports,s=e("/ocq"),o={data:function(){return{top_img_url:"top_Fotor.jpg"}},methods:{getImgUrl:function(t){return e("g2Y0")("./"+t)}}},l={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-parallax",{attrs:{dark:"",height:"600",src:t.getImgUrl(t.top_img_url)}},[e("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[e("h1",{staticClass:"display-3 font-weight-thin mb-4",attrs:{id:"top"}},[t._v("\n          fuchami's portfolio\n        ")]),t._v(" "),e("h2",{staticClass:"font-weight-thin"},[t._v("\n          deep learning / web enginner\n        ")])])],1),t._v(" "),e("v-spacer"),t._v(" "),e("v-layout",{staticClass:"my-1",attrs:{row:"",wrap:"","justify-center":"",id:"contact"}},[e("v-flex",{attrs:{md8:""}},[e("v-card",{staticClass:"elevation-0 transparent"},[e("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[e("div",{staticClass:"headline"},[t._v("Contact")])]),t._v(" "),e("v-list",{staticClass:"transparent"},[e("v-list-tile",{staticClass:"layout justify-space-around"},[e("v-list-tile-action",[e("v-icon",{staticClass:"cyan--text text--darken-2"},[t._v("mail")])],1),t._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[t._v("\n                  sc114057[at]ibe.kagoshima-u.ac.jp\n                ")])],1)],1),t._v(" "),e("v-list-tile",{staticClass:"layout justify-space-around"},[e("p",[t._v("[at]には@を入力してください")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(o,l,!1,function(t){e("qc04")},null,null).exports,u={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-layout",{staticClass:"my-3",attrs:{"justify-center":""}},[e("v-flex",{attrs:{xs10:""}},[e("v-card",{staticClass:"elevation-7"},[e("v-card-title",{staticClass:"cyan darken-2"},[e("v-icon",{attrs:{size:"48px"}},[t._v("\n                mdi mdi-account\n              ")]),t._v("\n                \n            "),e("div",{staticClass:"hedline white--text"},[e("h1",[t._v("about me")])])],1),t._v(" "),t._l(t.items,function(n){return e("v-list",{key:n,staticClass:"transparent"},[e("v-list-tile",[e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"cyan--text text--darken-2"},[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-tile-content",[t._v("\n                  "+t._s(n.title)+"\n              ")])],1),t._v(" "),e("v-divider",{attrs:{inset:""}})],1)})],2)],1)],1)],1)],1)},staticRenderFns:[]};var p=e("VU/8")({data:function(){return{items:[{icon:"mdi-account",title:"二見 悠樹 (futami yuki)"},{icon:"location_on",title:"kagoshima"},{icon:"mdi-cake",title:"1995/04/28"},{icon:"mdi-school",title:"鹿児島大学院理工学研究科 情報生体システム工学"},{icon:"mdi-message-alert",title:"DeepLearning / Web Application"},{icon:"mdi-email",title:"sc114057[at]ibe.kagoshima-u.ac.jp"}]}}},u,!1,function(t){e("+eiE")},null,null).exports,v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.mdAndDown}},[e("v-flex",{attrs:{xs10:"","offset-xs1":""}},t._l(t.skills,function(n){return e("v-timeline-item",{key:n,attrs:{"fill-dot":"",color:"cyan darken-2"}},[e("v-card",{class:n.class,attrs:{dark:"",xs12:"",md4:""}},[e("v-card-title",{staticClass:"title"},[e("v-icon",{staticClass:"mr-3",attrs:{size:"20"}},[t._v(t._s(n.icon))]),t._v("\n                  "+t._s(n.language)+"\n            ")],1),t._v(" "),e("v-card-text",{staticClass:"white text--primary"},[t._v("\n              "+t._s(n.content)+"\n              "),e("v-flex",t._l(n.clips,function(n){return e("v-chip",{key:n,attrs:{color:n.color,"text-color":"white"}},[t._v(" "+t._s(n.name)+"\n                ")])}))],1)],1)],1)}))],1)],1)],1)},staticRenderFns:[]},d=e("VU/8")({data:function(){return{skills:[{icon:"fab fa-python",class:"blue darken-2",language:"python",content:"一番良く使う言語です．主にkeras/tensorflowを使ったDeep Learningの実装に使用しています．Twitter APIを使ったbotの開発も行いました．",position:"left",years:"3年",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"}]},{icon:"fas fa-code",class:"red darken-4",language:"Ruby",content:"企業向けのWebアプリを実装するアルバイトをしており, そのタイミングで勉強を始めました．基本的にはRuby on Railsを用いた実装を行っています．",position:"left",years:"6ヶ月",clips:[{color:"red darken-4",name:"Ruby on Rails"}]},{class:"amber lighten-1",language:"C",content:"大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGLを用いた簡単なゲームの実装を行いました．",position:"right",years:"2年半",clips:[{color:"green",name:"openCV"},{color:"cyan darken-1",name:"openGL"}]},{class:"amber lighten-1",language:"HTML / CSS",content:"大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGLを用いた簡単なゲームの実装を行いました．",position:"right",years:"2年半",clips:[{color:"green",name:"openCV"},{color:"cyan darken-1",name:"openGL"}]}]}}},v,!1,null,null,null).exports,f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-content",[e("v-container",{attrs:{fluid:"","grid-list-xs":""}},[e("v-layout",{attrs:{wrap:"","justify-space-around":""}},t._l(t.works,function(n){return e("v-flex",{key:n.title},[e("v-card",{attrs:{width:"600px",hover:""}},[e("v-card-media",{attrs:{src:n.img_url}},[e("v-container",{attrs:{"fill-height":"",fluid:""}})],1),t._v(" "),e("v-card-text",[e("h1",[t._v("\n                  "+t._s(n.title)+"\n                ")]),t._v(" "),e("p",[t._v("\n                  "+t._s(n.content)+"\n                ")])])],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]},m=e("VU/8")({data:function(){return{works:[{title:"denoise pix2pix",content:"生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．",img_url:"/static/img/pix2pix.566d650.png",github_url:"https://github.com/fuchami/denoise_pix2pix"},{title:"pokemon GAN",content:"DCGANを用いてポケモンのドット絵を生成するモデルを作りました",img_url:"/static/img/pokeGAN.7084d95.png",github_url:"https:/github.com/fuchami/pokeGAN"},{title:"ポートフォリオ",content:"自身のポートフォリオサイトです．仕様としてSPA・レスポンシブ対応を目指しました．",img_url:"",github_url:"https:/github.com/fuchami/portfolio"},{title:"西野カナ風歌詞生成bot",content:"TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中",img_url:"/static/img/kana.56970c5.png"}]}}},f,!1,null,null,null).exports;i.default.use(s.a);var _=new s.a({routes:[{path:"/",name:"top",component:c},{path:"/about",name:"about",component:p},{path:"/skill",name:"skill",component:d},{path:"/work",name:"work",component:m}]}),g=(e("gJtD"),e("csSS"),e("ao2D"),e("7zck"),e("3EgV")),h=e.n(g),k=e("Ui3i");i.default.use(h.a,{iconfont:"fa",primary:k.a.cyan.darken2,secondary:k.a.white,accent:k.a.cyan.darken4}),i.default.config.productionTip=!1,new i.default({el:"#app",router:_,render:function(t){return t(r)}})},ao2D:function(t,n){},axgS:function(t,n,e){t.exports=e.p+"static/img/pix2pix.566d650.png"},csSS:function(t,n){},g2Y0:function(t,n,e){var i={"./kana.png":"CM1c","./logo.jpg":"4GjL","./pix2pix.png":"axgS","./pokeGAN.png":"AbqK","./top_Fotor.jpg":"vLpY"};function a(t){return e(r(t))}function r(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}a.keys=function(){return Object.keys(i)},a.resolve=r,t.exports=a,a.id="g2Y0"},gJtD:function(t,n){},qc04:function(t,n){},vLpY:function(t,n,e){t.exports=e.p+"static/img/top_Fotor.586423a.jpg"}},["NHnr"]);
//# sourceMappingURL=app.c7dc0afbe4b184cd06c1.js.map