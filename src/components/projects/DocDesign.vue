<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">How I arrived at UBC<span class="project-time hidden-sm-and-down">January 2015</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Coursework for a Document Design class.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>This is part of the coursework for LIBR 556 - Document Design II at SLAIS @ UBC <small>(2014-2015 Winter Term 2)</small>. The aim of this assignment is to apply common design elements such as contrast and animation to a presentation document. The topic of this assignment was <em>How I Arrived at UBC</em>, a story of mine.</p>
        <img
          src="/static/doc_design.png"
          width="100%"
          class="elevation-2 mb-2"
        />
        <img
          src="/static/doc_design_2.png"
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
          name: 'Document Design',
          color: 'green'
        },
        {
          name: 'Image Processing',
          color: 'teal'
        },
        {
          name: 'PowerPoint',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

