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
        { header: 'User Interface & Interaction Design', icon: 'touch_app' },
        {
          preview: '/static/shareader.png',
          title: 'ShaReader',
          stacks: ['Axure'],
          subtitle: 'An interactive interface for social e-book applications to improve immersive shared reading experience.',
          route: '/projects/shareader'
        },
        {
          preview: '/static/utips_sm.png',
          title: 'UTips',
          stacks: ['Photoshop'],
          subtitle: 'User interface design for UTips, an app that focuses on on-campus information.',
          route: '/projects/utips'
        },
        {
          preview: '/static/doc_design.png',
          title: 'How I Arrived at UBC',
          stacks: ['PowerPoint'],
          subtitle: 'Coursework for a Document Design class whose aim was to apply common design elements to a presentation doc.',
          route: '/projects/doc_design'
        },
        { header: 'Visual Analytics', icon: 'bubble_chart' },
        {
          preview: '/static/aljazeera_v.png',
          title: 'Al Jazeera Data Visualization',
          stacks: ['d3.js', 'Tableau'],
          subtitle: 'Visualizing and perform visual analytics (VA) on data collected from the Al Jazeera English news network.',
          route: '/projects/aljazeera_va'
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
