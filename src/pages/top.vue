<template>
  <div id='app'>
    <v-app id="inspire">
      <v-parallax dark height="800" v-bind:src="getImgUrl(top_img_url)">
        <v-layout align-center column justify-center>
          <h1 class="display-3 font-weight-thin mb-4">
            fuchami's portfolio
          </h1>
          <h2 class="font-weight-thin">
            deep learning / web enginner
          </h2>
        </v-layout>
      </v-parallax>
      <v-spacer></v-spacer>

        <v-layout row wrap justify-center class="my-5">
          <v-flex xs11 >
            <v-card class="elevation-7">
              <v-card-title class="layout justify-center cyan darken-2">
                <div class="hedline white--text">
                  <h2>
                  about me
                  </h2>
                </div>
              </v-card-title>
              <v-card-text>
                tetetetetet
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>

      <v-layout row wrap justify-center class="my-4">
        <v-flex md8>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contact</div>
            </v-card-title>

            <v-list class="transparent">
              <v-list-tile class="layout justify-space-around">
                <v-list-tile-action>
                  <v-icon class="cyan--text text--darken-2">mail</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    sc*******[at]ibe.kagoshima-u.ac.
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile class="layout justify-space-around">
                <p>[at]には@を入力してください</p>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>

    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      top_img_url: 'top_Fotor.jpg'
    }
  },
  methods: {
    getImgUrl (img) {
      return require('../assets/images/' + img)
    }
  }
}
</script>

<style>
</style>
