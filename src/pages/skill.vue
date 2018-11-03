<template>
  <div id="app">
    <v-app id="inspire">
      <v-timeline >
        <v-flex xs10 offset-xs1>
          <v-timeline-item v-for="s in skills" :key="s" fill-dot v-bind="s.posiiton">
            <v-card class="elevation-2">
              <v-card-title v-bind:class="s.class">
                <v-icon dark size='42' class="mr-3">
                  mdi-magnify
                </v-icon>
                <h2 class="display-1 white--text font-weight-light">
                  {{ s.language }}
                </h2>
              </v-card-title>
              <v-container>
                <v-layout>
                  <v-flex>
                    {{ s.content}}
                  </v-flex>
                </v-layout>

                  <v-chip v-for="c in s.clips" :key='c' v-bind:color="c.color" text-color="white">
                    {{ c.name }}
                  </v-chip>

              </v-container>
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
          class: 'blue darken-2',
          language: 'python',
          content: '一番良く使う言語です．主に機械学習(Deep Learning)の実装に使用しています．',
          position: 'left',
          clips: [
            {
              color: 'red darken-1',
              name: 'keras'
            },
            {
              color: 'orange',
              name: 'tensorflow'
            },
            {
              color: 'green',
              name: 'openCV'
            }
          ]
        },
        {
          class: 'amber lighten-1',
          language: 'C',
          content: '大学の授業で2年半ほど勉強しました．OpenCVを用いた画像処理やOpenGL',
          position: 'right'
        },
        {
          class: 'red darken-4',
          language: 'Ruby',
          content: '現在，アルバイトとして企業向けのWebアプリを実装しておりそのタイミングで勉強しました．基本的にはRuby on Railsを使った実装が多いです.',
          position: 'left',
          clips: [
            {
              color: 'red darken-4',
              name: 'Ruby on Rails'
            }
          ]
        }
        
      ]

    }
  }
}
</script>
