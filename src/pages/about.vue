<template>
  <div id='app'>
    <v-app id="inspire">
      <v-layout justify-center class="my-3">
        <v-flex xs11 md6 lg4>
          <v-card class="elevation-7">
            <v-card-title class="cyan darken-2">
              <div class="hedline white--text">
                <h2>about me</h2>
              </div>
              <v-spacer></v-spacer>
              <v-btn dark icon v-for="l in links" :key="l" class="mx3" v-bind:href="l.url" target="_blank">
                <v-icon size="30px">
                  {{ l.icon }}
                </v-icon>
              </v-btn>
            </v-card-title>

            <v-list v-for="i in items" :key="i" class="transparent">
              <v-list-tile>
                  <v-btn icon>
                  <v-icon class="cyan--text text--darken-2">{{ i.icon }}</v-icon>
                  </v-btn>

                <v-list-tile-content>
                    {{ i.title}}
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
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
      items: [
        {icon: 'mdi-account', title: '二見 悠樹 (futami yuki)', tip: 'name'},
        {icon: 'fas fa-address-card', title: 'fuchami', tip: 'handle'},
        {icon: 'mdi-cake', title: '1995/04/28', tip: 'birthday'},
        {icon: 'location_on', title: 'kagoshima', tip: 'location'},
        {icon: 'mdi-school', title: 'Kagoshima University M1', tip: 'university'},
        {icon: 'mdi-heart', title: 'Deep Learning / Machine Learning', tip: 'Interest'},
        {icon: 'mdi-email', title: 'fuchami[at]icloud.com', tip: 'mail address'}
      ],
      links: [
        {
          icon: 'fab fa-blogger',
          url: 'http://fuchami.hatenadiary.jp/'
        },
        {
          icon: 'fab fa-github',
          url: 'https://github.com/fuchami'
        }
      ]
    }
  }
}
</script>

<style>
</style>
