<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Al Jazeera Data Visualization<span class="project-time hidden-sm-and-down">December 2016</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Visualize and perform visual analytics on data collected from Al Jazeera website.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>The Al Jazeera is a Qatar-based bilingual news network Al Jazeera that provides news coverage both in Arabic and in English. It is the most influential news media in the middle east and has emerged as one of the main sources of global news in the last few years. This project drew upon a dataset containing 38,000 articles and their metadata crawled from the Al Jazeera English website, aiming to explore the underlying patterns on its coverage and user group, and to understand any hidden biases. If you are interested in the data collecting and cleansing process, please refer to <router-link to="/projects/aljazeera">Harvesting Al Jazeera News</router-link>.</p>
        <p>D3.js is a JavaScript library for visualizing data with HTML, SVG, and CSS. The d3.js library provides various stunning interactive visualization types. I chose a Chord diagram and a Sankey chart for this project. Tableau was also used to create a stream graph and perform geospatial analysis. If you would like to know more about the project, you can download the final project poster below.</p>
        <div class="my-4 text-xs-center">
          <iframe
            src="/demo/chord/"
            class="chord mb-0 hidden-sm-and-down"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            onmousewheel="">
          </iframe>
          <div style="max-width: 480px; margin: 0 auto;">
            <img
              src="/static/chord.png"
              width="100%"
              class="hidden-md-and-up my-2"
            />
            <p class="caption mt-0">An interactive Chord diagram showing inter-regional associations on news topics. Intra-regional relations (lumps with no end points) are also accounted for in this diagram.</p>
            <img
              src="/static/poster.jpg"
              width="100%"
              class="elevation-1 my-2"
            />
            <p class="caption">The project poster introduces some of the findings in a nutshell.</p>
          </div>
        </div>
        <div class="mt-2 text-xs-center">
          <a
            class="btn btn--flat grey lighten-2 grey--text text--darken-2"
            href="/static/pdf/poster.pdf"
            target="_blank"
          >
            <div class="btn__content">
              <v-icon left>file_download</v-icon>
              Download Poster
            </div>
          </a>
        </div>
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
          name: 'VA',
          fullName: 'Visual Analytics',
          color: 'orange'
        },
        {
          name: 'Data Mining',
          color: 'orange'
        },
        {
          name: 'Data Visualization',
          color: 'green'
        },
        {
          name: 'HCI',
          fullName: 'Human-computer Interaction',
          color: 'green'
        },
        {
          name: 'd3.js',
          color: 'blue'
        },
        {
          name: 'Tableau',
          color: 'blue'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

.chord
  width: 100%
  height: 620px

</style>
