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
                <v-list-tile-title>
                  {{ item.title }}
                  <v-chip
                    label
                    class="stacks grey white--text hover--blue"
                    v-for="(stack, k) in item.stacks"
                    :key="k"
                  >
                    {{ stack }}
                  </v-chip>
                </v-list-tile-title>
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
          stacks: ['Vue.js', 'Vuetify'],
          subtitle: 'A web-based portfolio that demonstrates some of my past and present projects.',
          route: '/projects/portfolio'
        },
        {
          preview: '/static/mgexf_web_ss.jpg',
          title: 'MagicEXIF Website',
          stacks: ['Vue.js', 'Bootstrap'],
          subtitle: 'The official website for <em>MagicEXIF Editor</em>. A new version of the website is currently underway.'
        },
        {
          preview: '/static/gps_picker_ss.jpg',
          title: 'Online GPS Picker',
          stacks: ['Javascript'],
          subtitle: 'The map component for <em>MagicEXIF Editor</em> which facilitates the user to pick GPS coordinates.'
        },
        {
          preview: '/static/todogo_ss.jpg',
          title: 'TodoGo',
          stacks: ['React.js', 'Firebase'],
          subtitle: 'A simple todo list webapp developed with React.js + Firebase for practice purpose.',
          route: '/projects/todogo'
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

  .stacks
    margin: 0 5px
    padding: 1px 8px 0
    height: 18px
    font-size: 12px

  .project-list
    padding: 4px !important
    height: 100%

    .card
      overflow-y: auto
      background: #fcfcfc

</style>
