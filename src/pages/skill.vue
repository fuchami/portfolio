<template>
  <div id="app">
    <v-app id="inspire">
      <v-timeline align-top :dense="$vuetify.breakpoint.mdAndDown" >
        <v-flex xs10 offset-xs1>
          <v-timeline-item v-for="s in skills" :key="s" fill-dot small color="cyan darken-2">
            <v-card dark v-bind:class="s.class" xs8 md4>
              <v-card-title  class="title">
                  <v-icon size='24' class="mr-3">{{ s.icon }}</v-icon>
                    {{ s.language }}
              </v-card-title>
              <v-card-text class="white text--primary">
                {{ s.content}}
                <v-flex>
                <br>
                <v-chip v-for="c in s.clips" :key='c' v-bind:color="c.color" text-color="white">
                  {{ c.name }}
                </v-chip>

                </v-flex>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-flex>
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        {
          icon: 'fab fa-python',
          class: 'blue darken-2',
          language: 'python',
          content: '私が最もよく使用する言語です．主にkeras/tensorflowを使ったDeep Learningの実装を行っています．Twitter APIを使ったbotの開発や進化計算の実装も行いました．画像処理やファイルの一括操作も行います',
          years: '3年',
          clips: [
            { color: 'red darken-1', name: 'keras' },
            { color: 'orange', name: 'tensorflow' },
            { color: 'green', name: 'openCV' },
            { color: 'orange darken-4', name: 'deap' }
          ]
        },
        {
          icon: 'fas fa-code',
          class: 'red darken-4',
          language: 'Ruby',
          content: 'インターン先にて企業向けのWebアプリを開発しており，そのタイミングで勉強を始めました．基本的にはRuby on Railsを用いた実装を行っています．',
          years: '6ヶ月',
          clips: [
            { color: 'red darken-4', name: 'Ruby on Rails' }
          ]
        },
        {
          icon: 'fas fa-code',
          class: 'yellow darken-1',
          language: 'C',
          content: '大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGLを用いた簡単なゲームの制作などに使用しました.',
          years: '2年半',
          clips: [
            { color: 'green', name: 'openCV' },
            { color: 'cyan darken-1', name: 'openGL' }
          ]
        },
        {
          icon: 'fab fa-html5',
          class: 'deep-orange darken-1',
          language: 'HTML / CSS',
          content: 'インターン先にてWebページの制作に使用しています',
          years: '1年',
          clips: [
            { color: 'purple', name: 'Bootstrap' }
          ]
        },
        {
          icon: 'fab fa-js-square',
          class: 'amber darken-1',
          language: 'javascript',
          content: 'インターン先にてWebページの制作に使用しています．vue.jsを用いて簡単なWebページの制作も行いました．',
          years: '1年',
          clips: [
            { color: 'light-green', name: 'vue.js' },
            { color: 'blue', name: 'jQuery' }
          ]
        },
        {
          icon: 'fab fa-github',
          class: 'green',
          language: 'Github',
          content: 'gitの基本的な使い方を習得しています．複数人での開発経験もあります．',
          years: '1年'
        }
      ]
    }
  }
}
</script>
