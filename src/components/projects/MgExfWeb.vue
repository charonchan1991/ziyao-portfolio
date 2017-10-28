<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">MagicEXIF Website (On-going)<span class="project-time hidden-sm-and-down">October 2017</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">The new website for MagicEXIF products with a complete user console system.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <img
          src="/static/mgexf_web.jpg"
          width="100%"
          class="elevation-2 mb-3"
        />
        <img
          src="/static/mgexf_web_ss_3.jpg"
          width="100%"
          class="elevation-2 mb-3"
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
          name: 'Web Dev',
          fullName: 'Web Development',
          color: 'blue'
        },
        {
          name: 'Web App',
          color: 'blue'
        },
        {
          name: 'Frontend',
          color: 'blue'
        },
        {
          name: 'Vue.js',
          color: 'blue'
        },
        {
          name: 'Vuetify',
          color: 'blue'
        },
        {
          name: 'Wilddog',
          color: 'blue'
        },
        {
          name: 'JS (ES6)',
          fullName: 'JavaScript ES6',
          color: 'blue'
        },
        {
          name: 'UX/UI',
          color: 'green'
        },
        {
          name: 'Responsive Design',
          color: 'green'
        }
      ]
    }
  }
}
</script>
