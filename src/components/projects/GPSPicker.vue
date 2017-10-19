<template>
  <v-container>
    <v-layout row wrap align-start>
      <v-flex d-flex xs12 mt-2>
        <h1 class="display-1">Online GPS Picker<span class="project-time hidden-sm-and-down">April 2017</span></h1>
      </v-flex>
      <v-flex xs12 my-0>
        <h2 class="headline mb-1">Pick GPS coordinates from various online map services.</h2>
      </v-flex>
      <v-flex xs12 my-2 text-xs-center text-sm-left>
        <template v-for="(tag, idx) in tags">
          <tag-list :tag="tag" :key="idx"></tag-list>
        </template>
      </v-flex>
      <v-flex xs12 mt-2>
        <p>This project is intended to be used in MagicEXIF Editor which facilites the selection of GPS coordinates.</p>
        <p>This tool is developed with Vanilla JavaScript with a little help from JQuery for the UI layer. It natively supports Google Maps, Baidu Map, Amap (Gaode), and Yandex Maps through the official APIs. With Leaflet.js, it can even be extended to support any public online map tiles such as OpenStreetMap, Mapbox, Esri (ArcGIS) and CartoDB. Automatic datum conversion is also supported, which means the webapp is able to automatically switch between WGS-84, GCJ-02, and BD-09 based on the selected map service provider.</p>
        <div class="my-4 text-xs-center">
          <div style="max-width: 480px; margin: 0 auto;">
            <img
              src="/static/gps_picker_ss.jpg"
              width="100%"
              class="elevation-2 mb-2"
            />
            <img
              src="/static/gps_picker_ss_2.jpg"
              width="100%"
              class="elevation-2 mb-2"
            />
            <p class="caption">This tool supports many popular online map services natively through their standard APIs. OpenStreetMap, Mapbox, and more map tiles are also supported with Leaflet.js</p>
            <img
              src="/static/gps_picker_ss_4.jpg"
              width="100%"
              class="elevation-2 mb-2"
            />
            <p class="caption">Loading Google's satellite images with Leaflet.js</p>
          </div>
        </div>
        <div class="my-3 text-xs-center">
          <v-btn dark color="primary" to="/projects/gps_picker/demo?provider=google_lfl">
            <v-icon left>pageview</v-icon>
            View Live Demo
          </v-btn>
          <a
            class="btn btn--flat grey lighten-2 grey--text text--darken-2"
            href="https://github.com/charonchan1991/gps-picker"
            target="_blank"
          >
            <div class="btn__content">
              <v-icon left>fa-github</v-icon>
              Source Code
            </div>
          </a>
        </div>
        <h3 class="title mt-4">Related Projects</h3>
        <ul class="related-projects">
          <li><router-link to="/projects/magicexif">MagicEXIF Metadata Editor</router-link></li>
          <li><router-link to="/projects/magicexif_web">MagicEXIF website (not yet published)</router-link></li>
          <li><router-link to="/projects/mgexf_vldt">MagicEXIF Photo Validator</router-link></li>
        </ul>
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
          name: 'Leaflet.js',
          color: 'blue'
        },
        {
          name: 'JS (Vanilla)',
          fullName: 'Vanilla JavaScript',
          color: 'blue'
        },
        {
          name: 'JQuery',
          color: 'blue'
        },
        {
          name: 'API',
          color: 'blue'
        },
        {
          name: 'GPS',
          color: 'orange'
        },
        {
          name: 'WGS-84',
          color: 'orange'
        },
        {
          name: 'Map Datum',
          color: 'orange'
        }
      ]
    }
  }
}
</script>
