<template>
  <div id='app'>
    <v-app id="inspire" >
      <v-content>
        <v-container fluid grid-list-xl>
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
                  <v-btn round color="green" v-bind:href="pix2pix.github_url" target="_blank">
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
                  <v-chip v-for="c in pix2pix.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>
                <v-card-actions>
                  <v-btn round color="green" v-bind:href="pokeGAN.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
                <br>
              </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 lg4 >
              <v-card elevation-3 hover>
                <v-img v-bind:src="getImgUrl(kanabot.img_url)" aspect-ration="2.75"></v-img>
                <v-card-title primary-title>
                  <h1>{{ kanabot.title}}</h1>
                  <p>{{ kanabot.content}}</p>
                  <v-chip v-for="c in pix2pix.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>
                <v-card-actions>
                  <v-btn round color="green" v-bind:href="kanabot.github_url" target="_blank">
                    github
                  </v-btn>
                </v-card-actions>
                <br>
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
                  <v-btn round color="green" v-bind:href="portfolio.github_url" target="_blank">
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
        content: '生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．',
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
        content: 'DCGANを用いてポケモンのドット絵を生成するモデルを作りました',
        img_url: 'pokeGAN.png',
        github_url: 'https:/github.com/fuchami/pokeGAN',
        clips: [

        ]
      },
      portfolio: {
        title: 'ポートフォリオ',
        content: '自身のポートフォリオサイトです．仕様としてSPA・レスポンシブ対応を目指しました．',
        img_url: 'portfolio.png',
        github_url: 'https:/github.com/fuchami/portfolio',
        clips: [

        ]

      },
      kanabot: {
        title: '西野カナ風歌詞生成bot',
        content: 'TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中',
        img_url: 'kana.png',
        clips: [

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
