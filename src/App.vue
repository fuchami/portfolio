<template>
  <div id=app>
    <v-app id="inspire">
      <v-toolbar app class="cyan darken-2">
        <v-toolbar-title>
          fuchami's portfolio
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="m in menues" :key="m" flat >
            <router-link v-bind:to="m.url" tag="span">{{ m.title }}</router-link>
          </v-btn>
        </v-toolbar-items>

        <v-menu button left class="hidden-md-and-up">
          <v-btn icon>
            <v-icon>
              more_vert
            </v-icon>
          </v-btn>

          <v-list>
            <v-list-tile v-for="m in menues" :key="m">
              <router-link v-bind:to="m.url">
              <v-list-tile-title>{{ m.title }}</v-list-tile-title>
              </router-link>
            </v-list-tile>
          </v-list>

        </v-menu>
      </v-toolbar>

      <v-content>
        <router-view></router-view>
      </v-content>

      <v-footer dark height="auto" >
        <v-card class="flex" flat tile>

          <v-card-title class="cyan darken-2">

            <v-spacer></v-spacer>
            <v-btn v-for="l in links" :key="l" class="mx3" dark icon>
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
    links: [
      {
        icon: 'fab fa-github',
        url: ''
      }
    ],
    menues: [
      {
        title: 'home',
        url: './'
      },
      {
        title: 'about',
        url: './about'
      },
      {
        title: 'skill',
        url: './skill'
      },
      {
        title: 'work',
        url: './work'
      }
    ]

  })
}
</script>

<style>
</style>
