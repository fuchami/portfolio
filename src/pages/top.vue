<template>
  <div id='app'>
    <v-app id="inspire">
      <v-parallax dark height="600" v-bind:src="getImgUrl(top_img_url)">
        <v-layout align-center column justify-center>
          <h1 class="display-3 font-weight-thin mb-4" id="top">
            fuchami's portfolio
          </h1>
          <h2 class="font-weight-thin">
            deep learning / web enginner
          </h2>
        </v-layout>
      </v-parallax>
      <v-spacer></v-spacer>

      <v-layout row wrap justify-center class="my-1" id="contact">
        <v-flex md8>
          <v-card class="elevation-0 transparent" >
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
                    sc114057[at]ibe.kagoshima-u.ac.jp
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
