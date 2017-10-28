<template>
  <v-layout class="project-list">
    <v-flex xs12>
      <v-card height="100%">
        <v-list three-line class="transparent py-0">
          <template v-for="(item, idx) in items">
            <project-list :item="item" :key="idx" @openDialog="openDialog"></project-list>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectList from './tab/TabList'
export default {
  components: {
    'project-list': ProjectList
  },
  data () {
    return {
      items: [
        { header: 'Software Development', icon: 'desktop_mac' },
        {
          preview: '/static/magicexif_ss.png',
          title: 'MagicEXIF Editor',
          subtitle: 'A powerful toolkit to update EXIF, GPS and other metadata in digital photos.',
          route: '/projects/magicexif'
        },
        {
          preview: '/static/mgexf_vldt.png',
          title: 'MagicEXIF Photo Validator',
          subtitle: 'Test a digital photo if it is an original or has been modified since taken out from the camera.',
          route: '/projects/mgexf_vldt'
        },
        {
          preview: '/static/photo2punch.jpg',
          title: 'Photo2Punch',
          subtitle: 'An image-to-perforation software that can easily create AutoCAD files ready for metal perforation.',
          route: '/projects/photo2punch'
        },
        { header: 'Web Development', icon: 'public' },
        {
          preview: '/static/portfolio_ss.jpg',
          title: 'My Portfolio',
          stacks: ['Vue.js', 'Vuetify'],
          subtitle: 'A web-based portfolio that demonstrates some of my past and present projects.',
          route: '/projects/portfolio'
        },
        {
          preview: '/static/todogo_ss.jpg',
          title: 'TodoGo',
          stacks: ['React.js', 'Firebase'],
          subtitle: 'A simple todo list webapp developed with React.js + Firebase for practice purpose.',
          route: '/projects/todogo'
        },
        {
          preview: '/static/mgexf_web.jpg',
          title: 'MagicEXIF Website',
          stacks: ['Vue.js', 'Wilddog'],
          subtitle: 'The official website for <em>MagicEXIF Editor</em>. A new version of the website is currently underway.',
          route: '/projects/magicexif_web'
        },
        {
          preview: '/static/gps_picker_ss.jpg',
          title: 'Online GPS Picker',
          stacks: ['Leaflet.js', 'JQuery'],
          subtitle: 'Pick GPS coordinates from various online map services and convert them to WGS-84 datum.',
          route: '/projects/gps_picker'
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
