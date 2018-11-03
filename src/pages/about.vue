<template>
  <div id='app'>
    <div center >
      <h1>
        about
      </h1>
    </div>
    <v-app id="inspire">
          <v-chip color="primary" text-color="white">Primary</v-chip>

      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">
                fuchami's profile
              </h3>

              <v-icon>twitter</v-icon>

            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      profile_img: '/src/assets/images/profile.jpg'
    }
  }
}
</script>

<style>
</style>
