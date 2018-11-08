<template>
  <div id='app'>
    <v-app id="inspire" >
      <v-content>
        <v-container fluid grid-list-xl>
          <v-layout wrap justify-space-between >
            <v-flex xs12 sm6 md6 lg4 v-for="work in works" :key="work">
              <v-card elevation-3 hover>
                <v-img v-bind:src="work.img_url" aspect-ration="2.75"></v-img>

                <v-card-title primary-title>
                  <h1>{{ work.title}}</h1>
                  <p>{{ work.content}}</p>
                  <v-chip v-for="c in work.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>
                </v-card-title>

                <v-card-actions>
                  <v-btn round color="green" v-bind:href="work.github_url" target="_blank">
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
      works: [
        {
          title: 'denoise pix2pix',
          content: '生成モデルを用いて画像に付与しているノイズ(ごま塩ノイズ)を除去を行いました.モデルにはGANと呼ばれる生成モデルのひとつであるpix2pixを使用しています．',
          img_url: '/static/img/pix2pix.566d650.png',
          github_url: 'https://github.com/fuchami/denoise_pix2pix',
          clips: [
            { color: 'red darken-1', name: 'keras' },
            { color: 'orange', name: 'tensorflow' },
            { color: 'green', name: 'openCV' }
          ]
        },
        {
          title: 'pokemon GAN',
          content: 'DCGANを用いてポケモンのドット絵を生成するモデルを作りました',
          img_url: '/static/img/pokeGAN.7084d95.png',
          github_url: 'https:/github.com/fuchami/pokeGAN',
          clips: [

          ]
        },
        {
          title: 'ポートフォリオ',
          content: '自身のポートフォリオサイトです．仕様としてSPA・レスポンシブ対応を目指しました．',
          img_url: '',
          github_url: 'https:/github.com/fuchami/portfolio',
          clips: [

          ]
        },
        {
          title: '西野カナ風歌詞生成bot',
          content: 'TwitterAPIを用いて西野カナの楽曲の歌詞を収集し，それらを元に西野カナ風の歌詞をツイートするbotです．現在停止中',
          img_url: '/static/img/kana.56970c5.png',
          clips: [

          ]
        }
      ]
    }
  }
}
</script>
