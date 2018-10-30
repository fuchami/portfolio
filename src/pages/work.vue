<template>
  <div id='app'>
    <v-app id='inspire' light>
      <v-content>
        <v-container>
          <v-layout row wrap>
            <v-flex md8 offset-md2>
              <div v-for="work in works" :key="work.title">
                <v-card class="md-4 mb-4 pa-2" hover>
                  <v-card-media class="white--text" width="50%">
                    <v-container fill-height fluid>
                    </v-container>
                  </v-card-media>

                  <v-card-text>
                    <h1>
                      {{ work.title}}
                    </h1>
                    <p>
                      {{ work.content}}
                    </p>
                  </v-card-text>
                </v-card>
              </div>
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
          title: 'denoise pix2pix',
          content: '生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．',
          img_url: '../../docs/static/img/denoise-pix2pix.566d650.png',
          github_url: 'https://github.com/fuchami/denoise_pix2pix'
        },
        {
          title: 'pokemon GAN',
          content: 'DCGANを用いてポケモンのドット絵を生成するモデルを作りました',
          img_url: '../../docs/static/img/denoise-pix2pix.566d650.png',
          github_url: 'https:/github.com/fuchami/pokeGAN'
        },
        {
          title: '西野カナ風歌詞生成bot',
          content: 'TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中',
          img_url: '../assets/images/kana.png'
        }
      ]
    }
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/images/' + img)
    }
  }
}
</script>
