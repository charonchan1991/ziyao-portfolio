<template>
  <v-layout class="project-list">
    <v-flex xs12>
      <v-card height="100%">
        <v-list three-line class="transparent py-0">
          <template v-for="(item, idx) in items">
            <v-subheader v-if="item.header" :key="idx"><v-icon class="pr-2">{{ item.icon }}</v-icon>{{ item.header }}</v-subheader>
            <v-divider v-if="item.header" :key="idx"></v-divider>
            <v-list-tile v-else :key="idx" @click="openDialog" :to="item.route">
              <div
                class="preview"
                :style="{
                  background: 'url(' + item.preview + ') center center / cover no-repeat'
                }"
              >
              </div>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { header: 'Web Development', icon: 'public' },
        {
          preview: '/static/portfolio_ss.jpg',
          title: 'My Portfolio',
          subtitle: 'A portfolio that demonstrates some of my past and present projects.',
          route: '/projects/portfolio'
        },
        {
          preview: '/static/mazdis_sabps_2_0.jpg',
          title: 'MagicEXIF Website',
          subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
        },
        {
          preview: '/static/mazdis_sabps_2_0.jpg',
          title: 'Online GPS Picker',
          subtitle: "<span class='grey--text text--darken-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
        },
        { header: 'Software Development', icon: 'desktop_mac' },
        {
          preview: '/static/magicexif_ss.png',
          title: 'MagicEXIF Editor',
          subtitle: 'A powerful toolkit to update EXIF, GPS and other metadata in digital photos.',
          route: '/projects/magicexif'
        },
        {
          preview: '/static/magicexif_ss_3.png',
          title: 'MagicEXIF Photo Validator',
          subtitle: 'Test a digital photo if it is an original or has been modified since taken out from the camera.'
        }
      ]
    }
  },
  methods: {
    openDialog () {
      this.$emit('openDialog')
    }
  }
}
</script>

<style lang="stylus" scoped>

  .preview
    min-width: 125px
    min-height: 70px
    margin-right: 15px

  .project-list
    padding: 4px !important
    height: 100%

    .card
      overflow-y: auto
      background: #fcfcfc

</style>
