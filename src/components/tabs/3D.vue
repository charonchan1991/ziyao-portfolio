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
        { header: '3D Renderings', icon: 'image' },
        {
          preview: '/static/mazdis_sabps_1_0.jpg',
          title: 'MazDome Renderings',
          stacks: ['Blender', 'Cycles'],
          subtitle: 'Photorealistic renderings for the automatic bike-parking products of Mazdis Inc.',
          route: '/projects/mazdome'
        },
        {
          preview: '/static/bedroom.jpg',
          title: 'Bedroom Renderings + VR',
          stacks: ['Blender', 'Sketchfab'],
          subtitle: 'Photorealistic renderings and Sketchfab-based VR experience of a small bedroom that I created.',
          route: '/projects/bedroom'
        },
        {
          preview: '/static/booth.jpg',
          title: 'Exhibition Booth Renderings',
          stacks: ['SketchUp', 'V-Ray'],
          subtitle: '3D model and renderings for a standard 3x3m booth for a glove manufacturer in Nantong, China.',
          route: '/projects/booth'
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
