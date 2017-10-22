<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">UTips Interface Design<span class="project-time hidden-sm-and-down">May 2013</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">User interface design for UTips.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>UTips is an app that focuses on on-campus information service. This user interface was designed for a UI competition and has been granted the second prize. Created with Adobe Photoshop CS5.</p>
        <img
          src="/static/utips.png"
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
          name: 'UX/UI',
          color: 'green'
        },
        {
          name: 'Image Processing',
          color: 'teal'
        },
        {
          name: 'Photoshop',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

