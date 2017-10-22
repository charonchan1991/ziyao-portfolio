<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Exhibition Booth Renderings<span class="project-time hidden-sm-and-down">September 2013</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Renderings for standard 3x3m exhibition booth for a glove manufacturer.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <img
          src="/static/booth.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/booth_1.jpg"
          width="100%"
          class="elevation-2 mb-2"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TagList from './tags/TagList'
export default {
  components: {
    'tag-list': TagList
  },
  data () {
    return {
      tags: [
        {
          name: '3D',
          color: 'teal'
        },
        {
          name: 'Image Processing',
          color: 'teal'
        },
        {
          name: 'SketchUp',
          color: 'blue'
        },
        {
          name: 'V-Ray',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

