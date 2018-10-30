<template>
  <div id=app>
    <v-app id="inspire">
      <v-toolbar app>
        <v-toolbar-title>
          <router-link to="/">fuchami pages</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="">
          <v-btn flat>
            <router-link to="about">about</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="skill">skill</router-link>
          </v-btn>
          <v-btn flat>
            <router-link to="work">work</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
          <h1>
            template
          </h1>
          <router-view></router-view>
      </v-content>

      <v-footer dark height="auto">
        <v-card class="flex" flat tile>

          <v-card-title class="cyan darken-2">

            <v-spacer></v-spacer>

          </v-card-title>

          <v-card-actions class="grey darken-3 justify-center">
              Copyrighting&copy;2018 - fuchami  - All Rights Reserved.
          </v-card-actions>

        </v-card>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({

  })
}
</script>

<style>
</style>
