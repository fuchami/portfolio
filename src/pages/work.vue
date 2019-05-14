<template>
  <div id='app'>
    <v-app id="inspire" >
      <v-content>
        <v-container fluid grid-list-xl>
          <v-layout wrap >
            <v-flex v-for="(w, i) in works" :key="i"  d-flex xs12 sm6 dm6 lg4>
              <v-card elevation-3 hover>
                <v-img v-bind:src="w.img_url" ></v-img>
                <v-card-title primary-title>
                  <h1>{{ w.title}}</h1>
                  <p>{{ w.content}}</p>
                  <v-chip v-for="c in w.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn flat color="green" v-bind:href="w.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
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
      works: [
        {
          title: '学部判定LINE bot',
          content: '畳み込みニューラルネットワーク(MobileNet)を転移学習させて工学部と法学部の学生の顔画像を学習させました。送信された顔画像を元にどの学部っぽいかを返すジョークアプリです。',
          img_url: 'https://raw.githubusercontent.com/fuchami/portfolio/master/src/assets/images/pix2pix.png',
          github_url: 'https://github.com/fuchami/Undergraduate_classification',
          clips: [
            { color: 'red darken-1', name: 'keras' },
            { color: 'orange', name: 'tensorflow' },
            { color: 'red darken-3', name: 'Flask' }
          ]
        },
        {
          title: 'denoise pix2pix',
          content: '生成モデルを用いて画像に付与している小さなノイズ(ごま塩ノイズ)除去を行いました。非常に高いクオリティでノイズを除去することができます。pix2pixと呼ばれるニューラルネットワークのモデルを採用しています。',
          img_url: 'https://raw.githubusercontent.com/fuchami/portfolio/master/src/assets/images/pix2pix.png',
          github_url: 'https://github.com/fuchami/denoise_pix2pix',
          clips: [
            { color: 'red darken-1', name: 'keras' },
            { color: 'orange', name: 'tensorflow' },
            { color: 'green', name: 'openCV' }
          ]
        },
        {
          title: 'pokemon GAN',
          content: 'ポケモンっぽいドット絵を生成するモデルを作りました。DCGANと呼ばれるニューラルネットワーク生成モデルを実装し。モデルの学習を行いました。ポケモンのドット絵は画像処理により水増しを行うことで学習データ数を増強しています。',
          img_url: 'https://raw.githubusercontent.com/fuchami/portfolio/master/src/assets/images/pokemon.png',
          github_url: 'https://github.com/fuchami/pokeGAN',
          clips: [
            { color: 'red darken-1', name: 'keras' },
            { color: 'orange', name: 'tensorflow' },
            { color: 'green', name: 'openCV' }
          ]
        },
        {
          title: 'ポートフォリオ',
          content: '自身のポートフォリオサイトです。Vue.jsの勉強も兼ねて制作しました。マテリアルデザインを基本としたレスポンシブデザインを目指しました。vue-routerを用いたSPAの実装も行っています。',
          img_url: 'https://raw.githubusercontent.com/fuchami/portfolio/master/src/assets/images/portfolio.png',
          github_url: 'https://github.com/fuchami/portfolio',
          page_url: 'https://fuchami.github.io/portfolio/#/',
          clips: [
            { color: 'light-green', name: 'vue.js' }
          ]
        },
        {
          title: '平成最後のジェネレーター',
          content: 'Flaskの勉強で作りました。wikipediaから拾ってきたワードをもとに、『平成最後の〇〇』とつぶやけます。',
          img_url: 'https://raw.githubusercontent.com/fuchami/portfolio/master/src/assets/images/heisei.png',
          github_url: 'https://github.com/fuchami/heisei_generator',
          page_url: 'https://desolate-fjord-79266.herokuapp.com/',
          clips: [
            { color: 'red darken-3', name: 'Flask' }
          ]
        },
        {
          title: '西野カナ風歌詞生成bot',
          content: '大学の自然言語処理の課題で制作したものです。TwitterAPIを用いて西野カナの楽曲の歌詞を収集し。それらを元に西野カナ風の歌詞をツイートするbotです。歌詞は分かち書きした単語をN-gramにて生成しています。現在停止中ですが過去のツイートは閲覧することができます。',
          img_url: 'https://raw.githubusercontent.com/fuchami/portfolio/master/src/assets/images/kana.png',
          github_url: 'https://github.com/fuchami/kana_bot',
          bot_url: 'https://twitter.com/nlp2016test',
          clips: [
            { color: 'blue', name: 'Twitter API' }
          ]
        }
      ]
    }
  }
}
</script>
