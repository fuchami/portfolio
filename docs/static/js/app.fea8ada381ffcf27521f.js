webpackJsonp([0],{"7zck":function(t,n){},A7r8:function(t,n){},AbqK:function(t,n,e){t.exports=e.p+"static/img/pokeGAN.7084d95.png"},CM1c:function(t,n,e){t.exports=e.p+"static/img/kana.56970c5.png"},EzzR:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-toolbar",{staticClass:"cyan darken-2",attrs:{app:""}},[e("v-toolbar-title",[t._v("\n        fuchami's portfolio\n      ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[e("v-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"about"}},[t._v("about")])],1),t._v(" "),e("v-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"skill"}},[t._v("skill")])],1),t._v(" "),e("v-btn",{attrs:{flat:""}},[e("router-link",{attrs:{to:"work"}},[t._v("work")])],1)],1)],1),t._v(" "),e("v-content",[e("router-view")],1),t._v(" "),e("v-footer",{attrs:{dark:"",height:"auto"}},[e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-card-title",{staticClass:"cyan darken-2"},[e("v-spacer")],1),t._v(" "),e("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n            Copyrighting©2018 - fuchami  - All Rights Reserved.\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var a=e("VU/8")({data:function(){return{}}},r,!1,function(t){e("EzzR")},null,null).exports,s=e("/ocq"),o={data:function(){return{top_img_url:"top_Fotor.jpg"}},methods:{getImgUrl:function(t){return e("g2Y0")("./"+t)}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-parallax",{attrs:{dark:"",height:"700",src:this.getImgUrl(this.top_img_url)}},[n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin mb-3"},[this._v("\n          fuchami's portfolio\n        ")]),this._v(" "),n("h3",[this._v("\n          deep learning / web enginner\n        ")])])],1)],1)],1)},staticRenderFns:[]};var c=e("VU/8")(o,l,!1,function(t){e("fg4E")},null,null).exports,p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),n("v-app",{attrs:{id:"inspire"}},[n("v-chip",{attrs:{color:"primary","text-color":"white"}},[this._v("Primary")]),this._v(" "),n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[this._v("\n              fuchami's profile\n            ")])])])],1)],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{center:""}},[n("h1",[this._v("\n      about\n    ")])])}]};var u=e("VU/8")({data:function(){return{profile_img:"/src/assets/images/profile.jpg"}}},p,!1,function(t){e("A7r8")},null,null).exports,v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-timeline",[e("v-flex",{attrs:{xs10:"","offset-xs1":""}},t._l(t.skills,function(n){return e("v-timeline-item",t._b({key:n,attrs:{"fill-dot":""}},"v-timeline-item",n.posiiton,!1),[e("v-card",{staticClass:"elevation-2"},[e("v-card-title",{class:n.class},[e("v-icon",{staticClass:"mr-3",attrs:{dark:"",size:"42"}},[t._v("\n                mdi-magnify\n              ")]),t._v(" "),e("h2",{staticClass:"display-1 white--text font-weight-light"},[t._v("\n                "+t._s(n.language)+"\n              ")])],1),t._v(" "),e("v-container",[e("v-layout",[e("v-flex",[t._v("\n                  "+t._s(n.content)+"\n                ")])],1),t._v(" "),t._l(n.clips,function(n){return e("v-chip",{key:n,attrs:{color:n.color,"text-color":"white"}},[t._v("\n                "+t._s(n.name)+"\n              ")])})],2)],1)],1)}))],1)],1)],1)},staticRenderFns:[]},d=e("VU/8")({data:function(){return{skills:[{class:"blue darken-2",language:"python",content:"一番良く使う言語です．主に機械学習(Deep Learning)の実装に使用しています．",position:"left",clips:[{color:"red darken-1",name:"keras"},{color:"orange",name:"tensorflow"},{color:"green",name:"openCV"}]},{class:"amber lighten-1",language:"C",content:"大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGL",position:"right"},{class:"red darken-4",language:"Ruby",content:"現在，アルバイトとして企業向けのWebアプリを実装しておりそのタイミングで勉強しました．基本的にはRuby on Railsを使った実装が多いです.",position:"left",clips:[{color:"red darken-4",name:"Ruby on Rails"}]}]}}},v,!1,null,null,null).exports,f={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("v-app",{attrs:{id:"inspire"}},[e("v-content",[e("v-container",{attrs:{fluid:"","grid-list-xs":""}},[e("v-layout",{attrs:{wrap:"","justify-space-around":""}},t._l(t.works,function(n){return e("v-flex",{key:n.title},[e("v-card",{attrs:{width:"600px",hover:""}},[e("v-card-media",{attrs:{src:n.img_url}},[e("v-container",{attrs:{"fill-height":"",fluid:""}})],1),t._v(" "),e("v-card-text",[e("h1",[t._v("\n                  "+t._s(n.title)+"\n                ")]),t._v(" "),e("p",[t._v("\n                  "+t._s(n.content)+"\n                ")])])],1)],1)}))],1)],1)],1)],1)},staticRenderFns:[]},g=e("VU/8")({data:function(){return{works:[{title:"denoise pix2pix",content:"生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．",img_url:"/static/img/pix2pix.566d650.png",github_url:"https://github.com/fuchami/denoise_pix2pix"},{title:"pokemon GAN",content:"DCGANを用いてポケモンのドット絵を生成するモデルを作りました",img_url:"/static/img/pokeGAN.7084d95.png",github_url:"https:/github.com/fuchami/pokeGAN"},{title:"ポートフォリオ",content:"自身のポートフォリオサイトです．仕様としてSPA・レスポンシブ対応を目指しました．",img_url:"",github_url:"https:/github.com/fuchami/portfolio"},{title:"西野カナ風歌詞生成bot",content:"TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中",img_url:"/static/img/kana.56970c5.png"}]}}},f,!1,null,null,null).exports;i.default.use(s.a);var h=new s.a({routes:[{path:"/",name:"top",component:c},{path:"/about",name:"about",component:u},{path:"/skill",name:"skill",component:d},{path:"/work",name:"work",component:g}]}),_=(e("7zck"),e("3EgV")),m=e.n(_);i.default.use(m.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:h,render:function(t){return t(a)}})},axgS:function(t,n,e){t.exports=e.p+"static/img/pix2pix.566d650.png"},fg4E:function(t,n){},g2Y0:function(t,n,e){var i={"./kana.png":"CM1c","./pix2pix.png":"axgS","./pokeGAN.png":"AbqK","./top_Fotor.jpg":"vLpY"};function r(t){return e(a(t))}function a(t){var n=i[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}r.keys=function(){return Object.keys(i)},r.resolve=a,t.exports=r,r.id="g2Y0"},vLpY:function(t,n,e){t.exports=e.p+"static/img/top_Fotor.586423a.jpg"}},["NHnr"]);
//# sourceMappingURL=app.fea8ada381ffcf27521f.js.map