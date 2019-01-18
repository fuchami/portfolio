<template>
  <div id='app'>
    <v-app id="inspire" >
      <v-content>
        <v-container fluid grid-list-xm>
          <v-layout wrap justify-space-between >

            <v-flex xs12 sm6 md6 lg4 >
              <v-card elevation-3 hover>
                <v-img v-bind:src="getImgUrl(pix2pix.img_url)" aspect-ration="2.75"></v-img>
                <v-card-title primary-title>
                  <h1>{{ pix2pix.title}}</h1>
                  <p>{{ pix2pix.content}}</p>
                  <v-chip v-for="c in pix2pix.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="green" v-bind:href="pix2pix.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm6 md6 lg4 >
              <v-card elevation-3 hover>
                <v-img v-bind:src="getImgUrl(pokeGAN.img_url)" aspect-ration="2.75"></v-img>
                <v-card-title primary-title>
                  <h1>{{ pokeGAN.title}}</h1>
                  <p>{{ pokeGAN.content}}</p>
                  <v-chip v-for="c in pokeGAN.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="green" v-bind:href="pokeGAN.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 lg4 >
              <v-card elevation-3 hover>
                <v-img v-bind:src="getImgUrl(kanabot.img_url)" aspect-ration="2.75"></v-img>
                <v-card-title primary-title>
                  <h1>{{ kanabot.title}}</h1>
                  <p>{{ kanabot.content}}</p>
                  <v-chip v-for="c in kanabot.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="blue" v-bind:href="kanabot.bot_url" target="_blank">
                    twitter
                  </v-btn>
                  <v-btn flat color="green" v-bind:href="kanabot.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>

            <v-flex xs12 sm6 md6 lg4 >
              <v-card elevation-3 hover>
                <v-img v-bind:src="getImgUrl(portfolio.img_url)" aspect-ration="2.75"></v-img>
                <v-card-title primary-title>
                  <h1>{{ portfolio.title}}</h1>
                  <p>{{ portfolio.content}}</p>
                  <v-chip v-for="c in portfolio.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="blue" v-bind:href="portfolio.page_url" target="_blank">
                    portfolio
                  </v-btn>
                  <v-btn flat color="green" v-bind:href="portfolio.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
                <br>

              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pix2pix: {
        title: 'denoise pix2pix',
        content: '生成モデルを用いて画像に付与している小さなノイズ(ごま塩ノイズ)除去を行いました.非常に高いクオリティでノイズを除去することができます．pix2pixと呼ばれるニューラルネットワークのモデルを採用しています．',
        img_url: 'pix2pix.png',
        github_url: 'https://github.com/fuchami/denoise_pix2pix',
        clips: [
          { color: 'red darken-1', name: 'keras' },
          { color: 'orange', name: 'tensorflow' },
          { color: 'green', name: 'openCV' }
        ]
      },
      pokeGAN: {
        title: 'pokemon GAN',
        content: 'ポケモンっぽいドット絵を生成するモデルを作りました.DCGANと呼ばれるニューラルネットワーク生成モデルを実装し，モデルの学習を行いました．ポケモンのドット絵は画像処理により水増しを行うことで学習データ数を増強しています．',
        img_url: 'pokeGAN.png',
        github_url: 'https://github.com/fuchami/pokeGAN',
        clips: [
          { color: 'red darken-1', name: 'keras' },
          { color: 'orange', name: 'tensorflow' },
          { color: 'green', name: 'openCV' }
        ]
      },
      portfolio: {
        title: 'ポートフォリオ',
        content: '自身のポートフォリオサイトです．Vue.jsの勉強も兼ねて制作しました．マテリアルデザインを基本としたレスポンシブデザインを目指しました．vue-routerを用いたSPAの実装も行っています．',
        img_url: 'portfolio.png',
        github_url: 'https://github.com/fuchami/portfolio',
        page_url: 'https://fuchami.github.io/portfolio/#/',
        clips: [
          { color: 'light-green', name: 'vue.js' }
        ]

      },
      kanabot: {
        title: '西野カナ風歌詞生成bot',
        content: '大学の自然言語処理の課題で制作したものです．TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．歌詞は分かち書きした単語をN-gramにて生成しています．現在停止中',
        img_url: 'kana.png',
        github_url: 'https://github.com/fuchami/kana_bot',
        bot_url: 'https://twitter.com/nlp2016test',
        clips: [
          { color: 'blue', name: 'Twitter API' }
        ]
      }
    }
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/images/' + img)
    }
  }
}
</script>
