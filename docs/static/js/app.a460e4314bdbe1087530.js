webpackJsonp([0],{"/iMD":function(t,e,a){t.exports=a.p+"static/img/portfolio.0d446ef.png"},"4GjL":function(t,e,a){t.exports=a.p+"static/img/logo.7c8ee4e.jpg"},"4bf8":function(t,e){},"7zck":function(t,e){},AbqK:function(t,e,a){t.exports=a.p+"static/img/pokeGAN.7084d95.png"},CM1c:function(t,e,a){t.exports=a.p+"static/img/kana.56970c5.png"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{floating:"",fixed:"",app:"","disable-resize-watcher":"false"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.menues,function(e){return a("v-list-tile",{key:e,attrs:{flat:"",to:{path:e.url}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),1)],1),t._v(" "),a("v-toolbar",{staticClass:"cyan darken-2",attrs:{app:"",fixed:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[t._v("\n        fuchami's portfolio\n      ")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.menues,function(e){return a("v-btn",{key:e,attrs:{flat:""}},[a("router-link",{attrs:{to:e.url,tag:"span"}},[t._v(t._s(e.title))])],1)}),1)],1),t._v(" "),a("v-content",[a("router-view")],1),t._v(" "),a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"cyan darken-2"},[a("v-spacer"),t._v(" "),t._l(t.links,function(e){return a("v-btn",{key:e,staticClass:"mx3",attrs:{dark:"",icon:"",href:e.url,target:"_blank"}},[a("v-icon",{attrs:{size:"24px"}},[t._v("\n              "+t._s(e.icon)+"\n            ")])],1)})],2),t._v(" "),a("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n            ©2018 - fuchami  - All Rights Reserved.\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")({data:function(){return{drawer:!1,links:[{icon:"fab fa-blogger",url:"http://fuchami.hatenadiary.jp/"},{icon:"fab fa-github",url:"https://github.com/fuchami"}],menues:[{title:"home",icon:"home",url:"./"},{title:"about",icon:"mdi-account",url:"./about"},{title:"skill",icon:"mdi-dumbbell",url:"./skill"},{title:"work",icon:"mdi-codepen",url:"./work"}]}}},r,!1,function(t){a("4bf8")},null,null).exports,o=a("/ocq"),s={data:function(){return{top_img_url:"top_Fotor.jpg"}},methods:{getImgUrl:function(t){return a("g2Y0")("./"+t)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-parallax",{attrs:{dark:"",height:"600",src:t.getImgUrl(t.top_img_url)}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("h1",{staticClass:"display-3 font-weight-thin mb-4",attrs:{id:"top"}},[t._v("\n          fuchami's portfolio\n        ")]),t._v(" "),a("h2",{staticClass:"font-weight-thin"},[t._v("\n          deep learning / web enginner\n        ")])])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-layout",{staticClass:"my-1",attrs:{row:"",wrap:"","justify-center":"",id:"contact"}},[a("v-flex",{attrs:{md8:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact")])]),t._v(" "),a("v-list",{staticClass:"transparent"},[a("v-list-tile",{staticClass:"layout justify-space-around"},[a("v-list-tile-action",[a("v-icon",{staticClass:"cyan--text text--darken-2"},[t._v("mail")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("\n                  sc114057[at]ibe.kagoshima-u.ac.jp\n                ")])],1)],1),t._v(" "),a("v-list-tile",{staticClass:"layout justify-space-around"},[a("p",[t._v("[at]には@を入力してください")])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(s,l,!1,function(t){a("qc04")},null,null).exports,p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-layout",{staticClass:"my-3",attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs11:"",md6:"",lg4:""}},[a("v-card",{staticClass:"elevation-7"},[a("v-card-title",{staticClass:"cyan darken-2"},[a("div",{staticClass:"hedline white--text"},[a("h2",[t._v("about me")])]),t._v(" "),a("v-spacer"),t._v(" "),t._l(t.links,function(e){return a("v-btn",{key:e,staticClass:"mx3",attrs:{dark:"",icon:"",href:e.url,target:"_blank"}},[a("v-icon",{attrs:{size:"30px"}},[t._v("\n                "+t._s(e.icon)+"\n              ")])],1)})],2),t._v(" "),t._l(t.items,function(e){return a("v-list",{key:e,staticClass:"transparent"},[a("v-list-tile",[a("v-btn",{attrs:{icon:""}},[a("v-icon",{staticClass:"cyan--text text--darken-2"},[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v("\n                  "+t._s(e.title)+"\n              ")])],1),t._v(" "),a("v-divider",{attrs:{inset:""}})],1)})],2)],1)],1)],1)],1)},staticRenderFns:[]};var v=a("VU/8")({data:function(){return{items:[{icon:"mdi-account",title:"二見 悠樹 (futami yuki)",tip:"name"},{icon:"fas fa-address-card",title:"fuchami",tip:"handle"},{icon:"mdi-cake",title:"1995/04/28",tip:"birthday"},{icon:"location_on",title:"kagoshima",tip:"location"},{icon:"mdi-school",title:"Kagoshima University M1",tip:"university"},{icon:"mdi-heart",title:"Deep Learning / Machine Learning",tip:"Interest"},{icon:"mdi-email",title:"sc114057[at]ibe.kagoshima-u.ac.jp",tip:"mail address"}],links:[{icon:"fab fa-blogger",url:"http://fuchami.hatenadiary.jp/"},{icon:"fab fa-github",url:"https://github.com/fuchami"}]}}},p,!1,function(t){a("qqpK")},null,null).exports,u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-timeline",{attrs:{"align-top":"",dense:t.$vuetify.breakpoint.mdAndDown}},[a("v-flex",{attrs:{xs10:"","offset-xs1":""}},t._l(t.skills,function(e){return a("v-timeline-item",{key:e,attrs:{"fill-dot":"",small:"",color:"cyan darken-2"}},[a("v-card",{class:e.class,attrs:{dark:"",xs8:"",md4:""}},[a("v-card-title",{staticClass:"title"},[a("v-icon",{staticClass:"mr-3",attrs:{size:"24"}},[t._v(t._s(e.icon))]),t._v("\n                  "+t._s(e.language)+"\n            ")],1),t._v(" "),a("v-card-text",{staticClass:"white text--primary"},[t._v("\n              "+t._s(e.content)+"\n              "),a("v-flex",[a("br"),t._v(" "),t._l(e.clips,function(e){return a("v-chip",{key:e,attrs:{color:e.color,"text-color":"white"}},[t._v("\n                "+t._s(e.name)+"\n              ")])})],2)],1)],1)],1)}),1)],1)],1)],1)},staticRenderFns:[]},d=a("VU/8")({data:function(){return{skills:[{icon:"fab fa-python",class:"blue darken-2",language:"python",content:"私が最もよく使用する言語です．主にkeras/tensorflowを使ったDeep Learningの実装を行っています．Twitter APIを使ったbotの開発や進化計算の実装も行いました．画像処理やファイルの一括操作も行います",years:"3年",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"},{color:"orange darken-4",name:"deap"}]},{icon:"fas fa-code",class:"red darken-4",language:"Ruby",content:"インターン先にて企業向けのWebアプリを開発しており，そのタイミングで勉強を始めました．基本的にはRuby on Railsを用いた実装を行っています．",years:"6ヶ月",clips:[{color:"red darken-4",name:"Ruby on Rails"}]},{icon:"fas fa-code",class:"yellow darken-1",language:"C",content:"大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGLを用いた簡単なゲームの制作などに使用しました.",years:"2年半",clips:[{color:"green",name:"openCV"},{color:"cyan darken-1",name:"openGL"}]},{icon:"fab fa-html5",class:"deep-orange darken-1",language:"HTML / CSS",content:"インターン先にてWebページの制作に使用しています",years:"1年",clips:[{color:"purple",name:"Bootstrap"}]},{icon:"fab fa-js-square",class:"amber darken-1",language:"javascript",content:"インターン先にてWebページの制作に使用しています．vue.jsを用いて簡単なWebページの制作も行いました．",years:"1年",clips:[{color:"light-green",name:"vue.js"},{color:"blue",name:"jQuery"}]},{icon:"fab fa-github",class:"green",language:"Github",content:"gitの基本的な使い方を習得しています．複数人での開発経験もあります．",years:"1年"}]}}},u,!1,null,null,null).exports,_={data:function(){return{research:{title:"自動ショット分割",content:"研究",img_url:"shot_detection.png",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"}]},pix2pix:{title:"denoise pix2pix",content:"生成モデルを用いて画像に付与している小さなノイズ(ごま塩ノイズ)除去を行いました.非常に高いクオリティでノイズを除去することができます．pix2pixと呼ばれるニューラルネットワークのモデルを採用しています．",img_url:"pix2pix.png",github_url:"https://github.com/fuchami/denoise_pix2pix",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"}]},pokeGAN:{title:"pokemon GAN",content:"ポケモンっぽいドット絵を生成するモデルを作りました.DCGANと呼ばれるニューラルネットワーク生成モデルを実装し，モデルの学習を行いました．ポケモンのドット絵は画像処理により水増しを行うことで学習データ数を増強しています．",img_url:"pokeGAN.png",github_url:"https://github.com/fuchami/pokeGAN",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"}]},portfolio:{title:"ポートフォリオ",content:"自身のポートフォリオサイトです．Vue.jsの勉強も兼ねて制作しました．マテリアルデザインを基本としたレスポンシブデザインを目指しました．vue-routerを用いたSPAの実装も行っています．",img_url:"portfolio.png",github_url:"https://github.com/fuchami/portfolio",page_url:"https://fuchami.github.io/portfolio/#/",clips:[{color:"light-green",name:"vue.js"}]},kanabot:{title:"西野カナ風歌詞生成bot",content:"大学の自然言語処理の課題で制作したものです．TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．歌詞は分かち書きした単語をN-gramにて生成しています．現在停止中",img_url:"kana.png",github_url:"https://github.com/fuchami/kana_bot",bot_url:"https://twitter.com/nlp2016test",clips:[{color:"blue",name:"Twitter API"}]}}},methods:{getImgUrl:function(t){return a("g2Y0")("./"+t)}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{attrs:{fluid:"","grid-list-xm":""}},[a("v-layout",{attrs:{wrap:"","justify-space-between":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{attrs:{"elevation-3":"",hover:""}},[a("v-img",{attrs:{src:t.getImgUrl(t.research.img_url),"aspect-ration":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v(t._s(t.research.title))]),t._v(" "),a("p",[t._v(t._s(t.research.content))]),t._v(" "),t._l(t.pix2pix.clips,function(e){return a("v-chip",{key:e,attrs:{color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(t.research.name)+"\n                ")])})],2),t._v(" "),a("v-card-actions",[a("v-spacer")],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[a("v-card",{attrs:{"elevation-3":"",hover:""}},[a("v-img",{attrs:{src:t.getImgUrl(t.pix2pix.img_url),"aspect-ration":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v(t._s(t.pix2pix.title))]),t._v(" "),a("p",[t._v(t._s(t.pix2pix.content))]),t._v(" "),t._l(t.pix2pix.clips,function(e){return a("v-chip",{key:e,attrs:{color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",color:"green",href:t.pix2pix.github_url,target:"_blank"}},[t._v("\n                  github\n                ")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[a("v-card",{attrs:{"elevation-3":"",hover:""}},[a("v-img",{attrs:{src:t.getImgUrl(t.pokeGAN.img_url),"aspect-ration":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v(t._s(t.pokeGAN.title))]),t._v(" "),a("p",[t._v(t._s(t.pokeGAN.content))]),t._v(" "),t._l(t.pokeGAN.clips,function(e){return a("v-chip",{key:e,attrs:{color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",color:"green",href:t.pokeGAN.github_url,target:"_blank"}},[t._v("\n                  github\n                ")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[a("v-card",{attrs:{"elevation-3":"",hover:""}},[a("v-img",{attrs:{src:t.getImgUrl(t.kanabot.img_url),"aspect-ration":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v(t._s(t.kanabot.title))]),t._v(" "),a("p",[t._v(t._s(t.kanabot.content))]),t._v(" "),t._l(t.kanabot.clips,function(e){return a("v-chip",{key:e,attrs:{color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",color:"blue",href:t.kanabot.bot_url,target:"_blank"}},[t._v("\n                  twitter\n                ")]),t._v(" "),a("v-btn",{attrs:{flat:"",color:"green",href:t.kanabot.github_url,target:"_blank"}},[t._v("\n                  github\n                ")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[a("v-card",{attrs:{"elevation-3":"",hover:""}},[a("v-img",{attrs:{src:t.getImgUrl(t.portfolio.img_url),"aspect-ration":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("h1",[t._v(t._s(t.portfolio.title))]),t._v(" "),a("p",[t._v(t._s(t.portfolio.content))]),t._v(" "),t._l(t.portfolio.clips,function(e){return a("v-chip",{key:e,attrs:{color:e.color,"text-color":"white"}},[t._v("\n                  "+t._s(e.name)+"\n                ")])})],2),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",color:"blue",href:t.portfolio.page_url,target:"_blank"}},[t._v("\n                  portfolio\n                ")]),t._v(" "),a("v-btn",{attrs:{flat:"",color:"green",href:t.portfolio.github_url,target:"_blank"}},[t._v("\n                  github\n                ")])],1),t._v(" "),a("br")],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},g=a("VU/8")(_,f,!1,null,null,null).exports;n.default.use(o.a);var m=new o.a({routes:[{path:"/",name:"top",component:c},{path:"/about",name:"about",component:v},{path:"/skill",name:"skill",component:d},{path:"/work",name:"work",component:g}]}),h=(a("gJtD"),a("csSS"),a("ao2D"),a("7zck"),a("3EgV")),b=a.n(h),k=a("Ui3i");n.default.use(b.a,{iconfont:"fa",primary:k.a.cyan.darken2,secondary:k.a.white,accent:k.a.cyan.darken4}),n.default.config.productionTip=!1,new n.default({el:"#app",router:m,render:function(t){return t(i)}})},ao2D:function(t,e){},axgS:function(t,e,a){t.exports=a.p+"static/img/pix2pix.566d650.png"},csSS:function(t,e){},d6fJ:function(t,e,a){t.exports=a.p+"static/img/shot_detection.bcfd2f2.png"},g2Y0:function(t,e,a){var n={"./kana.png":"CM1c","./logo.jpg":"4GjL","./pix2pix.png":"axgS","./pokeGAN.png":"AbqK","./portfolio.png":"/iMD","./shot_detection.png":"d6fJ","./top_Fotor.jpg":"vLpY"};function r(t){return a(i(t))}function i(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="g2Y0"},gJtD:function(t,e){},qc04:function(t,e){},qqpK:function(t,e){},vLpY:function(t,e,a){t.exports=a.p+"static/img/top_Fotor.586423a.jpg"}},["NHnr"]);
//# sourceMappingURL=app.a460e4314bdbe1087530.js.map