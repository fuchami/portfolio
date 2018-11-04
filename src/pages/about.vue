<template>
  <div id='app'>
    <v-app id="inspire">
      <v-layout justify-center class="my-3">
        <v-flex xs10 >
          <v-card class="elevation-7">
            <v-card-title class="cyan darken-2">
                <v-icon size="48px">
                  mdi mdi-account
                </v-icon>
                &emsp;&emsp;
              <div class="hedline white--text">
                <h1>about me</h1>
              </div>
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
        {icon: 'mdi-account', title: '二見 悠樹 (futami yuki)'},
        {icon: 'location_on', title: 'kagoshima'},
        {icon: 'mdi-cake', title: '1995/04/28'},
        {icon: 'mdi-school', title: '鹿児島大学院理工学研究科 情報生体システム工学'},
        {icon: 'mdi-message-alert', title: 'DeepLearning / Web Application'},
        {icon: 'mdi-email', title: 'sc114057[at]ibe.kagoshima-u.ac.jp'}

      ]
    }
  }
}
</script>

<style>
</style>
