<template>
  <v-container>
    <v-layout row wrap align-center my-5>
      <v-flex xs12 my-5 text-xs-center>
        <v-icon x-large>fa-exclamation-triangle</v-icon>
        <p class="title mt-3 mb-2 grey--text text--darken-2">Under Construction</p>
        <!-- <v-btn flat color="primary" @click="onBack" class="mt-2">Go Back</v-btn> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .title
    text-transform: uppercase
</style>
