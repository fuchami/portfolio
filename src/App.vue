<template>
  <div id=app>
    <v-app id="inspire">
      <v-navigation-drawer floating fixed v-model="drawer" app class="hidden-md-and-up">
          <v-list dense class="pt-0">
            <v-list-tile v-for="m in menues" :key="m" flat :to="{path: m.url}">
              <v-list-tile-action>
                <v-icon>{{ m.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ m.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
    </v-navigation-drawer>

      <v-toolbar app  fixed class="cyan darken-2">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-title>
          fuchami's portfolio
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="m in menues" :key="m" flat >
            <router-link v-bind:to="m.url" tag="span">{{ m.title }}</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <router-view></router-view>
      </v-content>

      <v-footer dark height="auto" >
        <v-card class="flex" flat tile>
          <v-card-title class="cyan darken-2">
            <v-spacer></v-spacer>
            <v-btn dark icon v-for="l in links" :key="l" class="mx3" v-bind:href="l.url" target="_blank">
              <v-icon size="24px">
                {{ l.icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-actions class="grey darken-3 justify-center">
              &copy;2018 - fuchami  - All Rights Reserved.
          </v-card-actions>

        </v-card>
      </v-footer>

    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      {
        icon: 'fab fa-blogger',
        url: 'http://fuchami.hatenadiary.jp/'
      },
      {
        icon: 'fab fa-github',
        url: 'https://github.com/fuchami'
      }
    ],
    menues: [
      {
        title: 'home',
        icon: 'home',
        url: './'
      },
      {
        title: 'about',
        icon: 'mdi-account',
        url: './about'
      },
      {
        title: 'skill',
        icon: 'mdi-dumbbell',
        url: './skill'
      },
      {
        title: 'work',
        icon: 'mdi-codepen',
        url: './work'
      }
    ]

  })
}
</script>

<style>
</style>
