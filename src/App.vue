<template>
  <div id=app>
    <v-app id="inspire">
      <v-toolbar app class="cyan darken-2">
        <v-toolbar-title>
          fuchami's portfolio
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
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
